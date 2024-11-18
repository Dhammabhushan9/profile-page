import React from 'react';

function SideIcon({content,icon}) {
    return ( <>
            <div className='  mt-3 p-3 flex  justify-between rounded-2xl hover:border-2 hover:bg-[#e4e9ee]   '>
                <h5 className='font-semibold text-lg  '>{content}</h5>
                <img className='h-[30px]  ' src={icon} alt="" />
            </div>
    </> );
}

export default SideIcon;