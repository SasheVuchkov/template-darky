import ProgressBar from './ProgressBar';
import React from 'react';
import ProgressCircle from './ProgressCircle';

export type Props = {
    progress: number,
    label: string,
    className?: string,
}

export default function SkillCircle({progress, label, className}: Props) {
    return (
        <div className={className}>
            <div className="flex justify-center items-center flex-col">
                 <ProgressCircle progress={progress} thickness={4} radius={35} />
                <span className="text-white" style={{fontSize: `${35/2}px`}}>{label}</span>
            </div>
        </div>
    );
}