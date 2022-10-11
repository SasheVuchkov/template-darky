import DefaultLayout from '../../components/layouts/DefaultLayout';
import SectionHeading from '../../components/common/SectionHeading';
import PostSnippet from '../../components/blog/PostSnippet';
import {getAllPosts, getAllPostSnippets, getPostBySlug, getRelatedPosts} from '../../lib/blog';
import {Post as PostType, PostSnippet as PostSnippetType} from '../../lib/types';
import {GetStaticProps} from 'next';
import {formatDate, getCategorySlug} from '../../lib/utils';
import Image from 'next/image';
import DefaultLink from '../../components/navs/Link';

export const excerpt = (str: string, wordsNumber: number) => {
    const words = str.split(' ').slice(0, wordsNumber);
    return `${words.join(' ').replace(/[^a-z0-9]+$/ig, '')}...`;
}

export type Props = {
    post: PostType,
    related: PostSnippetType[];
}

export default function Post({post, related}: Props) {
    return (
        <DefaultLayout mainClass="p-6 md:p-10 pt-0 pb-0" footerClass="mx-10">
            <article>
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <SectionHeading as='h1' className="text-3xl mt-5 mb-5 md:w-[80%]">{post.title}</SectionHeading>
                    <div className="text-white text-opacity-60 mb-5 md:mb-0">{formatDate(new Date(post.publishedAt))}</div>
                </div>
                <div className="relative h-[35vh]  md:h-[70vh]">
                    <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                </div>
                <div className="prose prose-invert max-w-full m-0 prose-li:marker:text-secondary-100 prose-a:text-secondary-100 prose-a:no-underline hover:prose-a:text-secondary-50 prose-a:transition-colors prose-a:duration-300  prose-blockquote:border-l-secondary-100 text-white opacity-70 bg-primary-400 p-5 mt-5" dangerouslySetInnerHTML={{__html: post.__content}} />
                <div className="bg-primary-400 p-5 text-white">Posted in {post.categories.map((cat, index) => <div key={cat} className="inline"><DefaultLink className="text-secondary-100 hover:text-secondary-50" href={`/blog/category/${getCategorySlug(cat)}`}>{cat}</DefaultLink> {index < post.categories.length - 1 ? ', ' : ''}</div>)}</div>
            </article>
            <aside>
                <SectionHeading as="h2" className="text-xl my-5">Related Posts</SectionHeading>
                <div className="flex flex-col md:flex-row flex-wrap justify-between">
                    {related.map(post => <PostSnippet key={post.slug} {...post} className="w-full md:w-[49.3%] mb-4" />)}
                </div>
            </aside>
        </DefaultLayout>
    );
}

export const getStaticProps: GetStaticProps = async ({params})  => {
    try {
        const post = await getPostBySlug(params?.slug as string);
        const postSnippets = await getAllPostSnippets();
        const related = getRelatedPosts(post, postSnippets, 2, 1);

        return {
            props: {post: post, related: related}, // will be passed to the page component as props
        }

    } catch (err) {

        return {
            props: {}, // will be passed to the page component as props
            notFound: true,
        }
    }
}

export const getStaticPaths = async() => {
    const allPosts = await getAllPosts();
    return {paths: allPosts.map(post => ({params: {slug: post.slug}})), fallback: false};
}