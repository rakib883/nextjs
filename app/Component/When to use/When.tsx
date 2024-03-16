import React from 'react';
import Title from '../Title/Title';
import Container from '../Container/Container';

const When = () => {
    return (
        <div className="py-6">
            <Container className="">
                <div className="all-content flex flex-col gap-6">
                    <Title className="" heding="Use your own data"></Title>
                    <p>
                        JSONPlaceholder is a free online REST API that you can 
                        use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, 
                        ...or simply to test things locally.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default When;