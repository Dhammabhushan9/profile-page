import React from 'react';

function DashCard({status,details}) {
    return ( <>
    <div className='flex mt-4'>
        <div className='border-e-4 border-neutral-500 p-2'>
           <p className='font-normal font-semibold text-orange-600'> 11.30 AM</p>
           <p  className='font-light font-semibold text-gray-500 '> 11.30 AM</p>
        </div>

        <div className='ml-2  mt-1'>
           <div className='flex  '>
           <p className='text-base font-semibold text-gray-600 mr-2'>{status}</p> 
           <img className='h-[25px]' src="./call.png" alt="" />
           </div>
            <p  className='text-base font-bold text-xl text-gray-600  '>{details}</p>
        </div>
        
    </div>
    <hr className='mt-2' />
    </> );
}

export default DashCard;