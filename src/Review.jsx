import React from 'react';
import Avatar  from '../src/assets/Avatar (5).png';
import Profile from '../src/assets/Avatar (6).png'
import Nigeria from '../src/assets/NG.svg';
import Usa from '../src/assets/US (1).svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';
import { Autoplay, Pagination, Navigation} from 'swiper/modules';

export const Review = () => {
  return (
    <div id='Testimonials'>
        <div className='w-full h-full md:h-screen bg-[#F4FAFF] py-4'>
            <div className='flex flex-col justify-center align-middle max-w-[700px] mt-[60px] mx-auto py-4'>
                <h1 className='text-3xl md:text-5xl font-bold text-center pt-5'>Te<span className='border-b-4 border-b-[#0496ff]'>timonia</span>ls</h1>
                <h1 className='text-lg md:text-2xl font-medium pt-4 pb-5 md:pb-0 md:pt-8 text-center'>What people say about us</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full pt-5"
            >
      <div className=''>
        <SwiperSlide className='align-middle max-w-[700px]  mx-auto p-4 '>
            <div> 
             
                <div className='flex p-4 '> 
                    <img src={Profile} alt='Profile' className='pr-2' /> 
                    <h3 className='font-medium pt-1'>Tommy Shelby</h3>
                    <img src={Nigeria} alt='Country' className='pl-2' /> 
                </div>

                <p className='font-light md:font-normal align-middle px-5'> Absolutely thrilled with the service I received! From the moment I reached out, the team was professional, attentive, and genuinely invested in my needs. They went above and beyond to ensure everything was perfect, delivering exceptional results that exceeded my expectations. Communication was clear and timely, and their expertise was evident in every aspect of their work. I could not be happier with the outcome and highly recommend them to anyone seeking top-notch service. Their dedication and skill truly set them apart, making this experience both pleasant and rewarding. Thank you for such an outstanding job!
                </p>
            </div>
        </SwiperSlide>
                <div>
        <SwiperSlide className='align-middle max-w-[700px]  mx-auto p-5'>
        <div>
            <div className='flex  p-4'> 
                <img src={Avatar} alt='Profile' className='pr-2' /> 
                <h3 className='font-medium pt-1' >Elsbeth Greene</h3>
                <img src={Usa} alt='Country' className='pl-2' /> 
            </div>

            <p className='font-light md:font-normal align-middle px-5'> I’m thoroughly impressed with the service provided! From start to finish, the team demonstrated exceptional professionalism and dedication. They listened attentively to my needs, communicated clearly, and worked diligently to ensure every detail was perfect. The final result exceeded my expectations in every way. Their expertise and commitment to quality were evident throughout the process, and their ability to address any concerns swiftly was greatly appreciated. I highly recommend their services to anyone seeking top-tier results and a smooth, satisfying experience. Thank you for making this such a positive and impressive experience!
            </p>
        </div>
        </SwiperSlide>
        </div>
      
    </div>
      </Swiper>
                
                    
                </div>
        </div>
    </div>
  )
}
