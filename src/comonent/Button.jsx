import React, { useState } from 'react';


function Button({name}) {
    const [isClick,setIsClick]=useState(false)

    function click(){
        setIsClick(!isClick)
    }
    return ( <>
    <span className={ `rounded-2xl  px-32 py-8  text-white  pointer ${isClick ? "bg-[#7dd3fc] text-white" :"bg-green-400 text-black   "}`} onClick={click}>{name}</span>
    </> );
}

export default Button;