import React, { Component } from 'react';
import Button from './Button';
import Put from './Put';
import Otp from './Otp'

function Home() {
    return ( <> 
  <div className='h-screen bg-blue-700 flex item-center   justify-center '>
   <div className='  flex flex-col  space space-y-4'> 
    <Put type="text" placeholder="input"/>    
   <Button name="Continue"/>


   <br/><br/>
   <Otp/>
   <Button name="Continue"/>
   </div>
  </div>
 
    </> );
}

export default Home;