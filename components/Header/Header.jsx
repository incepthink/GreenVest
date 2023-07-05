import { StoreContext } from "@/utils/Store";
import { PlayCircleOutline } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Header = () => {
    const { state, dispatch } = useContext(StoreContext);

    return (
        <div className="max-w-screen md:h-[50%] h-[100%] bg-[#04a6e71a] md:rounded-bl-[163px] rounded-bl-[80px]">
            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="md:w-[60%] w-[100%] my-4 md:px-24 px-8 font-bold md:py-16 flex-col font-poppins ">
                    <h1 className="md:text-7xl text-5xl flex text-[#04A6E7] items-center">
                        tok-e-re
                    </h1>
                    <h1 className="md:text-4xl text-2xl  items-center">
                        Switch to <span className="text-green-500">green energy</span> - made Affordable, Simple & Quick 
                    </h1>
                    <h1 className="text-base md:text-xl md:my-4 items-center normal-case text-gray-500 font-poppins">
                    Fractional & Tokenised Renewable Energy Certificates (RECs) Transactions Platform
                    </h1>
                    <div className="flex my-12 items-center font-poppins normal-case hidden md:flex">
                        <Link
                                href="/nfts"
                                className="text-white  bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 font-poppins"
                                style={{ fontSize: "1.25rem" }}
                            >
                                Claim 1  REC NFT
                            </Link>
                        <Link
                            href="/watch-video"
                            className="flex ml-12 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 font-poppins"
                            style={{ fontSize: "1.25rem" }}
                        >
                            <PlayCircleOutline
                                style={{ fontSize: "2rem" }}
                                className="text-[#04A6E7]"
                            />
                            <button className="text-[#04A6E7] flex ml-1 items-center">
                                Watch Video
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-[90%] md:my-0 my-4 md:w-[40%]  justify-center items-center">
                
                    <Image
                        src="/images/Logo2.png"
                        alt="Globe"
                        width={400}
                        height={400}
                        style={{ objectFit: "contain", margin:'0 auto' }}
                    />
                
                </div>

                <div className="flex items-center font-poppins normal-case mb-4 md:hidden">
                    <Link
                        href="/signin"
                        className="text-white  bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 font-poppins"
                        style={{ fontSize: "1.25rem" }}
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/watch-video"
                        className="flex ml-12 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 font-poppins"
                        style={{ fontSize: "1.25rem" }}
                    >
                        <PlayCircleOutline
                            style={{ fontSize: "2rem" }}
                            className="text-[#04A6E7]"
                        />
                        <button className="text-[#04A6E7] flex ml-1 items-center">
                            Watch Video
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
