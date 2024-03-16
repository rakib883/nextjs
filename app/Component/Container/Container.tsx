import { clsx } from 'clsx';
import React from 'react';

const Container = ({children,className}:any) => {
    return (
        <div className={clsx(`${className} md:max-w-4xl md:mx-auto md:px-6 py-6`)}>
            {children}
        </div>
    );
};

export default Container;