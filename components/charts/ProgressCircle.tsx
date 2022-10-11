import React from 'react';

export type Props = {
    thickness?: number,
    progress?: number,
    radius?: number,
};

export default function ProgressCircle({thickness = 4, progress = 50, radius = 50}: Props) {
    const circumference = 3.14*2*radius;
    const point = radius*0.9;
    return (
        <div className="flex items-center justify-center">
            <svg className="transform -rotate-90" style={{width: radius*2, height: radius*2}}>
                <circle cx={radius} cy={radius} r={radius*0.96} stroke="currentColor" strokeWidth={thickness} fill="transparent"
                        className="text-primary-500"/>

                <circle cx={radius} cy={radius} r={radius*0.95} stroke="currentColor" strokeWidth={thickness} fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={circumference*(1 - progress/100)}
                className="text-secondary-100" />
            </svg>
            <span className="absolute" style={{fontSize: `${radius/2}px`}}>{progress}%</span>
        </div>
    );
}