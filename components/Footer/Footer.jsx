import { EmailOutlined, FacebookOutlined, LinkedIn, LocalPhoneOutlined, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen    flex text-white bg-[#04A6E7]  flex-col font-poppins'>
        <div className='hidden md:flex flex-row justify-between items-center'>
            <Link className="flex items-center bg-[#00000033] px-12 py-4 text-xl font-semibold " href="/">
                <Image width={75} height={60} src = '/images/Logo.png' alt='website logo' style={{"objectFit":"contain"}}  />
                <span className="text-white">Tokere&apos;s</span>
            </Link>
            <h1 className='hidden md:block text-xl font-bold px-24'>Pages</h1>
            <h1 className='hidden md:block text-xl font-bold px-24'>Utilities</h1>
            <h1 className='hidden md:block text-xl font-bold px-24'>Subscribe</h1>
        </div>
        <Link className="md:hidden flex justify-center items-center bg-[#00000033] px-12 py-8 text-2xl font-semibold " href="/">
            <Image width={75} height={60} src = '/images/Logo.png' alt='website logo' style={{"objectFit":"contain"}}  />
            <span className="text-white">Tokere&apos;s</span>
        </Link>
        <div className='grid md:grid-cols-3  p-8 font-poppins'>
            <div className='flex flex-col p-4'>
                <p className='font-light'>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                <div className='flex flex-row my-4'>
                    <div className='rounded-full p-3 bg-[#111C55] items-center'><EmailOutlined className='text-green-500' /></div>
                    
                    <div className='flex flex-col mx-2'>
                        <p>Email</p>
                        <p>contact@logistics.com</p>
                    </div>
                </div>
                <div className='flex flex-row my-4'>
                <div className='rounded-full p-3 bg-[#111C55] items-center'><LocalPhoneOutlined className='text-green-500' /></div>
                    <div className='flex flex-col mx-2'>
                        <p>Call Us</p>
                        <p>(00) 112 365 489</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col px-8 text-white'>
                <div className='grid grid-cols-2'>
                    <Link href='/' className='mx-8 my-4'>Home</Link>
                    <Link href='/' className='mx-8 my-4'>Contact Us</Link>
                    <Link href='/' className='mx-8 my-4'>Know More</Link>
                    <Link href='/' className='mx-8 my-4'>Blog</Link>
                    <Link href='/' className='mx-8 my-4'>Services</Link>
                    <Link href='/' className='mx-8 my-4'>Our Impact</Link>
                    <Link href='/' className='mx-8 my-4'>Licenses</Link>
                    <Link href='/' className='mx-8 my-4'>Protected</Link>
                    <Link href='/' className='mx-8 my-4'>Careers</Link>
                </div>
            </div>
            <div className='flex flex-col px-8 text-white'>
                <input className='text-white border-white border-2 w-[80%] mx-auto bg-transparent text-white placeholder-white px-6 py-4' placeholder='Email here' />
                <div className='w-[80%] flex flex-row mx-auto mt-4 items-center justify-between'>
                    <button className='text-white bg-green-500 px-6 py-4'> Send Now</button>
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