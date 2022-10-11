import NextLink from 'next/link';
import {LinkEntity} from '../../lib/types';
import {PropsWithChildren} from 'react';

export type Props = {
    className?: string,
    href: string,
}

export default function NavLink({className, children, href}: PropsWithChildren<Props>) {
    return (
        <NextLink href={href} passHref={true}>
            <a className={`hover:text-secondary-100 transition-colors duration-300 text-white ${className ?? ''}`} >{children}</a>
        </NextLink>
    );
}