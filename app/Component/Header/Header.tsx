import React from 'react';
import Container from '../Container/Container';
import Logo from '../Logo-area/Logo';
import Link from 'next/link';

const Header = () => {
    const navber =[
        {name :"Guide",path :"guide"},
        {name :"Sponsor  this project",path:"sponsor"},      
        {name :"Blog",path:"blog"},   
        {name :"My JSON Server",path:"myjson"}, 
        {name :"My JSON Server",path:"myjson"}, 
        {name :"PODUCT",path:"/product"},       
    ]
    return (
        <div className="py-6 md:py-0 sticky top-0 z-40  bg-white drop-shadow-lg">
            <div className="all-content">
                <Container className="">
                    <div className="menu-content md:flex justify-between ">
                        <div className="logo-area font-bold">
                            <Logo className=""/>
                        </div>
                        <div className="menu-area flex gap-1 md:gap-4 ">
                            {
                                navber.map((items:any)=>
                                      <Link className="text-[13px] md:text-sm" key={items.name} href={items.path}>{items.name}</Link>
                                    )
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;