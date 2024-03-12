import Link from 'next/link';
import React from 'react';

const TopHeader = () => {
    return (
        <div className="bg-[#6D28D9] ">
            <div className="all-content text-center ">
                <h1 className="pt-4 pb-10 text-white text-[15px]">
                  👋 Using React? Check out MistCSS, our new Open Source project! <Link href="/" className=" underline">Learn more</Link> 🌬️
                </h1>
            </div>
        </div>
    );
};

export default TopHeader;