import React from 'react';
import {Snippet as SnippetType} from '../../lib/types';
import AltLink from '../navs/AltLink';

export default function Snippet({title, text, href}: SnippetType) {
    return (
        <div className="bg-primary-400 p-4 w-full md:w-[49.5%] lg:w-[32.5%] mb-3 shadow-lg">
            <div className="text-white font-bold">{title}</div>
            <div className="my-3 text-white text-opacity-70">{text}</div>
            <AltLink href={href}>Order Now</AltLink>
        </div>
    );
}