import React from 'react';
import Container from '../Container/Container';
import Title from '../Title/Title';
import placeholder from "../../../public/mockend.svg"
import Image from 'next/image';
import Link from 'next/link';

const Sponser = () => {
    return (
        <div>
            <Container className="mt-[300px]">
                <Title heding="Sponsors" className=""/>
                <p className="py-4">JSONPlaceholder is supported by the following companies and Sponsors on GitHub, check them out 💖</p>
                 <div className="image-area py-6">
                   <Image src={placeholder} width={300} height={300} alt="image"/>
                   <div className="yourcompany py-6">
                     <Link href="" className=" underline">Your company logo here</Link>
                   </div>
                 </div>
            </Container>
        </div>
    );
};

export default Sponser;