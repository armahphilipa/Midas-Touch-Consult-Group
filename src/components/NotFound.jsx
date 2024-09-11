import React from 'react';
import Back from '../assets/Icon.svg'
import Under from '../assets/undraw_not_found_re_bh2e.svg'

export const NotFound = () => {
  return (
    <div className='w-full h-screen flexjustify-center items-center align-middle' id='NotFound' >
      <div className='pt-10 flex  flex-col px-4 justify-center items-center'>
        <div className='p-4 md:max-w-[440px]'>
        <p className='text-sm font-semibold text-[#0496ff] py-5'>404 error</p>
        <p className='text-5xl font-semibold py-3'>Page not found </p>
        <p className='font-light py-4'>Sorry, the page you are looking for does n0t exist. Here are some helpful links:</p>

        <div className='flex  flex-col md:flex-row py-5'>
          <a href='#Home' >
            <button className='flex justify-center text-[#00124d] font-medium mr-4 mt-4 py-[5px] px-4 bg-white rounded-lg hover:border-2 border-[#0496ff] border-2'> <img src={Back} className='py-1 pr-4'/>Go back
            </button>
          </a>
          <a href='#Home' >
          <button className='text-white font-medium mr-4 mt-4  py-[5px] px-4 bg-[#0496ff] rounded-lg hover:border-2 border-white'>Take me home</button>
          </a>
        </div>
      </div>

      <div className=''>
        <img src={Under} alt='Page not found image' className='md:w-[592px] md:h-[640px]' />
      </div>
      </div>
    </div>
  );
}
