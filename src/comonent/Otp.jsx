import React, { useRef } from 'react';

function Otp() {

    const ref1=useRef()
    const ref2=useRef()
    const ref3=useRef()
    const ref4=useRef()
    const ref5=useRef()
    const ref6=useRef()

    return ( <>
     <div className='flex'>
        <Box referance={ref1} onDone={()=>{
                ref2.current.focus()
        }}/>
        <Box referance={ref2} onDone={()=>{
                ref3.current.focus()
        }}/>
        <Box referance={ref3} onDone={()=>{
                ref4.current.focus()
        }}/>
        <Box referance={ref4} onDone={()=>{
                ref5.current.focus()
        }}/>
        <Box referance={ref5} onDone={()=>{
                ref6.current.focus()
        }}/>
        <Box referance={ref6} onDone={()=>{
                ref6.current.focus()
        }}/>

     </div>
    </> );
}


function Box({
    referance,
    onDone
}){
    return( 
   <>
    <input ref={referance} onChange={(e)=>{
        if(e.target.value.length==1){
            onDone()
        }
            
    }} className='bg-[#1e3a8a] w-10 h-14 rounded-2xl m-2 outline-none px-3.5 text-white'  maxlength="1" size="1" type="text" /> 
   </>)
}

export default Otp;