import React from 'react';
import {Testimonial as TestimonialType} from '../../lib/types';
import Image from 'next/image';
import {Star} from '../icons';

export const getStars = (stars: number) => {
    if (stars > 5) {
        return 5;
    }

    if (stars < 1) {
        return 1;
    }

    return stars;
}

export const getEmptyStars = (stars: number) => {
    return 5 - getStars(stars);
}

export const getStarArr = (stars: number) => {
    if (stars < 1) {
        return [];
    }

    return ' '.repeat(stars - 1).split(' ').map((s:string, index: number) => `star-${index}`);
}

export default function Testimonial({name, occupation, text, photo, stars}: TestimonialType) {
    return (
        <div className="bg-primary-400 p-4 mb-3 mr-3 relative z-10 shadow-lg">
            <div className="flex justify-between">
                <div>
                    <div className="text-white font-bold">{name}</div>
                    <small className="text-white text-opacity-70">{occupation}</small>
                </div>
                <div className="absolute right-0 top-[-23px] right-5 z-10">
                    <Image src={photo} width={80} height={80} className="rounded-[50%]" />
                </div>
            </div>
            <div className="my-3 text-white text-opacity-70">{text}</div>
            <div className="flex justify-between w-[30%] bg-primary-600 bg-opacity-60 px-4 py-1 rounded-xl">
                {getStarArr(getStars(stars)).map((star: string) => <Star key={star} className="testimonial-star" />)}
                {getStarArr(getEmptyStars(stars)).map((star: string) => <Star key={star} className="testimonial-empty-star" />)}
            </div>
        </div>
    );
}