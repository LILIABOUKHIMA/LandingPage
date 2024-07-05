import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='pt-4 lg:pt-10'>
<div className="  w-full items-center justify-between px-[20px] xl:px-[480px] lg:px-[280px] md:px-[100px] py-[16px] ">
<h1 className='text-center text-[32px] leading-10 font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]'>Start monitoring your website like a pro</h1>

<p className='text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7'>Get a birds eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!</p>

<div className='   flex w-full justify-center h-[200px]  gap-x-6 pt-8   '>
<button className='bg-[#4328EB] h-[60px]  px-4 py-4 w-1/2 lg:w-1/5 text-white border-2 hover:border-[#4328EB]  hover:text-black rounded-md hover:bg-white  '>
            Try for free
          </button>

<button className='text-[#4328EB]  h-[60px] py-4   px-4 w-1/2 lg:w-1/5 flex items-center justify-center gap-x-2 border-2 border-[#36485C] rounded-md  hover:bg-black hover:text-white'>
View pricing <span><Image alt='Button arrow' src={'/assets/blue-button.svg'} width={26} height={26}/></span>
</button>
</div>
</div>




        <div className="relative flex h-full w-full justify-center ">
        <Image alt='Gradient' src={'/assets/Gradient.svg'}       layout="responsive"
        width={500} className='min-h-[500px] w-full object-cover'
        height={500}/>

<div className='absolute flex w-full flex-col items-center   bottom-5'>
<Image alt='Hero' src={'/assets/Image.svg'}       
        width={400} 
        height={400}  className='-ml-4 lg:h-auto lg:w-[70%]  lg:-mb-28'  />

<div className=' w-full flex flex-col items-center '>
<p className='font-medium text-white lg:text-[25px]'>   Trusted buy these companies</p>
<div className='grid grid-cols-3    lg:flex lg:flex-row gap-x-6 justify-between lg:gap-x-10 items-center  justify-items-center px-[20px] align-middle '> 
<Image alt='Google' src={'/assets/Google.svg'}       
        width={120} 
        height={120}  />
        <Image alt='Slack' src={'/assets/Slack.svg'}       
        width={120} 
        height={120}  />
<Image alt='TrustPilot' src={'/assets/Trustpilot.svg'}       
        width={120} 
        height={120}   />


<Image alt='CNN' src={'/assets/CNN.svg'}       
        width={120} 
        height={120}  />

<Image alt='Clutch' src={'/assets/Clutch.svg'}       
        width={120} 
        height={120}   />
</div>
</div >

</div>

        </div>


    </div>
  )
}

export default Hero