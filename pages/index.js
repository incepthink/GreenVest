import Navbar from "@/components/Navbar/Navbar";
import { env } from "@/next.config";
import { StoreContext } from "@/utils/Store";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
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

const Marketplace = () => {
    const token = env.HASHCASE_API_KEY;
    const { state, dispatch } = useContext(StoreContext);
    const [transactionHash, setTransactionHash] = useState("");
    const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);
    const [accountAddress, setAccountAddress] = useState("");
    const [nftBalance, setNftBalance] = useState(-1);
    
    useEffect(() => {
        console.log(state.user);
        checkNFTBalanceForUser();
    }, [state.user]);

    const checkNFTBalanceForUser = async () => {
        let wallet_address;
        
        if(state?.user?.magic_wallet){
            wallet_address = state.user.magic_wallet;
            setAccountAddress(state.user.magic_wallet);
        }else if(state?.user?.wallet_address){
            wallet_address = state.user.wallet_address;
            setAccountAddress(state.user.wallet_address);
        }else{
            return;
        }

        try{
            const config = {
                headers: {
                  "Content-Type": "application/json",
                },
            };
        
            axios.defaults.headers.common = {
                "x-api-key": token,
            };
            const res = await axios.get(`https://api.hashcase.co/dev/checkBalanceOfNFTInWallet?wallet_address=${wallet_address}&token_id=6&collection_id=2`, config);
            console.log(res.data);
            setNftBalance(res.data.balance);
        }catch(e){
            console.log(e);
            setNftBalance(0);
        }
        
    }

    const openLoadingModal = () => {
        setIsLoadingModalOpen(true);
    };

    const closeLoadingModal = () => {
        setIsLoadingModalOpen(false);
        setTransactionHash("");
    };

    const mintNFTToWallet = async () => {
        let wallet_address;
        
        if(state?.user?.magic_wallet){
            wallet_address = state.user.magic_wallet;
            setAccountAddress(state.user.magic_wallet);
        }else if(state?.user?.wallet_address){
            wallet_address = state.user.wallet_address;
            setAccountAddress(state.user.wallet_address);
        }else{
            return;
        }
        openLoadingModal();

        try{
            const bodyParameters = {
                wallet_address: `${wallet_address}`,
                collection_id: 2,
                token_id: 6
            };
        
            const config = {
                headers: {
                  "Content-Type": "application/json",
                },
            };
        
            axios.defaults.headers.common = {
                "x-api-key": token,
            };
            const res = await axios.post("https://api.hashcase.co/dev/mintNFTtoAccount", bodyParameters, config);
            console.log(res.data);
            if(res.data.transactionHash != ""){
                setTransactionHash(res.data.transactionHash);
                checkNFTBalanceForUser();
            }else{
                toast.error("Error occurred, try later!");
                closeLoadingModal();
            }
        }catch(err){
            console.log(err);
            toast.error("Error occurred, try later!");
            closeLoadingModal();
        }
    }

    return (
        <>
            <Navbar />
            <Modal
                isOpen={isLoadingModalOpen}
                onRequestClose={closeLoadingModal}
                style={customStyles}
                contentLabel="Loading Modal"
            >
                <div className="w-full flex flex-col items-center">
                    {transactionHash == "" ? (
                        <>
                            <div>
                                <PropagateLoader size={20} color={"#04A6E7"} />
                            </div>
                            <div className="mt-8 font-semibold">Claiming your free carbon credits...</div>
                        </>
                    ) : (
                        <>
                            <span className="font-bold">Carbon Credits Claimed!</span>
                            <div>
                                <Link className="mr-4" href={`https://polygonscan.com/tx/${transactionHash}`}>
                                    <button
                                        className="text-[#04A6E7] bg-[#e8f6ff] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 font-poppins mt-8"
                                        style={{fontSize:"1.25rem"}}
                                    >
                                        Verify
                                    </button>
                                </Link>
                                <Link href={`/myWallet`}>
                                    <button
                                        className="text-white  bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 font-poppins mt-8"
                                        style={{fontSize:"1.25rem"}}
                                    >
                                        View NFT
                                    </button>
                                </Link>

                            </div>
                        </>
                    )}
                </div>
            </Modal>
            <div className="w-full h-screen bg-home-background bg-center  flex flex-row items-stretch bg-cover relative overflow-hidden ">
                
                <Head>
                    <title>Tokere&apos;s NFT</title>
                </Head>

                {/* <div className="flex-1 flex justify-center items-center p-8">
                    <div className="flex flex-col items-start">
                        <h1 className="font-bebas text-4xl uppercase">
                            Greenvest CC NFT
                        </h1>
                        <p className="text-[#667085]">
                        This is a FREE CLAIM for the early supporters of Greenvest as we make the world greener.Each NFT represents 1kg of CO2 that has been sequestered from the environment. Together, the 1,000 NFTs make up a single carbon credit.For more details on the Carbon Credit, view the certificate at: <a href="https://drive.google.com/file/d/1RS0usksdEJSgWYJnTP3Ax8TwuyinB5wy/view" target="_blank">https://drive.google.com/file/d/1RS0usksdEJSgWYJnTP3Ax8TwuyinB5wy/view</a>
                        </p>
                        {
                            nftBalance == -1 ? <></> : 
                            nftBalance > 0 ? 
                            <span className="mt-2 text-[#04A6E7] font-bold">Claimed! You have {nftBalance} Carbon Credit NFTs</span> : <button
                                onClick={mintNFTToWallet}
                                className="text-white  bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 duration-150 ease-in delay-150 font-poppins mt-8"
                                style={{fontSize:"1.25rem"}}
                            >
                                Claim NFT
                            </button>
                        }
                        
                    </div>
                </div> */}


                {/* nft page content */}
                <div className=' md:relative md:min-w-[500px] md:m-16 m-0 md:w-[40%] w-[100%] flex bg-[#04A6E7] bg-gradient-to-b from-[#22d3ee] to-[#0891b2] rounded-0 md:rounded-md items-center  overflow-hidden '>
                    
                    {/* nft page content with scroll */}
                    <div className='w-full md:p-8 p-4 flex flex-col   overflow-x-hidden overflow-y-auto scroll-smooth hover:scroll-auto'>

                        {/* nft page content top */}
                        <div>
                            
                            
                            
                            {/* information content */}
                            <div className='w-full flex flex-col md:my-2 my-12 mb-3'>

                                {/* NFT NAME */}
                                <span className='mb-1.5 text-4xl text-white font-bold'>Tokere CC NFT</span>

                            </div>

                            <div className="md:hidden w-full flex flex-col my-2 mb-3">
                                <img src='/images/sample_nft.png' alt="sample nft" style={{width:'90%','margin':'0 auto', borderRadius:'0.75rem'}} />
                            </div>

                            {/* nft description */}
                            <div className='w-full flex flex-col my-2 mb-3'>

                                {/* NFT description */}
                                <span className='mb-1.5 text-xl text-white font-semibold '>This is a FREE CLAIM NFT for the early supporters of Greenvest as we make the world greener.Each NFT represents 1kg of CO2 that has been sequestered from the environment. Together, the 1,000 NFTs make up a single carbon credit.For more details on the Carbon Credit. <br/> View the certificate : <Link className='underline text-white font-bold' href='https://drive.google.com/file/d/1RS0usksdEJSgWYJnTP3Ax8TwuyinB5wy/view'>here</Link> </span>

                            </div>
                            <div className='w-full flex my-2 mx-auto'>
                                {
                                    
                                    nftBalance == -1 ? <></> : 
                                        nftBalance > 0 && <span className="mt-2 text-white font-bold">Claimed! You have {nftBalance} Carbon Credit NFTs</span> 
                                }

                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button onClick={mintNFTToWallet} className='md:w-[70%] w-[80%] self-center bg-[#0e7490] px-2 py-4 rounded-full text-centers border-none outline-none cursor-pointer bg-white text-[#04A6E7] font-semibold mt-3.5 mb-5 transition delay-500 ease hover:-translate-y-2 active:translate-y-4'>
                                    Claim To Wallet
                                </button>
                            </div>
                                {/* credits corner */}
                            <Link href='https://www.hashcase.co'>
                                <div className='md:w-[60%] w-[70%] mx-auto self-center bg-[#0e7490] px-2 py-4 mb-8 rounded-full text-white border-2 border-[#3e4eaa98] border-solid flex justify-center items-center cursor-pointer'>
                                    Powered by {" "} 
                                    <img className='h-5 ml-2 text-white' src='/images/hashcaselogo.png' alt='hashcase logo' />
                                </div>
                            </Link>

                        </div>
            
                    </div>


                </div>
                <div className='md:flex flex-1 hidden relative  justify-center  p-6 items-center'>
        
                    <img src='/images/sample_nft.png' alt='nft img' style={{ width:'82%', borderRadius:'0.75rem'}} />
                </div>
                
            </div>
        </>
    );
};

export default Marketplace;
