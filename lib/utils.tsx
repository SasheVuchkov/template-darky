import {monthNames} from './constants';

export const isDev = process.env.NODE_ENV !== 'production';
export const formatDate = (date: Date) => `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
export const getCategorySlug = (cat: string) => cat.replaceAll(' ', '-').replaceAll(/[^-a-z0-9_]+/ig, '').toLowerCase();

export const getPublicBrand = (): string => process.env.NEXT_PUBLIC_BRAND || '';
