import React from 'react';

function Put({type,placeholder}) {
    return (<>
     <br/><br/>

        <input  className=' rounded   bg-skyblue-700 rounded-1xl px-20 py-5 outline-none text-blue-400' 
        type={type} placeholder={placeholder} />
   
    </>  );
}

export default Put;