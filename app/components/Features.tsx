import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='flex flex-col justify-center px-[20px] gap-y-6 py-[56px] lg:px-20 lg:py-[90px] pt-[25px]'>

<div className='flex flex-col justify-center gap-y-2 sm:flex-row-reverse gap-x-6'>
<Image  src={'/assets/feature-1.svg'} alt='feature 1' className='h-full hidden sm:block ' width={628} height={628}/>

    <div className=' sm:w-1/2 sm:py-[56px] sm:pr-[56px]'>
<h3 className='font-medium text-[#0085FF] lg:text-[18px]'> Sales Monitoring</h3>
<h1 className='text-[24px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>
Simplify your sales monitoring
</h1>


<Image  src={'/assets/feature-1.svg'} alt='feature 1' className='h-full pt-2 mx-auto sm:hidden' width={350} height={350}/> 

<p className='text-[#36485C]lg:text-[18px] pt-2 '>Stay on top of things and revamp your work process with our game-changing feature. 
    Get a birds eye view with our customizable dashboard. </p>

<div className='pt-4'>
    <ul className='flex flex-col gap-y-3 lg:text-[18px] '>
        <li className='flex gap-x-4  items-center'>
        <Image  src={'/assets/check.svg'} alt='check 1' className='h-full ' width={24} height={24}/>
    <span className='text-[#36485C]'>Lorem ipsum dolor sit amet</span>
        </li>

        <li className='flex gap-x-4  items-center'>
        <Image  src={'/assets/check.svg'} alt='check 1' className='h-full ' width={24} height={24}/>
    <span className='text-[#36485C]'>Lorem ipsum dolor sit amet</span>
        </li>
        <li className='flex gap-x-4  items-center'>
        <Image  src={'/assets/check.svg'} alt='check 1' className='h-full ' width={24} height={24}/>
    <span className='text-[#36485C]'>Lorem ipsum dolor sit amet</span>
        </li>

    </ul>
    <button className='text-[#0085FF]   lg:text-[18px] font-medium h-[60px] pt-14     flex items-center justify-center gap-x-2   '>
Learn more <span><Image alt='Button arrow' src={'/assets/blue-button.svg'} width={26} height={26}/></span>
</button>
</div>
</div>
</div>

<div className='flex flex-col justify-center gap-y-2 sm:flex-row gap-x-6'>
<Image  src={'/assets/feature-2.svg'} alt='feature 2' className='h-full hidden sm:block ' width={628} height={628}/>

    <div className=' sm:w-1/2 sm:py-[56px] sm:pl-[56px]'>
<h3 className='font-medium text-[#00A424] lg:text-[18px]'>Customer Support</h3>
<h1 className='text-[24px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>
Get in touch with your customers
</h1>


<Image  src={'/assets/feature-2.svg'} alt='feature 2' className='h-full pt-2 mx-auto sm:hidden' width={350} height={350}/> 

<p className='text-[#36485C]lg:text-[18px] pt-2 '>Stay on top of things and revamp your
     work process with our game-changing feature. Get a birds eye view with our customizable dashboard.  </p>

<div className='pt-4'>
    <ul className='flex flex-col gap-y-3 lg:text-[18px] '>
        <li className='flex gap-x-4  items-center'>
        <Image  src={'/assets/check.svg'} alt='check 1' className='h-full ' width={24} height={24}/>
    <span className='text-[#36485C]'>Lorem ipsum dolor sit amet</span>
        </li>

        <li className='flex gap-x-4  items-center'>
        <Image  src={'/assets/check.svg'} alt='check 1' className='h-full ' width={24} height={24}/>
    <span className='text-[#36485C]'>Lorem ipsum dolor sit amet</span>
        </li>
        <li className='flex gap-x-4  items-center'>
        <Image  src={'/assets/check.svg'} alt='check 1' className='h-full ' width={24} height={24}/>
    <span className='text-[#36485C]'>Lorem ipsum dolor sit amet</span>
        </li>

    </ul>
    <button className='text-[#00A424]   lg:text-[18px] font-medium h-[60px] pt-14    flex items-center justify-center gap-x-2   '>
Learn more <span><Image alt='Button arrow' src={'/assets/green-button.svg'} width={26} height={26}/></span>
</button>
</div>
</div>
</div>


<div className='flex flex-col justify-center gap-y-2 sm:flex-row-reverse gap-x-6'>
<Image  src={'/assets/feature-3.svg'} alt='feature 3' className='h-full hidden sm:block ' width={628} height={628}/>

    <div className=' sm:w-1/2 sm:py-[56px] sm:pr-[56px]'>
<h3 className='font-medium text-[#EB2891] lg:text-[18px]'> Growth Monitoring</h3>
<h1 className='text-[24px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>
Monitor your sites new subscribers 
</h1>


<Image  src={'/assets/feature-3.svg'} alt='feature 3' className='h-full pt-2 mx-auto sm:hidden' width={350} height={350}/> 

<p className='text-[#36485C]lg:text-[18px] pt-2 '>Stay on top of things and revamp your work process with our game-changing feature.
     Get a birds eye view with our customizable dashboard.  </p>

<div className='pt-4'>
    <div className="flex gap-x-6 w-full pt-6 mx-auto ">
<div className='flex flex-col gap-y-3'>
    <h3 className='text-[20px] lg:text-[32px] font-medium'>100+</h3>
    <p className='text-[#5F7896]  text-[18px]'>Lorem ipsum dolor sit.</p>
</div>
<div className='flex flex-col gap-y-3'>
    <h3 className='lg:text-[32px] text-[20px]  font-medium'> 800+</h3>
    <p className='text-[#5F7896] text-[18px]'>Lorem ipsum dolor sit.</p>
</div>
    </div>
    <button className='text-[#EB2891]   lg:text-[18px] font-medium h-[60px] pt-14    flex items-center justify-center gap-x-2   '>
Learn more <span><Image alt='Button arrow' src={'/assets/blue-button.svg'} width={26} height={26}/></span>
</button>
</div>
</div>
</div>
    </div>
  )
}

export default Features