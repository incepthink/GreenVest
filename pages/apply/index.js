import Navbar from '@/components/Navbar/Navbar'
import { StoreContext } from '@/utils/Store'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Modal from "react-modal";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";

const customStyles = {
    content: {
        width: "90%",
        maxWidth: "500px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        borderRadius: "1rem",
        backgroundImage: "#ffffff",
    },
    overlay: {
        background: "#00000083",
        zIndex: 1000,
    },
};


const Apply = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [companyName, setCompanyName ] = useState('');
    const [gstNo, setGstNo] = useState('');
    const [quantity,setQuantity] = useState('');
    const [walletAddress,setWalletAddress] = useState('');
    const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);

    const {state,dispatch} = useContext(StoreContext);

    useEffect(()=>{
        console.log("User", state.user);
        if(!state.user) {
            router.push('/signin');
        }
        else {
            setEmail(state.user.email)
            setWalletAddress(state.user.magic_wallet)
        }
    },[state.user,router])

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(name === '' || email === '' || phoneNo === '' || address === '' || walletAddress === ''
        || companyName === '' || quantity === '') {
            toast.error("Please fill all the details")
            return;
        }
        if(phoneNo.length !== 10) {
            toast.error("Incorrect phone number !!");
            return;
        }

        if(gstNo.length !== 15 && gstNo.length !== 0) {
            toast.error("Incorrect GST number");
            return;
        }
        if(quantity <= 0) {
            toast.error("Quantity should be greated than 0")
            return;
        }
        let form = {
            name,
            email,
            phoneNo,
            address,
            walletAddress,
            companyName,
            gstNo,
            quantity
        }
        setIsLoadingModalOpen(true);
        const rawResponse = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        console.log(await rawResponse.json());
        setIsLoadingModalOpen(false);
        toast.success("Submitted Successfully!!");

    }

    return (
        <>
            <Navbar />
            <Modal
                isOpen={isLoadingModalOpen}
                onRequestClose={isLoadingModalOpen}
                style={customStyles}
                contentLabel="Loading Modal"
            >
                <div className="w-full flex flex-col items-center">
                            <div>
                                <PropagateLoader size={20} color={"#04A6E7"} />
                            </div>
                            <div className="mt-8 font-semibold">Submiting your info...</div>
                    
                </div>
            </Modal>
            <div className="absolute w-full h-screen md:bg-home-background bg-home-background-2 bg-center  flex flex-row items-stretch bg-cover   relative overflow-hidden ">
                <Head>
                    <title>Place Order</title>
                </Head>
               {/* nft page content */}
                <div className=' md:min-w-[500px] md:mx-4 md:my-5 m-0 md:w-[35%] w-[100vw] flex md:bg-[#04A6E7]  rounded-md md:rounded-md items-center  overflow-hidden '>
                        
                        {/* nft page content with scroll */}
                        <div className='w-full p-8 flex flex-col h-full overflow-x-hidden overflow-y-auto scroll-smooth hover:scroll-auto custom-scrollbar'>

                            {/* nft page content top */}
                            <div>
                                
                                <h4 className='text-2xl text-center font-bold text-white'>Fill your details below</h4>
                                
                                {/* information content */}
                                <form onSubmit={handleSubmit} >
                                    <div className='w-[90%] mx-auto flex flex-col font-poppins my-4'>
                                        <span className='text-md text-white font-regular my-2'>Enter Your Username *</span>
                                        <input
                                            className='bg-[#68CAF1] p-2 placeholder:text-white text-md text-white font-regular rounded-md border-[#E3E3E3] border-solid border-[2px] flex flex-col items-start outline-none'
                                            type="text"
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }} 
                                            placeholder='Enter your username' 
                                            required
                                        />
                                    </div>


                                    

                                    <div className='w-[90%] mx-auto flex flex-col font-poppins my-4'>
                                        <span className='text-md text-white font-regular my-2'>Enter Your Phone Number *</span>
                                        <input
                                            className='bg-[#68CAF1] p-2 text-md placeholder:text-white text-white font-regular rounded-md border-[#E3E3E3] border-solid border-[2px] flex flex-col items-start outline-none'
                                            type="text"
                                            value={phoneNo}
                                            onChange={(e) => {
                                                setPhoneNo(e.target.value);
                                            }} 
                                            placeholder='Enter your phone no here'
                                            required 
                                        />
                                    </div>
                                    
                                    <div className='w-[90%] mx-auto flex flex-col font-poppins my-4'>
                                        <span className='text-md text-white font-regular my-2'>Enter Your Address *</span>
                                        <input
                                            className='bg-[#68CAF1] p-2 text-md placeholder:text-white text-white font-regular rounded-md border-[#E3E3E3] border-solid border-[2px] flex flex-col items-start outline-none'
                                            type="text"
                                            value={address}
                                            onChange={(e) => {
                                                setAddress(e.target.value);
                                            }} 
                                            placeholder='Enter your address here'
                                            required 
                                        />
                                    </div>

                                        
                                    
                                    <div className='w-[90%] mx-auto flex flex-col font-poppins my-4'>
                                        <span className='text-md text-white font-regular my-2'>Enter Your Company Name *</span>
                                        <input
                                            className='bg-[#68CAF1] p-2 placeholder:text-white text-md text-white font-regular rounded-md border-[#E3E3E3] border-solid border-[2px] flex flex-col items-start outline-none'
                                            type="text"
                                            value={companyName}
                                            onChange={(e) => {
                                                setCompanyName(e.target.value);
                                            }}  
                                            placeholder='Enter your company name here'
                                            required
                                        />
                                    </div>

                                    <div className='w-[90%] mx-auto flex flex-col font-poppins my-4'>
                                        <span className='text-md text-white font-regular my-2'>Enter Your GST Number </span>
                                        <input
                                            className='bg-[#68CAF1] p-2 text-md placeholder:text-white text-white font-regular rounded-md border-[#E3E3E3] border-solid border-[2px] flex flex-col items-start outline-none'
                                            type="number"
                                            value={gstNo}
                                            onChange={(e) => {
                                                setGstNo(e.target.value);
                                            }}  
                                            placeholder='write your company&apos;s GST number'
                                        />
                                    </div>

                                    <div className='w-[90%] mx-auto flex flex-col font-poppins my-4'>
                                        <span className='text-md text-white font-regular my-2'>Enter Quantity *</span>
                                        <input
                                            className='bg-[#68CAF1] p-2 text-md placeholder:text-white text-white font-regular rounded-md border-[#E3E3E3] border-solid border-[2px] flex flex-col items-start outline-none'
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => {
                                                setQuantity(e.target.value);
                                            }}  
                                            placeholder='Enter Quantity of NFT&apos;s you wish to claim'
                                            required
                                        />
                                    </div>

                                    <div className="w-[90%] mx-auto flex justify-center items-center">
                                        <button type='submit' className='w-full self-center bg-[#0e7490] px-2 py-4 rounded-md text-centers border-none outline-none cursor-pointer bg-white text-[#04A6E7] font-semibold mt-3.5 mb-5 transition delay-500 ease hover:-translate-y-2 active:translate-y-4'>
                                            Submit
                                        </button>
                                    </div>
                                </form>

                                
                                    {/* credits corner */}
                                <Link href='https://www.hashcase.co'>
                                    <div className='md:w-[60%] w-[80%] mx-auto self-center bg-[#0e7490] p-2 rounded-full text-white border-2 border-[#3e4eaa98] border-solid flex justify-center items-center cursor-pointer'>
                                        Powered by {" "} 
                                        <img className='h-5 ml-2 text-white' src='/images/hashcaselogo.png' alt='hashcase logo' />
                                    </div>
                                </Link>

                            </div>
                
                        </div>


                    </div>

            </div>
        </>
    )
}

export default Apply