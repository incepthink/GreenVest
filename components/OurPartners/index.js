import React from 'react'

const index = () => {
  return (
    <div className='max-w-screen flex-col justify-between p-12 my-4  font-poppins'>
        <div className='md:w-[90%] w-100 mx-auto flex-col border-b-2 border-gray-300'>
            
            <div className='flex justify-between items-center'>
                <h2 className="text-4xl font-bold uppercase tracking-wide">Our Partners</h2>
            </div>
            

            

        </div>
        <div className='flex flex-col md:flex-row md:max-w-[90%] w-100 mx-auto justify-evenly items-center my-12 font-poppins'>
                
                <div className='flex flex-col my-4'>
                    <img src="/images/partner4.png" alt="partner 1" style={{width:'75%', objectFit:'contain', margin:'0 auto'}} />
                    <p className='font-semibold my-2 text-center'>A market leading &apos;Climate Change Specialist&apos;.</p>
                </div>

                <div className='flex flex-col my-4'>
                    <img src="/images/partner3.png"  alt="partner 1" style={{width:'50%', objectFit:'contain', margin:'0 auto'}} />
                    <p className='font-semibold my-2 text-center'>A global leader in Hospitality Consulting.</p>
                </div>
                    

                
        </div>
    </div>
  )
}

export default index