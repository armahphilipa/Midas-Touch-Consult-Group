import React from 'react'
import Research from '../assets/Research.png';
import Data from '../assets/data.png';
import Graphic from '../assets/graphic.png';
import Software from '../assets/sw.png';
import Ui from '../assets/ui.png';
import Content from '../assets/cw.png';


export const Services = () => {
  return (
    <div  className='w-full h-full md:h-[1600px] bg-[#F4FAFF] py-10' id='Services'>
        <div className='flex flex-col justify-center mt-10'>
            <h1 className='text-3xl md:text-5xl font-bold text-center md:mt-10 pt-5 pb-10 '>Ou<span className='border-b-4 border-b-[#0496ff]'>r Servic</span>es</h1>
            <div className='mt-5 md:mt-10 pt-4 flex justify-center flex-wrap gap-4 md:gap-10'>
                    <div className='flex flex-col justify-center items-center w-[300px] h-[340px] md:w-[518px] md:h-[404px] bg-white px-8 md:px-12 border-2 border-[#c1d3fe] rounded-2xl shadow-sm '>
                        <img src={Research} alt='icon'className='w-[65px] h-[60px] md:w-[90px] md:h-[84px]' />
                        <h1 className='font-bold text-xl mt-4 py-4'>Research</h1>
                        <p className='pt-4 text-[12px] md:text-[14px] font-light md:font-normal'>Our dedicated research team conducts thorough market studies to provide actionable insights, empowering informed decision-making. Whether exploring new opportunities, assessing competition, or predicting trends, we keep you ahead.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center w-[300px] h-[340px] md:w-[518px] md:h-[404px] bg-white px-8 md:px-12 border-2 border-[#c1d3fe] rounded-2xl shadow-sm'>
                        <img src={Content} alt='icon'className='w-[65px] h-[60px] md:w-[90px] md:h-[84px]' />
                        <h1 className='font-bold text-xl mt-4 py-4'>Content Writing</h1>
                        <p className='pt-4 text-[12px] md:text-[14px] font-light md:font-normal'>Our team of content creators can develop exceptional copy and visuals that will engage your audience and drive conversions with compelling content tailored to resonate across various mediums, from blog posts to multimedia presentations.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center w-[300px] h-[340px] md:w-[518px] md:h-[404px] bg-white px-8 md:px-12 border-2 border-[#c1d3fe] rounded-2xl shadow-sm'>
                        <img src={Graphic} alt='icon'className='w-[65px] h-[60px] md:w-[90px] md:h-[84px]' />
                        <h1 className='font-bold text-xl mt-4 py-4'>Gaphic Design</h1>
                        <p className='pt-4 text-[12px] md:text-[14px] font-light md:font-normal'>Our talented graphic designers can create stunning visuals and branding to help your business stand out in a crowded digital landscape.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center w-[300px] h-[340px] md:w-[518px] md:h-[404px] bg-white px-8 md:px-12 border-2 border-[#c1d3fe] rounded-2xl shadow-sm'>
                        <img src={Ui} alt='icon'className='w-[65px] h-[60px] md:w-[90px] md:h-[84px]' />
                        <h1 className='font-bold text-xl mt-4 py-4'>UI/UX</h1>
                        <p className='pt-4 text-[12px] md:text-[14px] font-light md:font-normal'>Craft intuitive interfaces that engage your audience and ensure seamless experiences across web, mobile, and software platforms.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center w-[300px] h-[340px] md:w-[518px] md:h-[404px] bg-white px-8 md:px-12 border-2 border-[#c1d3fe] rounded-2xl shadow-sm'>
                        <img src={Data} alt='icon'className='w-[65px] h-[60px] md:w-[90px] md:h-[84px]' />
                        <h1 className='font-bold text-xl mt-4 py-4'>Data Analytics</h1>
                        <p className='pt-4 text-[12px] md:text-[14px] font-light md:font-normal'>Unlock valuable insights from complex datasets to inform strategic decisions, optimize processes, and drive business success.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center w-[300px] h-[340px] md:w-[518px] md:h-[404px] bg-white px-8 md:px-12 border-2 border-[#c1d3fe] rounded-2xl shadow-sm'>
                        <img src={Software} alt='icon'className='w-[65px] h-[60px] md:w-[90px] md:h-[84px]' />
                        <h1 className='font-bold text-xl mt-4 py-4'>Software Development</h1>
                        <p className='pt-4 text-[12px] md:text-[14px]font-light md:font-normal'>Our experienced team of developers can create custom web and mobile apps to meet your unique needs, ensuring your digital presence is as strong as possible..</p>
                    </div>

                    
                </div>    
            </div>
            
    </div>
  )
}
