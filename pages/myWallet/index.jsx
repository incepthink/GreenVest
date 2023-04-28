import Navbar from "@/components/Navbar/Navbar";
import { env } from "@/next.config";
import { StoreContext } from "@/utils/Store";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const MyWallet = () => {
    const token = env.HASHCASE_API_KEY;
    const { state, dispatch } = useContext(StoreContext);
    const [nftList, setNftList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchNFTs();
    }, []);

    const fetchNFTs = async () => {
        let wallet_address;

        if (state?.user?.magic_wallet) {
            wallet_address = state.user.magic_wallet;
        } else if (state?.user?.wallet_address) {
            wallet_address = state.user.wallet_address;
        } else {
            return;
        }
        setIsLoading(true);

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            axios.defaults.headers.common = {
                "x-api-key": token,
            };
            const res = await axios.get(
                `https://api.hashcase.co/dev/getMerchListByWalletAddress?wallet_address=${wallet_address}&collection_id=2`,
                config
            );
            console.log(res.data);
            setNftList(res.data);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setNftList([]);
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="max-w-screen max-h-screen flex flex-col overflow-hidden">
                <div className="md:w-[85%] w-[94%] mx-auto flex-col border-b-2 border-gray-300 mt-8 pb-4">
                    <div className="flex justify-between items-center">
                        <h2 className="md:text-3xl text-lg font-bold uppercase tracking-wide">
                            MY WALLET
                        </h2>
                    </div>
                </div>
                {isLoading ? (
                    <div className="w-full flex justify-center mt-16">
                        <BeatLoader size={30} color="#04A6E7" />
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 md:w-[85%] w-[94%] mx-auto pt-8">
                        {nftList.length == 0 ? (
                            <span>Wallet is Empty!</span>
                        ) : (
                            nftList.map((nftInfo, i) => {
                                return (
                                    <div
                                        key={i}
                                        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1780d6] dark:border-gray-700"
                                    >
                                        <a href="#">
                                            <img
                                                class="rounded-t-lg object-cover w-full"
                                                src={
                                                    "https://i.seadn.io/gae/Naa32-rxoGSFWlTgXjUz2o8G4XRmnj0thaC_Yej28PJrNdOGTkRAzz-tza5XUTKnliJ_om89QDuhHtMjNvONpRipbFt7NjQsFBlC0Ds?auto=format&w=1000"
                                                }
                                                alt=""
                                            />
                                        </a>
                                        <div class="p-5">
                                            <a href="#">
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    Carbon Credits NFT
                                                </h5>
                                            </a>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-100">
                                                A cool Carbon Credits NFT
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default MyWallet;