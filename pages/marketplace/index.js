import Navbar from "@/components/Navbar/Navbar";
import { env } from "@/next.config";
import { StoreContext } from "@/utils/Store";
import axios from "axios";
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
            const res = await axios.get(`https://api.hashcase.co/dev/checkBalanceOfNFTInWallet?wallet_address=${wallet_address}&token_id=1&collection_id=2`, config);
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
            <Navbar />
            <div className="max-w-screen flex flex-col md:flex-row overflow-hidden">
                <div className="flex-1 p-8 flex">
                    <img
                        src="https://i.seadn.io/gae/Naa32-rxoGSFWlTgXjUz2o8G4XRmnj0thaC_Yej28PJrNdOGTkRAzz-tza5XUTKnliJ_om89QDuhHtMjNvONpRipbFt7NjQsFBlC0Ds?auto=format&w=1000"
                        alt="Sample NFT"
                        style={{width:"100%"}}
                    />
                </div>
                <div className="flex-1 flex justify-center items-center p-8">
                    <div className="flex flex-col items-start">
                        <h1 className="font-bebas text-4xl uppercase">
                            Carbon Credits NFT
                        </h1>
                        <p className="text-[#667085]">
                            Graphic Leaf is a fine art collection of hand-drawn felines. is entirely unique and algorithmically generated by combining 33 unrepeatable traits with varying rarity across categories. As the first collection of the Greenvest  ecosystem, Graphic Leafwill provide anticipated access to future NFT collection.
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
                </div>
                
            </div>
        </>
    );
};

export default Marketplace;
