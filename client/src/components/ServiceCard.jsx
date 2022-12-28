import React from 'react'

const ServiceCard = ({color,title,subtitle,icon}) => {
  return (
    <div className='flex flex-col md:flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h1 className='text-white text-3xl bg-transparent mt-2'>{title}</h1>
            <p className='text-white bg-transparentmt-2 text-lg sm:w-9/12 mb-1'>{subtitle}</p>
        </div>
    </div>
  )
}

export default ServiceCard