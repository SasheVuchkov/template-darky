import {monthNames} from './constants';

export const formatDate = (date: Date) => `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
export const getCategorySlug = (cat: string) => cat.replaceAll(' ', '-').replaceAll(/[^-a-z0-9_]+/ig, '').toLowerCase();
