import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const link=[
  {
    name: "Features"
  },
  {
    name: "Princing"
  },
  {
    name: "Entreprise"
  },
  {
    name: "Careers"
  },
]
const Navbar = () => {
  return (


    <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:px-20'>
       
       <div className='flex items-center '>
        <Image src={'./assets/Logo.svg'} alt='Logo' width={40} height={40} objectFit='cover'/> 

        <div className=' hidden lg:flex  pl-[76px] gap-x-[56px]'>
          {link.map((item,index)=>(
              <Link  className='font-medium text-[#36485C]' key={index} href={item.name}>{item.name}</Link>
          ))}
        </div>
        </div>
        <div className="flex  gap-x-4">
          <div className='flex items-center gap-x-2'>
            <p className='hidden lg:block font-medium text-[#36485C] pr-[56px]'>Open an account</p>
        <Image src={'./assets/User.svg'} alt='User' width={40} height={40}/>

        <span className='hidden font-medium lg:block text-[#36485C]'>Sign In</span>
        </div>
        <Image className='lg:hidden' src={'./assets/Menu.svg'} alt='Menu' width={40} height={40}/>
        </div>
    </nav>
  )
}

export default Navbar