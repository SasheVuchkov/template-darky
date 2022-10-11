import React, {PropsWithChildren} from 'react';

export type Props = {
    href: string,
    className?: string;
}

export default function AltLink({children, href, className}: PropsWithChildren<Props>) {
    return (
        <a href={href} className={`text-secondary-100 uppercase text-sm group hover:text-secondary-50 ${className ?? ''}`}>{children} <span className="transition-all relative left-1 group-hover:left-3">&gt;</span></a>
    );
}