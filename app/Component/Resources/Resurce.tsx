import React from 'react';
import Container from '../Container/Container';
import Title from '../Title/Title';
import Link from 'next/link';

const Resurce = () => {
    const apiMenu = [
        {
            name:"/post",
            path:"http://localhost:8000/post"
        },
        {
            name:"/comments",
            path:"/comments"
        },
        {
            name:"/albums",
            path:"/albums"
        },
        {
            name:"/photos",
            path:"/photos"
        },
        {
            name:"/todos",
            path:"/todos"
        },
        {
            name:"/users",
            path:"/users"
        },
    ]

    const apiHeader = [
        {name:"100 posts"},
        {name:"500 comments"},
        {name:"100 albums"},
        {name:"5000 photos"},
        {name:"200 todos"},
        {name:"10 users"},
    ]
    return (
        <div>
            <Container>
                <Title heding="Resources" className=""></Title>
                <p className="py-2">JSONPlaceholder comes with a set of 6 common resources:</p>
                <div className="resource-body flex gap-10 my-4 ml-6">
                   <div className="lin-area flex flex-col gap-2 underline">
                      {
                        apiMenu.map(items => 
                            <Link key={items.path} href={items.path}>{items.name}</Link>
                            
                        )
                      }
                   </div>
                   <div className="name flex flex-col gap-2">
                       {
                        apiHeader.map(items=>
                            <p key={items.name}>{items.name}</p>
                        )
                       }
                   </div>
                </div>
                <div className="node-area">
                    <p><span className="font-bold">Note</span> :  see guide for usage examples.Use your own da</p>
                </div>
            </Container>
        </div>
    );
};

export default Resurce;