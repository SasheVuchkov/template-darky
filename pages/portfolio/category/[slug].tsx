import DefaultLayout from '../../../components/layouts/DefaultLayout';
import SectionHeading from '../../../components/common/SectionHeading';
import {getAllPosts, getAllProjects, groupSnippetsByCategory, sortByPublishedAt} from '../../../lib/blog';
import {ProjectSnippet as ProjectSnippetType} from '../../../lib/types';
import {GetStaticPropsContext} from 'next';
import {getCategorySlug} from '../../../lib/utils';
import ProjectSnippet from '../../../components/portfolio/ProjectSnippet';


export type Props = {
    snippets: ProjectSnippetType[];
    category: string;
}

export default function Index({snippets, category}: Props) {
    return (
        <DefaultLayout mainClass="p-6 md:p-10 pt-0 pb-0" footerClass="mx-10">
        <SectionHeading as="h1" className="text-2xl my-5">Portfolio: <span className="first-letter:uppercase">{category}</span></SectionHeading>
            <div className="flex flex-col md:flex-row  flex-wrap justify-between">
                {snippets.map(project => <ProjectSnippet key={project.slug} {...project} className="w-full md:w-[49.3%] mb-4" />)}
            </div>

        </DefaultLayout>
    );
}

export const getStaticProps = async ({params}: GetStaticPropsContext) => {
    try {
        const projects = await getAllProjects();
        const categories = await groupSnippetsByCategory(projects)

        const category = Object.keys(categories).filter(cat => getCategorySlug(cat) === params?.slug).pop();

        if (typeof category === 'undefined') {
            return {
                props: {}, // will be passed to the page component as props
                notFound: true,
            }
        }


        return {
            props: {category: category, snippets: sortByPublishedAt(categories[category].map(post => ({...post, __content: null})))}, // will be passed to the page component as props
        }

    } catch (err) {

        return {
            props: {}, // will be passed to the page component as props
            notFound: true,
        }
    }
}

export const getStaticPaths = async() => {
    const projects = await getAllProjects();
    const categories = Object.keys(groupSnippetsByCategory(projects));
    return {paths: categories.map(cat => ({params: {slug: getCategorySlug(cat)}})), fallback: false};
}