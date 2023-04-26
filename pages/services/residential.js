import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'

const residential = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col text-center items-center my-8 font-poppins'>
            <h1 className='text-[#04A6E7] font-bold text-2xl uppercase'> Residential </h1>
            <p className='text-slate-500 mt-4 font-semibold'>A one-stop-shop for Residential owner.</p>    
        </div>
        <div className='flex flex-col md:flex-row md:flex-wrap md:max-w-[90%]  w-100 mx-auto justify-between items-center my-12 font-poppins'>
            
            <div className='md:w-[30%] w-[90%] md:h-[50vh] p-2 text-center shadow-xl w-100  my-8 mx-auto items-center justify-center bg-[#04A6E7] text-white rounded-lg'>
                <div className='rounded-full overflow-hidden mx-auto mt-8 w-16 p-3 h-16 flex items-center justify-center bg-[#04A6E7] bg-img-background bg-cover'>
                    <Image  src="/images/services/enterprise0.png" alt="skyline" width={50} height={50} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col my-4'>
                    <h2 className='text-xl font-semibold'>
                        Objective
                    </h2>
                    <h2 className='text-xl font-semibold'>
                        Calculation & Assessment 
                    </h2>
                    <p className='text-md my-4 mb-12 px-8'>
                        Analyse your operations and emissions to provide an objective assessment and calculation of your ecological footprint
                    </p>
                </div>
            </div>

            <div className='md:w-[30%] w-[90%] md:h-[50vh] p-2 text-center shadow-xl w-100  my-8 mx-auto items-center justify-center bg-white text-black rounded-lg'>
                <div className='rounded-full overflow-hidden mx-auto mt-8 w-16 p-3 h-16 flex items-center justify-center bg-img-background bg-cover'>
                    <Image  src="/images/services/enterprise1.png" alt="skyline" width={50} height={50} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col my-4'>
                    <h2 className='text-xl font-semibold'>
                        Curating 
                    </h2>
                    <h2 className='text-xl font-semibold'>
                        Solutions
                    </h2>
                    <p className='text-md text-[#6B6B6B] my-4 mb-12 px-8'>
                        Identify from a list of specialists on our platform to curate a customized solution for your business
                    </p>
                </div>
            </div>

            <div className='md:w-[30%] w-[90%] md:h-[50vh] p-2 text-center shadow-xl w-100  my-8 mx-auto items-center justify-center bg-white text-black rounded-lg'>
                <div className='rounded-full overflow-hidden mx-auto mt-8 w-16 p-3 h-16 flex items-center justify-center bg-img-background bg-cover'>
                    <Image  src="/images/services/enterprise2.png" alt="skyline" width={50} height={50} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col my-4'>
                    <h2 className='text-xl font-semibold'>
                        Green 
                    </h2>
                    <h2 className='text-xl font-semibold'>
                        Financing
                    </h2>
                    <p className='text-md text-[#6B6B6B] my-4 mb-12 px-8'>
                        Financing support from Institutional, Private and Fractional investors to fund the project
                    </p>
                </div>
            </div>

            <div className='md:w-[30%] w-[90%] md:h-[50vh] p-2 text-center shadow-xl w-100  my-8 mx-auto items-center justify-center bg-white text-black rounded-lg'>
                <div className='rounded-full overflow-hidden mx-auto mt-8 w-16 p-3 h-16 flex items-center justify-center bg-img-background bg-cover'>
                    <Image  src="/images/services/enterprise3.png" alt="skyline" width={50} height={50} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col my-4'>
                    <h2 className='text-xl font-semibold'>
                        Commercial 
                    </h2>
                    <h2 className='text-xl font-semibold'>
                        Property Developer
                    </h2>
                    <p className='text-md text-[#6B6B6B] my-4 mb-12 px-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem
                    </p>
                </div>
            </div>

            <div className='md:w-[30%] w-[90%] md:h-[50vh] p-2 text-center shadow-xl w-100  my-8 mx-auto items-center justify-center bg-white text-black rounded-lg'>
                <div className='rounded-full overflow-hidden mx-auto mt-8 w-16 p-3 h-16 flex items-center justify-center bg-img-background bg-cover'>
                    <Image  src="/images/services/enterprise4.png" alt="skyline" width={50} height={50} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col my-4'>
                    <h2 className='text-xl font-semibold'>
                        Commercial 
                    </h2>
                    <h2 className='text-xl font-semibold'>
                        Property Developer
                    </h2>
                    <p className='text-md text-[#6B6B6B] my-4 mb-12 px-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem
                    </p>
                </div>
            </div>

            <div className='md:w-[30%] w-[90%] md:h-[50vh] p-2 text-center shadow-xl w-100  my-8 mx-auto items-center justify-center bg-white text-black rounded-lg'>
                <div className='rounded-full overflow-hidden mx-auto mt-8 w-16 p-3 h-16 flex items-center justify-center bg-img-background bg-cover'>
                    <Image  src="/images/services/enterprise5.png" alt="skyline" width={50} height={50} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col my-4'>
                    <h2 className='text-xl font-semibold'>
                        Commercial 
                    </h2>
                    <h2 className='text-xl font-semibold'>
                        Property Developer
                    </h2>
                    <p className='text-md text-[#6B6B6B] my-4 mb-12 px-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem
                    </p>
                </div>
            </div>

        </div>
        <div className='flex flex-col md:flex-row items-center justify-around w-[85%] mx-auto font-poppins my-4 mb-12'>
            <div className='flex flex-col md:w-[50%] w-[100%] md:px-0 md:px-1'>
                <h1 className='text-4xl font-bold uppercase mb-4'> why <br/> choose us ?</h1>
                <p className='text-md text-slate-400 font-semibold my-4'>A one-stop-shop for Enterprises to meet your ESG goals. Further leverage our services to expand your ESG influence to your </p>
                <ul className='list-none font-poppins text-slate-500 my-4'>
                    <li className='my-2'><CheckIcon className='bg-[#04A6E7] text-white rounded-full mr-2 p-1' />Supply Chain, to manage Group 3 emission targets,</li>
                    <li className='my-2'><CheckIcon className='bg-[#04A6E7] text-white rounded-full mr-2 p-1' />Employees’ residential ecosystems,</li>
                    <li className='my-2'>
                        <CheckIcon className='bg-[#04A6E7] text-white rounded-full mr-2 p-1' />Clients’ businesses. 
                        For small to mid scale buildings, 
                        we can bundle your needs with similar sized buildings to create scale and ease of meeting your 
                        ESG goals.
                    </li>
                </ul>
            </div>
            <div className='md:w-[50%] w-[100%] items-center justify-center md:px-0 md:px-1'>
                <Image src="/images/services/ChooseUs.png" alt='choose us earth image' width={500} height={500} style={{objectFit:"contain", margin:'0 auto'}} />
            </div>
            
        </div> 
        <Footer />
    </div>
  )
}

export default residential