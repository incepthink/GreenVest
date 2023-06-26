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
                <div className="md:w-[60%] w-[100%] md:px-24 px-8  md:py-16 flex-col font-bebas uppercase">
                    <h1 className="md:text-7xl text-5xl flex lowercase font-ayuthaya items-center">
                        tok-e-re{" "}
                        <div className="w-100 h-100">
                            <Image
                                src="/images/Header/Co2.png"
                                alt="CO2"
                                width={75}
                                height={75}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </h1>
                    <h1 className="md:text-6xl text-[40px] items-center">
                    Simplifying your <span className="text-[#04A6E7]">Net 0</span> journey
                        
                    </h1>
                    <h1 className="text-base md:text-xl md:my-4 items-center normal-case text-gray-400 font-poppins">
                    Renewable Energy Certificate & Carbon Credit NFTs powered by web3 tech a fraction or a large bundle, we curate right-size solutions for Enterprises, Real Estate & Households accelerating transition to 100% Green Power & compliance to Scope 2 emissions.
                    </h1>
                    <div className="flex my-12 items-center font-poppins normal-case hidden md:flex">
                        <Link
                                href="/"
                                className="text-white  bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 font-poppins"
                                style={{ fontSize: "1.25rem" }}
                            >
                                Claim 1 Free REC NFT
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

                <div className="w-[100%] md:w-[40%]  justify-center items-center">
                    <Image
                        src="/images/HD.png"
                        alt="Globe"
                        width={500}
                        height={500}
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
