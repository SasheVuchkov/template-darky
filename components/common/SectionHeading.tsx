import React, {PropsWithChildren, ReactElement} from 'react';

export type Props = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string,
}

export default function SectionHeading({children, as = 'h2', className}: PropsWithChildren<Props>) {
    const El = as;
    return (
        <El className={`text-xl text-white font-semibold ${className ?? 'mt-10 mb-3'}`}>{children}</El>
    );
}