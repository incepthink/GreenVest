import { EmailOutlined, FacebookOutlined, LinkedIn, LocalPhoneOutlined, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen    flex text-white bg-[#04A6E7]  flex-col font-poppins'>
        <div className='hidden md:flex flex-row justify-between items-center'>
            <Link className="flex items-center  px-12 py-2 text-xl font-semibold " href="/">
                <Image width={55} height={55} src = '/images/Logo2.png' alt='website logo' style={{"objectFit":"contain"}}  />
                <span className="text-white font-ayuthaya">tok-e-re</span>
            </Link>
        </div>
        <Link className="md:hidden flex justify-center items-center bg-[#00000033] px-12 py-6 text-2xl font-semibold " href="/">
            <Image width={75} height={60} src = '/images/Logo2.png' alt='website logo' style={{"objectFit":"contain"}}  />
            <span className="text-white">tok-e-re</span>
        </Link>
        <div className='grid md:grid-cols-3  p-6 font-poppins'>
            <div className='flex flex-col px-4'>
                <div className='flex flex-row my-2'>
                    <div className='rounded-full p-3 bg-[#111C55] items-center'><EmailOutlined className='text-green-500' /></div>
                    
                    <div className='flex font-semibold flex-col mx-2'>
                        <p>Email</p>
                        <p>contact@logistics.com</p>
                    </div>
                </div>
                <div className='flex flex-row my-2 font-semibold'>
                <div className='rounded-full p-3 bg-[#111C55] items-center'><LocalPhoneOutlined className='text-green-500' /></div>
                    <div className='flex flex-col mx-2'>
                        <p>Call Us</p>
                        <p>(00) 112 365 489</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col text-white'>
                <div className='grid grid-cols-1'>
                    <Link href='/' className='mx-8 my-3 font-bold text-xl' >Claim NFT</Link>
                </div>
                <div className='grid grid-cols-2'>
                    <Link href='/privacypolicy' className='mx-8 my-3 font-regular text-xl' >Privacy & Policy</Link>
                </div>
                <div className='grid grid-cols-2'>
                    <Link href='/disclaimer' className='mx-8 my-3 font-regular text-xl' >Disclaimer</Link>
                </div>
                <div className='grid grid-cols-2'>
                    <Link href='/faq' className='mx-8 my-3 font-regular text-xl' >FAQs</Link>
                </div>
            </div>
            <div className='flex flex-col px-8 text-white'>
                <input className='text-white border-white rounded-md border-2 w-[80%] mx-auto bg-transparent text-white placeholder-white px-6 py-4' placeholder='Email here' />
                <div className='w-[80%] flex flex-row mx-auto mt-4 items-center justify-between'>
                    <button className='text-white bg-green-500 px-4 py-2 rounded-md'> Send Now</button>
                    <LinkedIn className='text-white' />
                    <FacebookOutlined className='text-white' />
                    <Twitter className='text-white' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer