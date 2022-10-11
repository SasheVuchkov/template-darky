export const getSiteUrl = () => {
    return process.env.NEXT_PUBLIC_SITE_URL;
}

export const getCanonicalUrl = (url: string) => {
    return `${getSiteUrl()}${url}${url[url.length - 1] === '/' ? '' : '/'}`;
}

export const getAbsolutePath = (path: string) => {
    return `${getSiteUrl()}${path}`;
}

export const getPageTitle = (title: string) => {
    return `${title} - David Simpson`;
}