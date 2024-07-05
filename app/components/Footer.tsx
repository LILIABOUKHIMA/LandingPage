import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[80px] pb-[40px]'>

    <div className='flex items-center justify-center gap-x-4'>
      <Image  alt='logo' src="/assets/Logo.svg" width={40} height={40}/>
 <h1 className='font-bold text-[17px]'>Lilys site</h1>
     
    </div>

    <ul className='flex flex-col items-center gap-y-8 pt-[56px] text-slate-600 sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5'>

<li>Features</li>
<li>Pricing</li>
<li>Entreprise</li>
<li>Careers</li>

    </ul>

    <p className='pt-[56px] sm:pt-5 text-[14px] text-center text-slate-500 font-medium'>@<i className="fa fa-copyright" aria-hidden="true"></i>Copyright2024.LiliaBOUKHIMA.All rights reserved</p>
        

        <div className='flex pt-9 items-center gap-x-8 justify-center'>
        <Image  alt='fb' src="/assets/Facebook.svg" width={25} height={25}/>
        <Image  alt='tw' src="/assets/X.svg" width={25} height={25}/>
        <Image  alt='tw' src="/assets/Feed.svg" width={25} height={25}/>

        </div>
    </div>
  )
}

export default Footer