import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Visions = () => {
  return (
    <div className='max-w-screen flex md:flex-row flex-col justify-between p-12'>
        <div className="bg-white rounded-lg md:w-[30%] w-[100%] md:p-12 md:my-4 md:pb-4 cursor-pointer hover:scale-105 hover:duration-500">
            <div className='md:hidden flex w-100 justify-between items-center'>
                <h2 className="text-2xl font-bold my-2">Our Vision</h2>
                <h2><Link href="/services" className="text-green-500 font-semibold underline mt-8">Explore</Link></h2>
            </div>
            <h2 className="text-2xl font-bold my-2 hidden md:block">Our Vision</h2>
            <p className="mb-12 text-gray-500 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link href="/impact" className="text-green-500 font-semibold underline mt-8 hidden md:block">Explore</Link>
        </div>
        <div className="bg-white rounded-tr-full rounded-tl-full md:w-[22%] w-[90%] shadow-md font-poppins my-4 pb-4 transform md:translate-x-0 -translate-x-4 cursor-pointer hover:scale-105 hover:duration-500">
            <Image src="/images/services/vision1.png" alt="vision 1" width={280} height={190} style={{"objectFit":"contain"}} />
            <p className="text-gray-400 mb-4 p-6 text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link href="/impact" className="text-[#00337C] font-semibold underline p-6">Read More</Link>
        </div>
        <div className="bg-white rounded-tr-full rounded-tl-full md:w-[22%] w-[90%] shadow-md font-poppins my-4 pb-4 md:transform md:-translate-y-8 md:translate-x-0 translate-x-16 cursor-pointer hover:scale-105 hover:duration-500">
            <Image src="/images/services/vision2.png" alt="vision 1" width={280} height={190} style={{"objectFit":"contain"}} />
            <p className="text-gray-400 mb-4 p-6 text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link href="/impact" className="text-[#00337C] font-semibold underline p-6">Read More</Link>
        </div>
        <div className="bg-white rounded-tr-full rounded-tl-full md:w-[22%] w-[90%] shadow-md font-poppins my-4 pb-4 md:translate-x-0 -translate-x-6 cursor-pointer hover:scale-105 hover:duration-500">
            <Image src="/images/services/vision3.png" alt="vision 1" width={280} height={190} style={{"objectFit":"contain"}} />
            <p className="text-gray-400 mb-4 p-6 text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link href="/impact" className="text-[#00337C] font-semibold underline p-6">Read More</Link>
        </div>
    </div>
  )
}

export default Visions