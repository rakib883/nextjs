import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const Logo = ({className}:{
       className:string;
}) => {
    return (
        <div>
            <Link className={clsx(`${className} font-bold`)} href="/">JSONPlaceholder</Link>
        </div>
    );
};

export default Logo;