import { useState } from 'react'
import './App.css'
import DashBoard from './Card/Dashboard/DashBoard'
import Hero from './Card/SideBar/Hero';
import Profile from './Card/Profile';
import WorkSpace from './Card/WorkSpace';

function App() {
  return (
    <div className="flex h-screen">
   
  
        <Hero  className="h-screen"/>
 
      
      {/* Main Content Section */}
      <div className="flex flex-col   md:flex-row  ">
        <Profile />
        <DashBoard />
        <WorkSpace />
      </div>
    </div>
  )
}

export default App
