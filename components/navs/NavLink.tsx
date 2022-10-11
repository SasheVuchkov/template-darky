import NextLink from 'next/link';
import {LinkEntity} from '../../lib/types';

export type Props = {
    className?: string,
    link: LinkEntity,
}

export default function NavLink({className, link}: Props) {
    return (
        <NextLink href={link.href} passHref={true}>
            <a className={`hover:text-secondary-100 active:text-secondary-100 cursor-pointer transition-colors duration-300 text-white flex ${className ?? ''}`} >
                <div>{link.icon}</div>
                <span className="ml-2 mb-3">{link.text}</span>
            </a>
        </NextLink>
    );
}