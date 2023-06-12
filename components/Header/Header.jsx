import { StoreContext } from "@/utils/Store";
import { PlayCircleOutline } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Header = () => {
    const { state, dispatch } = useContext(StoreContext);

    return (
        <div className="max-w-screen md:h-[50%] h-[90vh] bg-[#04a6e71a] md:rounded-bl-[163px] rounded-bl-[80px]">
            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="md:w-[55%] w-[100%] md:px-20 px-8 md:py-24 py-8 flex-col font-bebas uppercase">
                    <h1 className="md:text-7xl text-5xl flex items-center">
                        Tokere{" "}
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
                    <h1 className="md:text-7xl text-[40px] items-center">
                        Easing the path to <span className="text-[#04A6E7]">Net 0</span>
                        
                    </h1>
                    <h1 className="text-base md:text-xl md:my-4 items-center normal-case text-gray-400 font-poppins">
                        Tokere is an innovative platform providing smart and
                        fractional ESG solutions. You can produce, finance and
                        consume fractionalized carbon credit NFTs using the
                        ecosystem.
                    </h1>
                    <div className="flex my-12 items-center font-poppins normal-case hidden md:flex">
                        {state.user ? (
                            <Link
                                href="/"
                                className="text-white  bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 font-poppins"
                                style={{ fontSize: "1.25rem" }}
                            >
                                Claim Carbon Credits
                            </Link>
                        ) : (
                            <Link
                                href="/signin"
                                className="text-white  bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 font-poppins"
                                style={{ fontSize: "1.25rem" }}
                            >
                                Sign In
                            </Link>
                        )}

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
                        src="/images/Header/headerImg.png"
                        alt="Globe"
                        width={500}
                        height={500}
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <div className="flex items-center font-poppins normal-case md:hidden">
                    <Link
                        href="/signup"
                        className="text-white  bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 font-poppins"
                        style={{ fontSize: "1.25rem" }}
                    >
                        Sign Up
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
