import Image from 'next/image'
import React from 'react'

const Plans = () => {
  return (
    <div className='flex flex-col  justify-center px-[20px] gap-y-6 py-[48px]  lg:px-44 lg:py-[80px] pt-[25px]'
    >

        <h1 className='text-center text-2xl font-medium lg:text-[42px]'>Flexible plans for you</h1>
        <p className='text-center pb-[14px] text-[14px] text-[#36485C] lg:text-[18px]'>No hidden fees!</p>

        <div className="pricing flex flex-col gap-y-6 lg:flex-row  lg:gap-x-4">
<div className='w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
<div>
  <h3 className='font-medium text-[#4328EB] text-[18px] lg:text-[21px]'>Free Trial</h3>
<p className=' pt-[12px]  text-[#36485C]'>Perfect for testing the waters</p>
<h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>$0<span className='text-[#5F7896]'>/mo</span></h2>
<ul className='flex flex-col gap-y-2 pt-4 text-[#36485C]'>

<li className='flex  gap-x-4 items-center'>
  <span><Image src="/assets/check.svg" alt='check' width={20} height={20}/> </span>
Lorem ipsum dolor sit amet
</li>
<li className='flex  gap-x-4 items-center'>
  <span><Image src="/assets/check.svg" alt='check' width={20} height={20}/> </span>
Lorem ipsum dolor sit amet
</li>
<li className='flex  gap-x-4 items-center'>
  <span><Image src="/assets/check.svg" alt='check' width={20} height={20}/> </span>
Lorem ipsum dolor sit amet
</li>
</ul>
</div>
<button className='text-[#4328EB] bg-white p-4 mt-4 rounded-[4px] font-medium'> Start Trial</button>

</div>





<div className='w-full rounded-[8px] text-white bg-[#4328EB] p-6 flex flex-col lg:justify-between'>
<div>
  <h3 className='font-medium text-white text-[18px] lg:text-[21px]'>Business</h3>
<p className=' pt-[12px]  text-[#F4F8FA]'>Perfect for small businesses</p>
<h2 className='pt-4 text-2xl lg:text-[32px] text-[#F4F8FA] font-medium'>$500<span className='text-[#5F7896]'>/mo</span></h2>
<ul className='flex flex-col gap-y-2 pt-4 text-[#F4F8FA]'>

<li className='flex  gap-x-4 items-center'>
  <span><Image src="/assets/check.svg" alt='check' width={20} height={20}/> </span>
Lorem ipsum dolor sit amet
</li>
<li className='flex  gap-x-4 items-center'>
  <span><Image src="/assets/check.svg" alt='check' width={20} height={20}/> </span>
Lorem ipsum dolor sit amet
</li>
<li className='flex  gap-x-4 items-center'>
  <span><Image src="/assets/check.svg" alt='check' width={20} height={20}/> </span>
Lorem ipsum dolor sit amet
</li>
<li className='flex  gap-x-4 items-center'>
  <span><Image src="/assets/check.svg" alt='check' width={20} height={20}/> </span>
Lorem ipsum dolor sit amet
</li>
<li className='flex  gap-x-4 items-center'>
  <span><Image src="/assets/check.svg" alt='check' width={20} height={20}/> </span>
Lorem ipsum dolor sit amet
</li>
<li className='flex  gap-x-4 items-center'>
  <span><Image src="/assets/check.svg" alt='check' width={20} height={20}/> </span>
Lorem ipsum dolor sit amet
</li>
</ul>
</div>
<button className='text-[#4328EB] bg-white p-4 mt-4 rounded-[4px] font-medium'> Get started</button>

</div>


<div className='w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
<div>
  <h3 className='font-medium text-[#4328EB] text-[18px] lg:text-[21px]'>Entreprise</h3>
<p className=' pt-[12px]  text-[#36485C]'>Perfect for big companies</p>
<h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>$0<span className='text-[#5F7896]'>/mo</span></h2>

<div className='flex flex-col gap-y-2 pt-4'>
<p className='text-[#36485C] text-[16px]'> 
Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
</p>

<p className=' text-[#36485C] text-[16px]'>
Nemo enim ipsam voluptatem quia 
voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
</div>
</div>
<button className='text-[#4328EB] bg-white p-4 mt-4 rounded-[4px] font-medium'> Contact Us</button>

</div>

        </div>
    </div>
  )
}

export default Plans