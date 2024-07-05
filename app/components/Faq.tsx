import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';


const items=[
    {
        question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
        question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
        question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
        question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
        question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
        question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
        question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    
]
const Faq = () => {
  return (
    <div className='  flex flex-col px-[20px] gap-y-6 py-[56px] lg:px-44 lg:py-[90px] pt-[25px]   gap-x-6  lg:flex-row w-full '>

<div  className='lg:w-1/3 lg:py-[32px] lg:pr-[56px]'>
<h3 className='text-[#EB2891] text-[14px] font-medium lg:text-[16px]'>
Frequently Asked Questions
</h3>
<h1 className='font-medium text-[24px] py-4 lg:text-[42px] leading-[58px]'>Let’s clarify some of your questions</h1>

<p className='text-[#36485C] pb-[24px] text-[16px]'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore 
</p>
</div>

<div className='lg:w-2/3'>
    <Accordion.Root type='single'
    defaultValue='item-1' collapsible
   className='flex flex-col gap-y-4' >
{
    items.map((item,index)=>(
        <div key={index}>
            <Accordion.Item value={`item-${index+1}`} className='bg-[#E3F1FF] px-[16px] rounded-[8px]'>

            <Accordion.Header>
                    <Accordion.Trigger className='flex flex-row-reverse w-full justify-between items-center pt-2'>
                        <span> <Image src={'/assets/Plus.svg'} alt="plus" width={30} height={30}/></span>
                    <p className='text-left font-medium '>{item.question}</p>
                    </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Content className='text-[#36485C] pt-2'>
                    <p>{item.answer}</p>

                    </Accordion.Content>
                

            </Accordion.Item>
        </div>
    ))
}
    </Accordion.Root>
</div>

    </div>
  )
}

export default Faq