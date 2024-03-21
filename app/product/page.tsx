import { FaCartArrowDown } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";


import Image from 'next/image';
import React, { useState } from 'react';

import images from "@/public/faby.png"
import Link from "next/link";
const postgetData = async()=>{
    const res = await fetch("http://localhost:3000/api/product");
    if(!res.ok){
        throw new Error ("no data fount")
    }
    return  res.json()
}
const Page = async () => {
     const postData = await  postgetData()
     console.log(postData)

    //  const [productText,setProductText] = useState(false)
    
    return (
        <div className="all-items py-4">
             <p className="text-lg py-2 ">See our product</p>
            <div className="mx-4 grid grid-cols-2 md:grid-cols-5 gap-6 cursor-pointer ">
            
              {
                postData?.data?.map((item:productType)=>(
                  <div key={item?.id} className="main relative border group">
                      <div className="main-area">
                        <div className="image-area relative overflow-hidden ">
                          <Image  src={images} alt="image" />
                           <div className="icon-area flex group-hover:translate-x-0 duration-500 flex-col gap-2 absolute top-0 p-4 right-0 translate-x-14 ">
                             <Link href=" " >
                                  <div className="icon border-1 flex justify-center items-center bg-slate-500 border-[gray] rounded-full">
                                      <FaCartArrowDown className=" text-white p-2 h-full w-full rounded-full"/>
                                  </div>
                              </Link>
                              <Link href=" " >
                                  <div className="icon border-1 bg-slate-500 border-[gray] rounded-full">
                                      <IoGitCompare className="text-white p-2 h-full w-full rounded-full"/>
                                  </div>
                              </Link>
                              <Link href=" " >
                                  <div className="icon border-1 bg-slate-500 border-[gray] rounded-full">
                                      <FaHeart className="text-white p-2 h-full w-full rounded-full"/>
                                  </div>
                              </Link>
                              <Link href=" " >
                                  <div className="icon border-1 bg-slate-500 border-[gray] rounded-full">
                                      <MdVisibility className="text-white p-2 h-full w-full rounded-full"/>
                                  </div>
                              </Link>
                           </div>
                        </div>
                        <p className="py-4 font-semibold">{item?.title}</p>
                         <div className="title-area">
                             <p>{`${item?.description.length > 100 ? item?.description.slice(0,50) : "no datas"}`}</p>
                         </div>
                      </div>
                      <div className="prize-area flex bottom-0 justify-between">
                        <div className="prize ">
                           <div className="all-items gap-1 flex items-center bg-slate-500 rounded-sm px-2 py-1">
                              <div className="text-white">Order Now</div>
                              <div className="icon">
                                <FaCartArrowDown className="text-white "/>
                              </div>
                           </div>
                        </div>
                        <div className="prize font-semibold">
                            {item.price} $
                        </div>
                      </div>
                  </div>
                )
                  
                )
              }
          </div>
        </div>
    );
};

export default Page;