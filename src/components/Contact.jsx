import React from 'react';
import Call from '../assets/contact.svg';

export const Contact = () => {
  return (
    <div className='w-full h-full md:h-screen' id='Contact' >
        <div className='flex flex-col justify-center align-middle mt-10'>
            <div>
                <h1 className='text-3xl md:text-5xl font-bold text-center pt-10'>Co<span className='border-b-4 border-b-[#0496ff]'>ntact </span>Us</h1>
            </div>
             <div className='flex flex-col md:flex-row justify-self-center w-full  md:h-[540px] mt-5 md:mt-10 p-4 md:shadow-md'>
                
                <div className='pt-5 pb-10'> 
                    <img src={Call} alt='illustration' className='pl-5 pr-5 md:w-full md:h-full' />
                </div>
                <div className='flex flex-col md:flex-row justify-center bg-[#b3beff] md:w-[50%] h-[full]'>
                    <div>
                        <h2 className='font-medium text-[24px] text-left  py-5 pl-12'>Send us a message</h2>

                        <div className='p-10 items-center'>
                            <form 
                            action='https://getform.io/f/brolnzya'
                            method='POST'
                            >
                                <div className='flex flex-col md:flex-row  justify-between md:justify-around'>
                                    <input type='text' name='name' placeholder='Full Name' className='border focus:outline-none focus:ring-1 focus:ring-[#1571ff] focus:border-transparent  w-full md:w-[200px] rounded-md h-[40px] placeholder p-4 mr-2' />
                                    <input type='email' name='email' placeholder='Email Address' className='mt-2 md:mt-0 border  focus:outline-none focus:ring-1 focus:ring-[#1571ff] focus:border-transparent w-full md:w-[200px] h-[40px] rounded-md p-4' />
                                </div>
                                <div className='flex flex-col md:flex-row justify-around pb-4 pt-4'>
                                    <input type='number' name='phone' placeholder='Mobile Number' className='border focus:outline-none focus:ring-1 focus:ring-[#1571ff] focus:border-transparent  w-full md:w-[200px] rounded-md h-[40px] p-4 mr-2' />
                                    <input type='text' name='Subject' placeholder='Email Subject' className='mt-2 md:mt-0 border focus:outline-none focus:ring-1 focus:ring-[#1571ff] focus:border-transparent   rounded-md w-full md:w-[200px] h-[40px] p-4' />
                                </div>
                                <textarea name='message' cols={25} rows={8} placeholder='Your Message' className='border focus:outline-none focus:ring-1 focus:ring-[#1571ff] focus:border-transparent  w-full p-4  rounded-xl' />
                                <div className='flex justify-center mt-2'>
                                <button type='submit' className='text-white mr-4 py-[5px] px-4 bg-[#0496ff] rounded-3xl hover:border-2 border-[#02569A] hover:bg-transparent' >Send</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
             </div>
        </div>
    </div>
  )
}
