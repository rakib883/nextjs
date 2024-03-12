import React from 'react';

const Title = ({heding,className}:{heding:string,className:string}) => {
    return (
        <div>
            <h1 className={`${className} text-4xl `}>{heding}</h1>
        </div>
    );
};

export default Title;