import React from 'react'
import {FaFacebook, FaTwitter,FaInstagram} from 'react-icons/fa';
import Logo from './assets/logo.png'

export const Base = () => {
  return (
    <div className='w-full h-full bg-[#050A32] pb-5 md:pb-0'>
      <div className='p-4 md:p-10'>
          <div className=''>
            <div className='flex flex-col md:flex-row justify-between items-center m-4 pt-4 md:p-4 text-white border-b border-[#F4FAFF]'>
                <div> 
                <span className='font-medium md:font-semibold md:text-lg'>Midas Touch Consult Group</span>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <a href='#Home' className='p-3'>Home</a>
                  <a href='#About' className='p-3'>About</a>
                  <a href='#Services' className='p-3'>Services</a>
                  <a href='#Contact' className='p-3'>Contact Us</a>
                </div>
            </div>

            <div className='text-[#b3deff] flex flex-col justify-center align-middle items-center font-light text-sm text-center p-4'>
              <p>&copy; 2024 Midas Touch Consult Group</p>
              <p className='pb-4'>All rights reserved.</p>
              <img src={Logo} alt='Logo' className='w-[80px] h-[40px]' />
              <div className='flex flex-col'>
                <h3>Email</h3>
                <a href='mailto:midastouchcg@gmail.com' className='py-2'>midastouchcg@gmail.com</a>
                <h3>Phone</h3>
                <a href={'tel:053-446-3913'} className='py-2'>+233-53-446-3913</a>
            </div>
              <div className=' flex text-white pt-5'>
                <a href='#' className='pr-4'> <FaFacebook/> </a>
                <a href='#' className='pr-4'> <FaInstagram/> </a>
                <a href='#' className='pr-4'> <FaTwitter/> </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
