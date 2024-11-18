import React from 'react';

function Profile() {
    return ( <>
     <div className='       w-72 h-96 ml-20 mt-40 rounded-3xl border-2 grid   justify-items-center   bg-white-200  shadow-2xl '>
            <img className='w-32  bg-white-200 mt-6 rounded-2xl border-1'   src="./p1.webp" alt="" />

            <div className='grid   justify-items-center m-5'>
       <h1 className='font-semibold text-xl'>shraddha kapoor</h1> 
        <p>shraddhakapoor@gmail.com</p>
        <p className='font-medium'>(+91) 9876895362</p>
        <p className='pt-2 '> Panvel,india</p>
     </div>
     </div>

     
    </> );
}

export default Profile;