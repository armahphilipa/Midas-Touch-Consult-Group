import React from 'react'
import Earth from '../assets/hero 1.png';
import { ReactTyped } from "react-typed";

export const Hero = () => {



  return (
  <div className=' text-white relative w-full h-screen' id='Home'>
    <img src={Earth} alt="hero-img" className='top- 0 left-0 w-full h-screen object-cover' />
    <div className='bg-[#050C32]/50 absolute top-0 left-0 w-full h-screen' />
    <div className='absolute top-0 w-full h-full flex flex-col justify-center'>
    <div className='md:left-[10%]  max-w-[1100px] absolute p-4'>
        <div className=" max-w-[800px] ">
          <h1 className='font-bold text-2xl lg:text-5xl  max-w-[800px] drop-shadow-2xl'>Unlocking Potentials, Delivering <ReactTyped  className='text-[#3c7ec3]' strings={["Results"]} typeSpeed={120} backSpeed={140} loop /></h1>
          
        </div>

        <p className='pt-5 max-w-[600px] text-sm md:text-[20] font-thin md:font-normal'>
        At Midas Touch Consult Group, we believe in the power of collaboration and creativity. Our expert team provides tailored solutions in Research, content creation and writing, web/app development, graphic design, UI/UX design, and data analysis to drive your success.
        </p>

        <div className='flex pt-10'>
            <a href='#Contact'><button
             className='text-white mr-4 py-[5px] px-4 bg-[#02569A] rounded-3xl hover:border-2 border-[#02569A]'>Contact Us</button></a>
            <a href='#NotFound'><button className='text-white ml-4 py-[5px] px-4  border-2 border-[#02569A] rounded-3xl '>Learn More</button></a>
        </div>
    </div>
    </div>
</div>
  )
}
