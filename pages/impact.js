import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const impact = () => {
  return (
    
    <div>
        <Navbar />
        <div className='max-w-screen h-[75vh] bg-[#04a6e91a] font-poppins'>
            <div className='text-center w-[75%] mx-auto'>
                <h1 className='text-2xl font-bold uppercase text-[#04A6E7] pt-16'>RESULT</h1>
                <h1 className='text-6xl font-bold my-2'>
                    Together, we can make a world of difference.
                </h1>
                <p className='text-slate-400 my-8 text-xl'> Our company is dedicated to protecting the environment and reducing CO2 emissions. We understand the harmful impact that carbon dioxide has on our planet, which is why we have implemented several initiatives to reduce our carbon footprint.</p>
            
                {/* <div className='w-100 grid grid-cols-3 mx-auto'>
                    <div className='grid grid-rows-2'>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <div className="relative">
                                <Image
                                    style={{objectFit:'contain'}}
                                    src="/images/impact1.png"
                                    alt="Image description"
                                    height={1024}
                                    width={500}
                                />
                                <div className="absolute inset-0 bg-white opacity-80"></div>
                                <h2 className="absolute bottom-0 left-0 ml-4 text-[#00337C] rounded-lg text-xl font-medium">
                                    Our Research
                                </h2>
                            </div>
                        </div>
                        <div className='w-full my-2'>
                            <Image src="/images/impact1.png" width={500} height={500} alt="impact image" />
                        </div>
                    </div>
                </div> */}
            
            </div>
            
        </div>
        <div className='md:w-[90%] w-100 mx-auto flex-col border-b-2 border-gray-300 font-poppins my-4'>
            <div className='flex justify-between items-center'>
                <h2 className="text-4xl font-bold uppercase tracking-wide">Our Work</h2>
                <h2><Link href="/services" className="text-green-500 font-semibold underline mt-8 underline-offset-4">Explore</Link></h2>
            </div>
            <p className='text-lg mt-4 text-slate-400 leading-8 pb-4'>
                At our company, we pride ourselves on delivering a level of service that consistently exceeds our customers expectations, 
                ensuring that every interaction is a positive and memorable experience.
            </p>
        </div>

        <div className='flex-col w-100 md:w-[90%] mx-auto font-poppins my-4 mb-16'>
            <p className='text-slate-400'><span className='text-[#111C55] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='grid grid-cols-2 items-center'>
                <p className='text-slate-400'><span className='text-[#111C55] font-semibold '>Eleifend quam adipiscing vitae proin sagittis nisl rhoncus </span> mattis rhoncus. Aliquet nec ullamcorper sit amet. Fames ac turpis egestas integer eget aliquet. Quam pellentesque nec nam aliquam. Tincidunt ornare massa eget egestas purus viverra accumsan in. Scelerisque purus semper eget duis at tellus at urna. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Orci phasellus egestas tellus rutrum tellus pellentesque. Eget est lorem ipsum dolor sit. Et egestas quis ipsum suspendisse ultrices. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper.</p>
                <Image src="/images/impactWeighScale.png" className='place-items-center mx-auto' alt="weighing scale" width={500} height={500} />
            </div>
            <p className='text-slate-400 my-2'><span className='text-[#111C55] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <Footer />
    </div>
  )
}

export default impact