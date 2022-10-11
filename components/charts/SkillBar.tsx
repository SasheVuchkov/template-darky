import ProgressBar from './ProgressBar';
import React from 'react';

export type Props = {
    progress: number,
    label: string,
    className?: string,
}

export default function SkillBar({progress, label, className}: Props) {
    return (
        <div className={className}>
            <div className="flex justify-between mb-3">
                <span className="text-white">{label}</span>
                <span className="text-white text-opacity-70">{progress}%</span>
            </div>
            <ProgressBar thickness={3} progress={progress} />
        </div>
    );
}