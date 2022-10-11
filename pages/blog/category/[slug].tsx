import DefaultLayout from '../../../components/layouts/DefaultLayout';
import SectionHeading from '../../../components/common/SectionHeading';
import PostSnippet from '../../../components/blog/PostSnippet';
import {getAllPosts, groupSnippetsByCategory, sortByPublishedAt} from '../../../lib/blog';
import {PostSnippet as PostSnippetType} from '../../../lib/types';
import {GetStaticPropsContext} from 'next';
import {getCategorySlug, getPublicBrand} from '../../../lib/utils';
import Head from 'next/head';
import React from 'react';

export const excerpt = (str: string, wordsNumber: number) => {
    const words = str.split(' ').slice(0, wordsNumber);
    return `${words.join(' ').replace(/[^a-z0-9]+$/ig, '')}...`;
}

export type Props = {
    snippets: PostSnippetType[];
    category: string;
}

export default function Index({snippets, category}: Props) {
    return (
        <DefaultLayout mainClass="p-6 md:p-10 pt-0 pb-0" footerClass="mx-10">
            <Head>
                <title>{category} - Blog - {getPublicBrand()}</title>
            </Head>
        <SectionHeading as="h1" className="text-2xl my-5">Blog: <span className="first-letter:uppercase">{category}</span></SectionHeading>
            <div className="flex flex-col md:flex-row  flex-wrap justify-between">
                {snippets.map(post => <PostSnippet key={post.slug} {...post} className="w-full md:w-[49.3%] mb-4" />)}
            </div>

        </DefaultLayout>
    );
}

export const getStaticProps = async ({params}: GetStaticPropsContext) => {
    try {
        const posts = await getAllPosts();
        const categories = await groupSnippetsByCategory(posts);

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
    const allPosts = await getAllPosts();
    const categories = Object.keys(groupSnippetsByCategory(allPosts));
    return {paths: categories.map(cat => ({params: {slug: getCategorySlug(cat)}})), fallback: false};
}