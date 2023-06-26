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
            <p className="mb-4 text-gray-500 text-lg">Our platform provides verified, transparent and immutable RECs for a clear trail and transfer of ownership. Enterprises and Brokers will find tok-e-re a highly efficient platform to manage their REC transactions easier, faster and sustainable.</p>
        </div>
        <div className="bg-white md:w-[21%] rounded-tr-2xl rounded-tl-2xl w-[90%] shadow-md font-poppins my-4 transform md:translate-x-0 -translate-x-4 cursor-pointer hover:scale-105 hover:duration-500">
            <Image src="/images/services/vision6.png" className='rounded-tr-2xl rounded-tl-2xl' alt="vision 1" width={280} height={190} style={{"objectFit":"contain"}} />
            <p className="text-gray-500  p-4 text-md ">Blockchain technology is increasingly attracting investors who prioritize investments in enterprises with a well-defined roadmap for achieving their Net Zero goals.</p>
            
        </div>
        <div className="bg-white rounded-tr-2xl rounded-tl-2xl md:w-[21%] w-[90%] shadow-md font-poppins my-4  md:transform md:-translate-y-8 md:translate-x-0 translate-x-16 cursor-pointer hover:scale-105 hover:duration-500">
            <Image src="/images/services/vision7.png" className='rounded-tr-2xl rounded-tl-2xl' alt="vision 1" width={280} height={190}  />
            <p className="text-gray-500 p-4 text-md ">Rapid awareness within consumers is shaping their preferences for companies that demonstrate their Net 0 actions.</p>
            
        </div>
        <div className="bg-white rounded-lg md:w-[21%] w-[90%] shadow-md font-poppins my-4 md:translate-x-0 -translate-x-6 cursor-pointer hover:scale-105 hover:duration-500">
            <Image src="/images/services/vision2.png" alt="vision 1" width={280} height={190} style={{"objectFit":"contain"}} />
            <p className="text-gray-500  p-4 text-md ">In an increasing war for talent, attracting and retaining good talent is becoming a core issue for most enterprises.</p>
            
        </div>
    </div>
  )
}

export default Visions