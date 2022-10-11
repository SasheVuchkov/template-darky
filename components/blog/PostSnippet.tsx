import DefaultLink from '../navs/Link';
import Image from 'next/image';
import {formatDate, getCategorySlug} from '../../lib/utils';
import AltLink from '../navs/AltLink';
import {PostSnippet as PostSnippetType} from '../../lib/types';

export default function PostSnippet({title, excerpt, slug, categories, publishedAt, image, className}: PostSnippetType) {
    return (
        <article className={`bg-primary-400 shadow-lg ${className ?? ''}`}>
            <div className="relative h-72">
                <DefaultLink href={`/blog/${slug}`}>
                    <Image src={image} objectFit="cover" layout="fill" />
                </DefaultLink>
            </div>
            <div className="p-4">
                <div className="inline-block bg-primary-500 rounded-xl px-4 py-1 text-white text-sm text-opacity-60 mb-3">
                    {formatDate(new Date(publishedAt))} / {categories.map((cat, index) =>
                        <div key={cat} className="inline w-full"><DefaultLink className="text-opacity-60 hover:text-opacity-100" href={`/blog/category/${getCategorySlug(cat)}`}>
                        {cat}
                    </DefaultLink>{index < categories.length - 1 ? ', ' : ''}</div>
                    )}
                </div>
                <h2 className="text-white font-semibold text-lg"><DefaultLink href={`/blog/${slug}`}>{title}</DefaultLink></h2>
                <p className="text-white text-opacity-80 my-5">{excerpt}</p>
                <AltLink href={`/blog/${slug}`} className="mt-5">Read More</AltLink>
            </div>
        </article>
    );
}