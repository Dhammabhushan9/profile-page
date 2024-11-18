import React from 'react';
import DashCard from './DashCard';

function DashBoard() {
    return ( <> 
     <div className=' w-[600px] ml-10  mt-40'>
      <p className='text-xl'>Monday, 9 Feb</p>
      <h1 className='font-semibold text-3xl mt-1 mb-5'>Good morning ,shraddha    👋 </h1>

            <div className='rounded-3xl border-2 w-[550px] p-5 h-[445px] mt-10 shadow-xl '>
                <div className='bg-[#f5f6f7] flex justify-between  w-[510px] h-14 rounded-xl'>
                    <div className='flex  '> 
                        <img className='w-[50px] mr-3 ' src="./c1.png" alt="" />
                         <p className='font-semibold text-xl mt-3'>MONDAY, 9 feb 2024</p>
                         <img className='mt-1' src="./down.png" alt="" />
                    </div>

                        <div className='flex mt-3 mr-2'>
                        <img className='h-[30px]' src="./right.png" alt="" />
                        <img className='h-[30px]' src="./left.png" alt="" />
                        </div>

                      
                </div>

                <DashCard status="Live" details="Stree 2"/>
                
                <DashCard status="Upcoming" details=" Ad Shoot"/>
                <DashCard status="Upcoming" details="Press conference"/>
                <DashCard status="Upcoming" details="Marketing"/>
                 
            </div>
     </div>
   
    </> );
}

export default DashBoard;