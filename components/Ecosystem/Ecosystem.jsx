import Image from 'next/image'
import React from 'react'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

const Ecosystem = () => {
  return (
    <div className='max-w-screen max-h-screen my-8 '>
        <h1 className='text-center font-poppins text-2xl font-extrabold'> Ecosystem </h1>
        <p className='w-[65%] mx-auto text-xl text-gray-400 text-center my-4'> At our company, we pride ourselves on delivering a level of service that. </p>
        
        <div className='flex flex-col md:flex-row  mx-auto justify-between items-center'>
            <div className='hidden md:flex flex-col mx-auto w-[15%]'>
                <div className='my-2 w-[100%] mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-8'>
                    <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                        <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                    </div>
                    <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                        <Link href='/' className='text-xl font-normal underline text-[#04A6E7]'>
                            Products <ArrowRightAltIcon className='text-[#04A6E7]' />
                        </Link>
                        
                    </div>
                </div>

                <div className='my-2 w-[100%] mx-auto items-center justify-center shadow-md text-white rounded-lg transform translate-x-16'>
                    <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                        <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                    </div>
                    <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                        <Link href='/' className='text-xl font-normal underline text-[#04A6E7]'>
                            Financiers <ArrowRightAltIcon className='text-[#04A6E7]' />
                        </Link>
                        
                    </div>
                </div>

                <div className='my-2 w-[100%] mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-8'>
                    <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                        <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                    </div>
                    <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                        <Link href='/' className='text-xl font-normal underline text-[#04A6E7]'>
                            Wallet <ArrowRightAltIcon className='text-[#04A6E7]' />
                        </Link>
                        
                    </div>
                </div>

                <div className='my-2 w-[100%] mx-auto items-center justify-center shadow-md text-white rounded-lg transform translate-x-16'>
                    <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                        <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                    </div>
                    <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                        <Link href='/' className='text-xl font-normal underline text-[#04A6E7]'>
                            Trading <ArrowRightAltIcon className='text-[#04A6E7]' />
                        </Link>
                        
                    </div>
                </div>

            </div>
            <div className='flex md:w-[35%] w-[90%] mx-auto  md:h-[50vh] flex-col text-center md:px-16 md:py-4 p-8 border-[2.5px] rounded-[1.8rem] border-dashed border-[#4FC1EE] font-poppins'>
                <h1 className='md:my-8 my-4 font-semibold md:text-3xl text-2xl text-[#00337C]'>
                    Residential
                </h1>
                <h1 className='md:my-8 my-4 font-semibold md:text-3xl text-2xl text-[#00337C]'>
                    Commercial Developers
                </h1>
                <h1 className='md:my-8 my-4 font-semibold md:text-3xl text-2xl text-[#00337C]'>
                    Enterprises
                </h1>
            </div>
            <div className='hidden md:flex flex-col mx-auto w-[15%]'>
                <div className='my-2 w-[100%] mx-auto items-center justify-center shadow-md text-white rounded-lg transform translate-x-16'>
                    <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                        <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                    </div>
                    <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                        <Link href='/' className='text-xl text-center font-normal underline text-[#04A6E7]'>
                            Services <ArrowRightAltIcon className='text-[#04A6E7]' />
                        </Link>
                        
                    </div>
                </div>

                <div className='my-2 w-[100%] mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-16'>
                    <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                        <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                    </div>
                    <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                        <Link href='/' className='text-xl text-center font-normal underline text-[#04A6E7]'>
                            Earning <ArrowRightAltIcon className='text-[#04A6E7]' />
                        </Link>
                        
                    </div>
                </div>

                <div className='my-2 w-[100%] mx-auto items-center justify-center shadow-md text-white rounded-lg transform translate-x-16'>
                    <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                        <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                    </div>
                    <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                        <Link href='/' className='text-xl text-center font-normal underline text-[#04A6E7]'>
                            Carbon Credits <ArrowRightAltIcon className='text-[#04A6E7]' />
                        </Link>
                        
                    </div>
                </div>

                <div className='my-2  items-center justify-center shadow-md text-white rounded-lg transform -translate-x-16'>
                    <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                        <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                    </div>
                    <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                        <Link href='/' className='text-xl text-center font-normal underline text-[#04A6E7]'>
                            Solutions <ArrowRightAltIcon className='text-[#04A6E7]' />
                        </Link>
                        
                    </div>
                </div>

            </div>
            
        </div>
        <div className='md:hidden flex my-4 overflow-x-auto space-x-8 py-2 px-12 m-4 items-center'>
            <div className='my-2 px-8 mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-8'>
                <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                    <Link href='/' className='text-xl font-normal underline flex items-center jusitfy-center flex-row text-[#04A6E7]'>
                        Products <ArrowRightAltIcon className='text-[#04A6E7]' />
                    </Link>            
                </div>
            </div>

            <div className='my-2 px-8 mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-8'>
                <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                    <Link href='/' className='text-xl font-normal underline flex items-center jusitfy-center flex-row text-[#04A6E7]'>
                        Financiers <ArrowRightAltIcon className='text-[#04A6E7]' />
                    </Link>            
                </div>
            </div>    

            <div className='my-2 px-8 mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-8'>
                <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                    <Link href='/' className='text-xl font-normal underline flex items-center jusitfy-center flex-row text-[#04A6E7]'>
                        Wallet <ArrowRightAltIcon className='text-[#04A6E7]' />
                    </Link>            
                </div>
            </div>
            
            <div className='my-2 px-8 mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-8'>
                <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                    <Link href='/' className='text-xl font-normal underline flex items-center jusitfy-center flex-row text-[#04A6E7]'>
                        Trading <ArrowRightAltIcon className='text-[#04A6E7]' />
                    </Link>            
                </div>
            </div>


            <div className='my-2 px-8 mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-8'>
                <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                    <Link href='/' className='text-xl font-normal underline flex items-center jusitfy-center flex-row text-[#04A6E7]'>
                        Services <ArrowRightAltIcon className='text-[#04A6E7]' />
                    </Link>            
                </div>
            </div>

            <div className='my-2 px-8 mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-8'>
                <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                    <Link href='/' className='text-xl font-normal underline flex items-center jusitfy-center flex-row text-[#04A6E7]'>
                        Earning <ArrowRightAltIcon className='text-[#04A6E7]' />
                    </Link>            
                </div>
            </div>


            <div className='my-2 px-8 mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-8'>
                <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                    <Link href='/' className='text-xl font-normal underline flex items-center jusitfy-center flex-row text-[#04A6E7]'>
                        Carbon Credits <ArrowRightAltIcon className='text-[#04A6E7]' />
                    </Link>            
                </div>
            </div>


            <div className='my-2 px-8 mx-auto items-center justify-center shadow-md text-white rounded-lg transform -translate-x-8'>
                <div className='rounded-full overflow-hidden mx-auto mt-2 w-12 p-3 h-12 flex items-center justify-center bg-[#04A6E7]'>
                    <Image  src="/images/services/skyline.png" alt="skyline" width={25} height={25} style={{"objectFit":"contain"}} />
                </div>
                <div className='text-center items-center justify-center flex-col mt-4 m-2'>
                    <Link href='/' className='text-xl font-normal underline flex items-center jusitfy-center flex-row text-[#04A6E7]'>
                        Solutions <ArrowRightAltIcon className='text-[#04A6E7]' />
                    </Link>            
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ecosystem