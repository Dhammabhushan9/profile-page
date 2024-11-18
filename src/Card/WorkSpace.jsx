import React from 'react';

function WorkSpace() {
    return ( <>
    <div className='  w-[400px] h-[400px] mt-[200px] rounded-3xl border-2 shadow-xl '  >
        <div className='flex justify-between items-center rounded-2xl p-10'>

          
                    <div className='w-28 h-28 bg-[#3edfcf] rounded-2xl'>
                        <img className='mt-6 mx-6 h-[60px]' src="./c1.png" alt="" /> 
                        <p className='mt-8 mx-5 font-semibold text-lg '>Schedule</p>   
                    </div>
                            
                   <div className='w-28 h-28 bg-[#3edfcf] rounded-2xl'>
                   <img className='mt-6 mx-6 h-[60px]' src="./plus.png" alt="" />
                   <p className='mt-8 mx-10 font-semibold text-lg '>Join</p>
                   </div>
           
        </div>
        <div className='flex justify-between items-center rounded-2xl p-10'>

          
                    <div className='w-28 h-28 bg-[#3edfcf] rounded-2xl'>
                        <img className='mt-6 mx-6 h-[60px]' src="./video.png" alt="" /> 
                        <p className='mt-8 mx-5 font-semibold text-lg '>Recording</p>   
                    </div>
                            
                  
           
        </div>
    </div>
    </> );
}

export default WorkSpace;