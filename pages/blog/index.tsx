import DefaultLayout from '../../components/layouts/DefaultLayout';
import SectionHeading from '../../components/common/SectionHeading';
import PostSnippet from '../../components/blog/PostSnippet';
import {getAllPostSnippets, sortByPublishedAt} from '../../lib/blog';
import {PostSnippet as PostSnippetType} from '../../lib/types';
import Head from 'next/head';
import {getPublicBrand} from '../../lib/utils';
import React from 'react';

export const excerpt = (str: string, wordsNumber: number) => {
    const words = str.split(' ').slice(0, wordsNumber);
    return `${words.join(' ').replace(/[^a-z0-9]+$/ig, '')}...`;
}

export type Props = {
    snippets: PostSnippetType[];
}

export default function Index({snippets}: Props) {
    return (
        <DefaultLayout mainClass="p-6 md:p-10 pt-0 pb-0" footerClass="mx-10">
            <Head>
                <title>{`Blog - ${getPublicBrand()}`}</title>
            </Head>
            <SectionHeading as="h1" className="text-2xl my-5">Blog</SectionHeading>
            <div className="flex flex-col md:flex-row flex-wrap justify-between">
                {snippets.map(post => <PostSnippet key={post.slug} {...post} className="w-full md:w-[49.3%] mb-4" />)}
            </div>

        </DefaultLayout>
    );
}

export const getStaticProps = async () => {
    const snippets = await getAllPostSnippets();
    return {props: {snippets: sortByPublishedAt(snippets)}}
}