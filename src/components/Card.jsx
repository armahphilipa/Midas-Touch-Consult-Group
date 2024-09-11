import React from 'react'

export const Card = (props) => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center w-[360px] h-full md:w-[518px]  bg-white px-8 md:px-12 border-1 border-[#00124d] rounded-2xl shadow-sm'>
            <div className='flex'> 
                <img src={'{props.avatar}'} alt='Profile' />
                <h3>{props.name}</h3>

                <img src={'{props.location}'} alt='Country' />
            </div>

            <p> {props.message}
            </p>
        </div>
    </div>
  )
}
