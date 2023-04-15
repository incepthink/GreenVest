import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className='max-w-screen md:h-screen font-poppins'>
        <div className='md:w-[85%] w-[94%] mx-auto flex-col border-b-2 border-gray-300 mt-28 pb-4'>
            <div className='flex justify-between items-center'>
                <h2 className="md:text-3xl text-lg font-bold uppercase tracking-wide">Explore Our recent projects</h2>
                <h2><Link href="/projects" className="text-green-500 font-semibold underline mt-8 underline-offset-4">Show All</Link></h2>
            </div>
        </div>
        <div className='md:w-[85%] md:h-1/2  my-8 w-100 mx-auto flex md:flex-row flex-col justify-around'>
            <div className='md:w-[55%] w-[90%] mx-auto my-4 md:h-1/2 flex-col'>
                <Image src="/images/Projects/project1.png" width={1920} height={1080} alt="project1" />
                <div className='text-left my-4'>
                    <h1 className='text-2xl font-bold my-4'>Loream Developer</h1>
                    <p className='font-light text-gray-500 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <div className='md:w-[30%] w-[90%] mx-auto my-4 md:h-1/2 flex-col'>
                <Image src="/images/Projects/project2.png" width={1920} height={1080} alt="project1" />
                <div className='text-left my-4'>
                    <h1 className='text-2xl font-bold my-4 mt-8'>Loream Property</h1>
                    <p className='font-light text-gray-500 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentProjects