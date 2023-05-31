import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'

const services = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
  return (
    <div>
        <Navbar />
        <div className='max-w-screen h-screen bg-service-background bg-no-repeat'>
            <div className='w-[50%] flex flex-col md:py-32 md:px-20 font-poppins'>
                <h1 className='text-black font-bold text-6xl uppercase '>Our Services</h1>
                <p className='font-regular text-[#2E2E2E] my-14'>
                    &quot;At Tokere&apos;s, we understand the importance of protecting and preserving our planet for future generations, 
                    which is why we offer a comprehensive range of environmental services designed to help businesses 
                    and individuals minimize their carbon footprint and promote sustainable practices.&quot;
                </p>
            </div>
        </div>
        <div className='flex flex-wrap w-[90%] font-poppins my-4 mx-auto'>

            <div className='flex flex-col w-[45%] mx-auto my-4'>
                <div className='w-100 h-100'>
                    <Image src="/images/service1.png" alt="service 1" width={600} height={450} />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-semibold my-4'>Enterprise <br/> (large, medium, small)</h2>
                    <p className='text-base text-[#6B6B6B] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, .
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <button className='px-6 py-2 text-white my-2 rounded-lg bg-[#04A6E7] w-[20%]' onClick={() => router.push('/services/enterprise')}>Check</button>
                </div>
            </div>


            <div className='flex flex-col w-[45%] mx-auto my-4'>
                <div className='w-100 h-100'>
                    <Image src="/images/service1.png" alt="service 1" width={600} height={450} />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-semibold my-4'>Commercial <br/> Property Developer</h2>
                    <p className='text-base text-[#6B6B6B] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, .
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <button className='px-6 py-2 text-white my-2 rounded-lg bg-[#04A6E7] w-[20%]' onClick={() => router.push('/services/developer')}>Check</button>
                </div>
            </div>

            <div className='flex flex-col w-[95%] mx-auto my-8'>
                <div className='w-100 h-100'>
                    <Image src="/images/service2.png" alt="service 1" width={1980} height={990} />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-semibold my-4'>Residential <br/> (Gated, RWAs, societies)</h2>
                    <p className='text-base text-[#6B6B6B] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, .
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <button className='px-6 py-2 text-white my-2 rounded-lg bg-[#04A6E7] w-[10%]' onClick={() => router.push('/services/residential')}>Check</button>
                </div>
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default services