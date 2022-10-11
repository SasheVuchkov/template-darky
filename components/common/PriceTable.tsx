import React from 'react';
import {PriceTable as PriceTableType} from '../../lib/types';

export type Props = PriceTableType;

export default function PriceTable({title, price, href, items}: Props) {
    return (
        <div className="bg-primary-400 p-4 w-full sm:w-[49.5%] md:w-[32.5%] mb-3 text-center text-white text-opacity-70 shadow-lg">
            <div className="text-white font-bold">{title}</div>
            <div className="my-7">{price.currency}<span className="mx-1 text-secondary-100 text-xl font-bold">{price.value}</span> {price.unit}</div>

            <ul className="block mt-5">
                {items.map((item, index) =>
                    <li key={`${item.text}`} className="flex justify-center mb-3 last:mb-0">
                        {item.icon}
                        {item.text}
                    </li>
                )}
            </ul>

            <div className="my-5 mt-10">
                <a href={href} className="text-secondary-100 uppercase text-sm group hover:text-secondary-50">Order Now <span className="transition-all relative left-1 group-hover:left-3">&gt;</span></a>
            </div>
        </div>
    );
}