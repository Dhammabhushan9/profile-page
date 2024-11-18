import React from 'react';
import SideIcon from './SideIcon';
function SideBar() {
    return ( <>
        <div className='   hidden md:block  border-2 shadow-xl  p-6 w-96 '>
           <div className='flex justify-between mx-7'>
           <span className='bg-[#002a5a] h-[50px] rounded-2xl text-white px-2  '>
                <p className='mt-3 px-7'>webinar</p>
             </span>
             <img className='bg-white-500 h-[50px] border-2 rounded-xl' src="./p1.webp" alt="" />
           </div>

           <SideIcon content="Home" icon="./Home.png"/>
           <SideIcon content="Webinars" icon="./u2.png"/>
           <SideIcon content="Billing"  icon="./user.png"/>   
           <SideIcon content="Settings"  icon="./setting.png"/>
        </div>
        <div class=" md:hidden   fixed bottom-0 right-0 w-full bg-[#f5f6f7] border-2  p-4  flex justify-evenly">
            <img className='h-[30px] ' src="./Home.png" alt="" />
            <img className='h-[30px] ' src="./u2.png" alt="" />
            <img className='h-[35px] ' src="./user.png" alt="" />
            <img className='h-[30px] ' src="./setting.png" alt="" />
   
</div>

    </>);   
}

export default SideBar;