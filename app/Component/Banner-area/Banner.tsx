import React from 'react';
import Container from '../Container/Container';

const Banner = () => {
    return (
        <div className="">
            <Container className="">
                <div className="banner pt-20 flex gap-4 flex-col">
                    <h1 className=" text-6xl pb-8 text-[#374151] ">{`{JSON} Placeholder`}</h1>
                    <p className="text-2xl text-[#374151]">Free fake and reliable API for testing and prototyping.</p>
                    <p className="text-2xl text-[#374151]">Powered by JSON Server + LowDB.</p>
                    <p className="mt-2 font-semibold ">Serving ~3 billion requests each month.</p>
                </div>
            </Container>
        </div>
    );
};

export default Banner;