import glob from 'glob';
import fs from 'fs';
import {loadFront as yamlLoadFront} from 'yaml-front-matter';
import {Post, PostSnippet, Project} from './types';


export const loadFrontSync = (src: string): any => {
    const contents = fs.readFileSync(src, 'utf8');
    return yamlLoadFront(contents);
}

export const loadFront = (src: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(src, 'utf8', (err, contents) => {
            if (err) {
                reject(err);
                return;
            }

            const front = yamlLoadFront(contents);
            resolve({...front, publishedAt: getDateFromPath(src), categories: getCategories(front.categories)});
        });
    });
}

export const traverseFolders = function (src: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        glob(src + '/**/*', (err: Error|null, res: string[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    })
};


export const getAll = async (src: string) => {
    const files: string[] = await traverseFolders(src);
    const promises: any[] = [];

    for (const file of files) {
        if (file.match(/\.md$/ig)) {
            promises.push(loadFront(file));
        }
    }

    return Promise.all(promises);
}

export const getAllPosts = async () => {
    const result = await getAll('./data/posts');
    return result;
}

export const getAllProjects = async () => {
    const result = await getAll('./data/projects');
    return result;
}

export const getAllPostSnippets = async () => {
    const allPosts = await getAllPosts();
    const snippets = allPosts.map(post => ({...post, __content: null}));
    return sortByPublishedAt(snippets);
}

export const getAllProjectSnippets = async () => {
    const allProjects = await getAllProjects();
    const snippets = allProjects.map(project => ({...project, __content: null}));
    return sortByPublishedAt(snippets);
}


export const sortByPublishedAt = (snippets: any, order: 'DESC'|'ASC' = 'DESC') => {
    return snippets.sort((a:any, b:any) => {
        const aDate = new Date(a.publishedAt);
        const bDate = new Date(b.publishedAt);

        if (order === 'DESC') {
            return bDate.getTime() - aDate.getTime();
        }

        return aDate.getTime() - bDate.getTime();
    })
}

export const groupSnippetsByCategory = (posts: any[]) => {
    const categories: Record<string, any[]> = {};
    posts.forEach(post => {
        let postCategories: string[] = [];

        if (typeof post.categories === 'string') {
            postCategories = post.categories.split(' ');
        }

        if (postCategories.length < 2 && typeof post.categories === 'string') {
            postCategories = post.categories.split(',').map((cat: string) => cat.trim());
        }

        if (typeof post.category !== 'string') {
            postCategories = post.categories;
        }


        if (post.category) {
            postCategories.push(post.category);
        }

        postCategories.forEach((category: string) => {
            if (typeof categories[category] === 'undefined') {
                categories[category] = [];
            }

            categories[category].push(post);
        });
    })

    return categories;
}

export const getCategories = (cats?: string): string[] => {
    let categories: string[] = [];

    if (cats && cats?.indexOf(', ') < 1) {
        categories = cats.split(' ');
    }

    if (cats && cats?.indexOf(', ') > -1) {
        categories = cats.split(', ');
    }

    return categories;
}

export const getDateFromFilename = (filename: string): string => {
    const strDate = filename.substring(0, 10);
    const defaultDate = new Date('1977-01-01');

    if (strDate.length < 10) {
        return defaultDate.toISOString();
    }

    const date = new Date(strDate);

    if (date instanceof Date && isNaN(date.getTime())) {
        return defaultDate.toISOString();
    }

    return date.toISOString();
}

export const getDateFromPath = (src: string): string => {
    const parts = src.split('/');
    return getDateFromFilename(parts.pop() || '');
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
    const posts = await getAllPosts();

    const filtered = posts.filter(post => post.slug === slug);

    if (filtered.length < 1) {
        throw new Error('Not found');
    }

    return filtered.pop() as Post;
}

export const getProjectBySlug = async (slug: string): Promise<Project> => {
    const projects = await getAllProjects();
    console.log(projects);
    const filtered = projects.filter(project => project.slug === slug);

    console.log(filtered);
    if (filtered.length < 1) {
        throw new Error('Not found');
    }

    return filtered.pop() as Project;
}

export const getRelatedPosts = (post: Post, posts: PostSnippet[], maxPosts: number, minCommonTags: number = 1) => {
    const related: PostSnippet[] = [];
    let num = 0;

    for (const postSnippet of posts) {

        if (postSnippet.slug === post.slug) {
            continue;
        }

        const intersection = post.categories.filter(cat => postSnippet.categories.includes(cat));

        if (intersection.length >= minCommonTags) {
            related.push(postSnippet);
            num++;
        }

        if (num >= maxPosts) {
            break;
        }
    }

    return related;
}