import React from 'react';
import Container from '../Container/Container';
import Title from '../Title/Title';
import Link from 'next/link';

const Route = () => {
    const method = [
        {name:"GET"},
        {name:"GET"},
        {name:"GET"},
        {name:"GET"},
        {name:"POST"},
        {name:"PUT"},
        {name:"PATCH"},
        {name:"DELETE"},
    ]
const routePath =[
    {
        name:"/posts",
        path:"/posts"
    },
    {
        name:"/posts/1",
        path:"/posts/1"
    },
    {
        name:"/posts/1/comments",
        path:"/posts/1/comments"
    },
    {
        name:"/comments?postId=1",
        path:"/comments?postId=1"
    },
    {
        name:"/posts",
        path:"/posts"
    },
    {
        name:"/posts/1",
        path:"	/posts/1"
    },
    {
        name:"/posts/1",
        path:"/posts"
    },
    {
        name:"/posts/1",
        path:"/posts/1"
    }

]    
    return (
        <div>
            <Container className="py-14">
                <Title className="" heding="Route"></Title>
                <p className="py-4">All HTTP methods are supported. You can use http or https for your requests.</p>
                 <div className="all-routes ml-6 flex gap-6">
                    <div className="method flex flex-col gap-2">
                        {
                            method.map((items:any) =>
                               <p key={items.name}>{items.name}</p>  
                            )
                        }
                    </div>
                    <div className="routes flex flex-col gap-2">
                        {
                          routePath.map((items:any) =>
                             <Link href={items.path} key={items.path}>{items.name}</Link>
                            )  
                        }
                    </div>
                 </div>
                 <div className="note py-4">
                    <p><span className="font-bold">Note</span> : see guide for usage examples.</p>
                 </div>
            </Container>
        </div>
    );
};

export default Route;