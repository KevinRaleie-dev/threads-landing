import React from 'react';
import Image from 'next/image';

export function ThreadsImage({display}) {


    const property = "sm:place-items-center sm:pb-0 pb-5"

    return (
         <div className={`${display} ${property}`}>
            <Image
                src="/threads-ui.png"
                alt="Threads app design"
                width={695}
                height={700}
            />
        </div>   
    );
}
