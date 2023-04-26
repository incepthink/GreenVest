import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useRouter } from 'next/router';

const Services = () => {
    const router = useRouter();
    return (
    <div className='max-w-screen flex-col justify-between p-12 my-4 bg-[#E6F6FD] font-poppins'>
        <div className='md:w-[90%] w-100 mx-auto flex-col border-b-2 border-gray-300'>
            <div className='flex justify-between items-center'>
                <h2 className="text-4xl font-bold uppercase tracking-wide">services</h2>
                <h2><Link href="/services" className="text-green-500 font-semibold underline mt-8 underline-offset-4">Explore</Link></h2>
            </div>
            <p className='text-lg mt-4 text-gray-500 leading-8 pb-4'>
                At our company, we pride ourselves on delivering a level of service that consistently exceeds our customers expectations, 
                ensuring that every interaction is a positive and memorable experience.
            </p>
        </div>
        <div className='flex flex-col md:flex-row md:max-w-[90%] w-100 mx-auto justify-evenly items-center my-12 font-poppins'>
            <div onClick={() => router.push('/services')} className='md:w-[30%] w-100 md:h-[55vh] my-4 mx-auto items-center justify-center bg-[#04A6E7] hover:bg-white text-white hover:text-black rounded-lg'>
                <div className='rounded-full overflow-hidden mx-auto mt-8 w-16 p-3 h-16 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/skyline.png" alt="skyline" width={50} height={50} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col my-4'>
                    <h2 className='text-xl font-semibold'>
                        Enterprise
                    </h2>
                    <h2 className='text-xl font-semibold'>
                        (large, medium, small)
                    </h2>
                    <p className='text-lg font-light my-4 px-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem
                    </p>
                </div>
                <div className='bg-white flex items-center justify-center rounded-full overflow-hidden w-10 h-10 mx-auto my-8'>
                    <ArrowRightAltIcon className='text-[#4C40F7]' />
                </div>
            </div>

            <div onClick={() => router.push('/services')} className='md:w-[30%] w-100 md:h-[55vh] my-4 mx-auto items-center justify-center bg-white text-black rounded-lg hover:bg-[#04A6E7] gover:text-white '>
                <div  className='rounded-full overflow-hidden mx-auto mt-8 w-16 p-3 h-16 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/apartment.png" alt="skyline" width={50} height={50} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col my-4'>
                    <h2 className='text-xl font-semibold'>
                        Commercial 
                    </h2>
                    <h2 className='text-xl font-semibold'>
                        Property Developer
                    </h2>
                    <p className='text-lg font-light my-4 px-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem
                    </p>
                </div>
                <div className='bg-slate-200 flex items-center justify-center rounded-full overflow-hidden w-10 h-10 mx-auto my-8'>
                    <ArrowRightAltIcon className='text-[#4C40F7]' />
                </div>
            </div>

            <div onClick={() => router.push('/services')} className='md:w-[30%] w-100 md:h-[55vh] my-4 mx-auto items-center justify-center bg-white text-black rounded-lg hover:bg-[#04A6E7] gover:text-white cursor-pointer'>
                <div className='rounded-full overflow-hidden mx-auto mt-8 w-16 p-3 h-16 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/industrial.png" alt="skyline" width={50} height={50} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col my-4'>
                    <h2 className='text-xl font-semibold'>
                        Residential
                    </h2>
                    <h2 className='text-xl font-semibold'>
                        {/* (large, medium, small) */}
                    </h2>
                    <p className='text-lg font-light mt-8 my-4 px-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem
                    </p>
                </div>
                <div className='bg-slate-200 flex items-center justify-center rounded-full overflow-hidden w-10 h-10 mx-auto mt-12 my-8'>
                    <ArrowRightAltIcon className='text-[#4C40F7]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services