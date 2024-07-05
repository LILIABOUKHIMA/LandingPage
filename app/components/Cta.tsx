import React from 'react'
import Image from 'next/image'

const Cta = () => {
  return (
    <div className='px-[20px] lg:px-20 mx-auto'>
    <div className='w-full  rounded-[16px] bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 py-[52px] px-[32px] lg:my-[32px] lg:px-[324px] lg:py-[89px]'>
<h1 className='font-medium text-center text-white text-[32px] lg:text-[56px] leading-[64px]'>  Monitor your website like a pro </h1>
<p className='pt-6 lg:pt-[48px]  text-center text-white text-[16px] lg:text-[18px]'>Join over 800+ happy site owners boosting productivity and efficiency! </p>

<div className='mt-9 flex flex-col lg:flex-row lg:mt-[56px] lg:justify-center   w-full items-center lg:gap-x-[42px] font-medium'>
  <button className='bg-white py-[16px] w-fit text-[#EB2891] px-8 rounded-[4px]'>Try for free</button>
  
  <button className='flex   w-full items-center justify-center  gap-x-3 mt-[32px] text-white font-medium lg:mt-0 lg:w-fit hover:bg-transparent hover:text-red-200'>Contact Sales <span>  
    <Image src='/assets/arrow.png' alt='arrow' width={20} height={20}/> 
    </span></button>
</div>
    </div>
    </div>
  )
}

export default Cta