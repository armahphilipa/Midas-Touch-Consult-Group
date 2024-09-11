import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

  return (
    <div className='sticky top-0 w-full bg-[#050C32] h-15 md:h-20 flex justify-around items-center text-white z-50' >
        <div><img src={Logo} alt="logo" className='w-25 h-12  md:w-[150px] md:h-[70px]' /></div>
        <ul className='hidden md:flex'>
            <li className='p-4'><a href='#Home'>Home</a></li>
            <li className='p-4'><a href='#About'>About</a></li>
            <li className='p-4'><a href='#Services'>Services</a></li>
            <li className='p-4'><a href='#Testimonials'>Testimonials</a></li>
        </ul>
        <div>
            <a href="#Contact"  className='hidden md:block py-2 px-3 border rounded-tl-xl rounded-br-xl'>Contact Us</a>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <IoClose size={20} /> : <HiOutlineMenuAlt3 size={20} />}
        </div>
        <div className={`fixed top-10 w-full flex flex-col justify-center items-center bg-[#0d254a] ease-in-out duration-500 ${nav ? 'left-0' : 'left-[-100%]'}`}>
            <ul className='uppercase p-4'>
                <li className='p-4' onClick={closeNav}><a href='#Home'>Home</a></li>
                <li className='p-4' onClick={closeNav}><a href='#About'>About</a></li>
                <li className='p-4' onClick={closeNav}><a href='#Services'>Services</a></li>
                <li className='p-4' onClick={closeNav}><a href='#Testimonials'>Testimonials</a></li>
            </ul>
            <div className='p-2 mb-8'>
            <a href="#Contact"  className='py-2 px-3 border rounded-tl-xl rounded-br-xl'>Contact Us</a>
        </div>
        </div>
    </div>
  )
}
