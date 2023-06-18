import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Visions = () => {
  return (
    <div className='max-w-screen flex md:flex-row flex-col justify-between p-12 border-b-2 border-gray-300'>
        <div className="bg-white rounded-lg md:w-[30%] w-[100%] md:p-12 md:my-4 md:pb-4 cursor-pointer hover:scale-105 hover:duration-500">
            <div className='md:hidden flex w-100 justify-between items-center'>
                <h2 className="text-2xl font-bold my-2">Our Vision</h2>
            </div>
            <h2 className="text-2xl font-bold my-2 hidden md:block">Our Vision</h2>
            <p className="mb-4 text-gray-500 text-md">Our platform provides verified, transparent and immutable RECs for a clear trail and transfer of ownership. Enterprises and Brokers will find tok-e-re a highly efficient platform to manage their REC transactions easier, faster and sustainable.</p>
        </div>
        <div className="bg-white rounded-tr-full rounded-tl-full md:w-[22%] w-[90%] shadow-md font-poppins my-4 pb-4 transform md:translate-x-0 -translate-x-4 cursor-pointer hover:scale-105 hover:duration-500">
            <Image src="/images/services/vision1.png" alt="vision 1" width={280} height={190} style={{"objectFit":"contain"}} />
            <p className="text-gray-400 mb-2 p-6 text-md ">Increasingly investors are prioritizing investments into enterprises who have a roadmap to manage their Net 0 goals.</p>
            
        </div>
        <div className="bg-white rounded-tr-full rounded-tl-full md:w-[22%] w-[90%] shadow-md font-poppins my-4 pb-4 md:transform md:-translate-y-8 md:translate-x-0 translate-x-16 cursor-pointer hover:scale-105 hover:duration-500">
            <Image src="/images/services/vision2.png" alt="vision 1" width={280} height={190} style={{"objectFit":"contain"}} />
            <p className="text-gray-400 mb-2 p-6 text-md ">Rapid awareness within consumers is shaping their preferences for companies that demonstrate their Net 0 actions.</p>
            
        </div>
        <div className="bg-white rounded-tr-full rounded-tl-full md:w-[22%] w-[90%] shadow-md font-poppins my-4 pb-4 md:translate-x-0 -translate-x-6 cursor-pointer hover:scale-105 hover:duration-500">
            <Image src="/images/services/vision3.png" alt="vision 1" width={280} height={190} style={{"objectFit":"contain"}} />
            <p className="text-gray-400 mb-2 p-6 text-md ">In an increasing war for talent, attracting and retaining good talent is becoming a core issue for most enterprises.</p>
            
        </div>
    </div>
  )
}

export default Visions