import React from 'react';

export type Props = {
    thickness?: number,
    progress?: number,
};

export default function ProgressBar({thickness = 2, progress = 50}: Props) {
    return(
        <div className={`bg-primary-500 w-full rounded`}>
            <span className={`block bg-secondary-100`} style={{height: thickness, width: `${progress}%`}}/>
        </div>
    );
}