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
                    &quot;At Tok-e-re&apos;s, we understand the importance of protecting and preserving our planet for future generations, 
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
                    <h2 className='text-xl font-semibold my-4'>Enterprise </h2>
                    <p className='text-base text-[#6B6B6B] my-2'>
                        All enterprises be it large, medium and small, committed to Net 0 for a sustainable business, can start with offsetting their power consumptions with our curated and tokenised RECs.
                        <br/>
                        Businesses based on sustainability goals have proven to optimize costs and enable better management of limited resources. Earn points towards LEED certification and reduce the environmental impact of buildings.
                    </p>
                    <button className='px-6 py-2 text-white my-2 rounded-lg bg-[#04A6E7] w-[20%]' onClick={() => router.push('/services/enterprise')}>Check</button>
                </div>
            </div>


            <div className='flex flex-col w-[45%] mx-auto my-4'>
                <div className='w-100 h-100'>
                    <Image src="/images/service1.png" alt="service 1" width={600} height={450} />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-semibold my-4'>Developers</h2>
                    <p className='text-base text-[#6B6B6B] my-2'>Irrespective of the scale of the asset, every building has an immense opportunity to upgrade its value for higher returns. You can start by offsetting your power consumption with our curated and tokenised RECs.
                    <br/>
                    Tok-e-re allows you to view, track, consume and retire your RECs in real time. Enterprises can export reports for REC purchases, consumption and retirement to prove their initiatives towards Net 0

                    </p>
                    <button className='px-6 py-2 text-white my-2 rounded-lg bg-[#04A6E7] w-[20%]' onClick={() => router.push('/services/developer')}>Check</button>
                </div>
            </div>

            <div className='flex flex-col w-[95%] mx-auto my-8'>
                <div className='w-100 h-100'>
                    <Image src="/images/service2.png" alt="service 1" width={1980} height={990} />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-semibold my-4'>Individuals</h2>
                    <p className='text-base text-[#6B6B6B] my-2'>Discerning, globally conscious and trendsetting individuals also how have an opportunity to contribute to global Net 0. Connect with us to offset your power consumption with our curated and tokenised RECs. Contribute to the UN led sustainable development goals (SDGs).
                    <br/>
                    Document consumption of renewables and reliably claim GHG emission reductions, Trace the origin of electricity and chosen technology, such as solar, wind, hydro, geothermal or bioenergy Align with GHG Protocol Scope 2 guidance, which are voluntary corporate environmental standards.
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