import {ReactElement} from 'react';

export type LinkEntity = {
    href: string,
    text: string,
    icon: any,
    target?: '_blank'
    className?: string,
}

export type Snippet = {
    title: string,
    text: string,
    href: string,
}

export type Testimonial = {
    name: string,
    occupation: string,
    text: string,
    stars: number,
    photo: string,
}

export type PriceTableItem = {
    text: string,
    icon: ReactElement,
}

export type PriceTable = {
    title: string,
    price: {
        value: string,
        unit: string,
        currency: string,
    }
    items: PriceTableItem[],
    href: string,
}

export type PostSnippet = {
    title: string,
    excerpt: string,
    slug: string,
    publishedAt: string,
    categories: string[]
    image: string,
    className?: string,
}

export type ProjectSnippet = Omit<PostSnippet, "excerpt">;

export type Post = PostSnippet & {
    __content: string,
};


export type Project = Omit<Post, "excerpt"> & {
    orderDate: string,
    finishedOn: string,
    status: 'In Progress' | 'Completed',
    client: string,
    location: string,
    techStack: string,
};

