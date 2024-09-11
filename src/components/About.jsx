import React,{useState} from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export const About = () => {
    const [counterOn,setCounterOn] =useState(false);

  return (
    <ScrollTrigger onEnter ={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <div className='w-full h-full pb-20 md:pb-0 md:h-screen' id='About'>
            <div className='flex flex-col justify-center align-middle max-w-[700px] mt-[60px] mx-auto'>
                <span className='text-3xl md:text-5xl font-bold text-center pt-5 '>A<span className='border-b-4 border-b-[#0496ff]'>bout U</span>s</span>
                <div className='flex flex-col justify-center px-4 font-light md:font-normal'>
                    <h1 className='text-xl md:text-3xl font-medium pt-10 md:pt-20'>Welcome to Midas Touch Consult Group</h1>
                    <p className='text-sm  py-5 md:text-[22]'>At Midas Touch Consult Group, we are dedicated to unlocking your potential through our wide range of services. From  Research, content creation and writing, web/app development, graphic design, UI/UX design, and data analysis to drive your success, we’re here to help you succeed in the digital world. Our mission is to provide unparalleled service and support to help you achieve your goals.</p>
                </div>
                <div className='flex justify-center pt-10'>
                <div className='flex flex-col justify-between pr-10'>
                <div className='font-medium text-[#02569A] text-2xl'>
                {counterOn && <CountUp  start={0} end={100} duration={2.75} loop />} +</div>
                
                    <p className='text font-light'>Projects </p>
                </div>
                <div className='flex flex-col justify-between pl-10'>
                <div className='font-medium text-[#02569A] text-2xl'>
                {counterOn && <CountUp className='font-medium text-[#02569A] text-2xl' start={0} end={50} duration={2.75} loop />} +
                </div>
                
                    <p className='text font-light'>Clients </p>
                </div>
                </div>
            </div>
    </div>
    </ScrollTrigger>
    
  )
}

