import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Visions = () => {
  return (
    <div className='max-w-screen flex md:flex-row flex-col justify-between p-12 border-b-2 border-gray-300'>
        <div className="bg-white rounded-lg md:w-[30%] w-[100%] md:p-12 md:my-4 md:pb-4 cursor-pointer hover:scale-105 hover:duration-500">
            <div className='md:hidden flex w-100 justify-between items-center'>
                <h2 className="text-4xl font-bold my-2">Vision & Mission</h2>
            </div>
            <h2 className="text-4xl font-bold my-2 hidden md:block">Vision & Mission</h2>
            <p className="mb-4 text-gray-500 text-lg">Our platform provides verified, transparent and immutable RECs for a clear trail and transfer of ownership. Enterprises and Brokers will find tok-e-re a highly efficient platform to manage their REC transactions easier, faster and sustainable.</p>
        </div>
        <div className="bg-white py-12 md:w-[21%] my-2 mx-auto rounded-xl w-[90%] cursor-pointer shadow-sm shadow-[#04A6E7] flex justify-center items-center font-poppins cursor-pointer hover:scale-105 hover:duration-500 hover:bg-[#b0e9f2]">
            <p className="text-black flex px-2 font-bold justify-center items-center text-center text-2xl">Tailor made to fit everyone&apos;s requirement.</p>
        </div>
        <div className="bg-white py-12 md:w-[21%] mx-auto my-2 rounded-xl w-[90%] cursor-pointer shadow-sm shadow-[#04A6E7] flex justify-center items-center font-poppins  cursor-pointer hover:scale-105 hover:duration-500 hover:bg-[#b0e9f2]">
            <p className="text-black px-2 font-bold flex justify-center items-center text-center text-2xl ">Simple, Affordable, Quick, Easy to implement and report.</p>
        </div>
        <div className="bg-white py-12 md:w-[21%] mx-auto my-2 rounded-xl w-[90%] cursor-pointer shadow-sm shadow-[#04A6E7] flex justify-center items-center font-poppins cursor-pointer hover:scale-105 hover:duration-500 hover:bg-[#b0e9f2]">
            <p className="text-black px-2 font-bold flex justify-center items-center text-center text-2xl ">Incentivise, Reward and celebrate &apos; green footprints &apos;.</p>
        </div>
    </div>
  )
}

export default Visions