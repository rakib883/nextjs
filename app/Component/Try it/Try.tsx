'use client'
import React, { useState } from 'react';
import Container from '../Container/Container';
import Title from '../Title/Title';

const Try = () => {
    const [showdata , setShowData] = useState(false)
    const showData = () =>{
        setShowData(!showdata)
    }

    console.log(showdata)
    return (
        <div>
            <Container className=" ">
                 <Title className=" first-letter:uppercase" heding="try it"></Title>
                 <p className="py-4">Run this code here, in a console or from any site:</p>
                <div className="main-code-area leading-1 bg-[#263E52] rounded-lg">
                    <div className="all-content px-8 py-6 leading-2 text-[#FCFCD6]">
                        <p> <span className="text-[#66D8EF]">fetch</span> <span>{`('https://jsonplaceholder.typicode.com/todos/1')`}</span></p>
                        <div className="bottom-try ml-10">
                          <p><span className="text-[#66D8EF]">.then</span> <span>{`(response => response.json())`}</span>  </p>
                        </div>
                        <div className="bottom-try ml-10">
                          <p><span className="text-[#66D8EF]">.then</span> <span>{`(data =>console.log(data))`}</span>  </p>
                        </div>
                    </div>
                 </div>
                 <button onClick={showData} className="bg-black text-white my-4 px-4 py-2 rounded-lg hover:bg-black/80 duration-300">Run Scprit</button>
                  <div className="data-area bg-[#263E52] rounded-lg">
                     <div className="all-content px-6 py-4">
                        {
                        showdata ? 
                        <div className="show-main-area text-white">
                            <p>{`{`}</p>
                                 <div className="all-inner-content ml-4">
                                    <p> <span className="text-[#F05E5D]">{` "userId" `}</span> : <span className="text-[#9DC0FA]">1,</span></p>
                                    <p> <span className="text-[#F05E5D]">{` "Id" `}</span> : <span className="text-[#9DC0FA]">{`"delectus aut autem",`}</span></p>
                                    <p> <span className="text-[#F05E5D]">{` "title" `}</span> : <span className="text-[#9DC0FA]">1,</span></p>
                                    <p> <span className="text-[#F05E5D]">{` "completed" `}</span> : <span className="text-[#9DC0FA]">False,</span></p>
                                 </div>
                            <p>{`}`}</p>
                        </div>
                        : <div className="show-data text-white">{`{ }`}</div>
                        }
                     </div>
                  </div>
                  {
                    showdata ? 
                    <div className="botto-area py-4">
                      <p>Congrats! You &apos; ve made your first call to JSONPlaceholder. 😃 🎉</p>
                   </div> : " "
                    
                  }
            </Container>
        </div>
    );
};

export default Try;