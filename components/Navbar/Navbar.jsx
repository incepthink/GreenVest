import { StoreContext } from "@/utils/Store";
import { logoutHandler } from "@/utils/user";
import { Button, Menu, MenuItem } from "@mui/material";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

function MobileNav({ open, setOpen, state, dispatch }) {
    const router = useRouter();
    return (
        <div
            className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
                open ? "-translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
        >
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
                {" "}
                {/*logo container*/}
                <Link
                    className="flex items-center text-xl font-semibold"
                    href="/"
                >
                    <Image
                        width={55}
                        height={41}
                        src="/images/Logo.png"
                        alt="website logo"
                        style={{ objectFit: "contain" }}
                    />
                    <span className="text-[#00337C]">Green</span>
                    <span className="text-[#88E828]">vest</span>
                </Link>
            </div>
            <div className="flex flex-col ml-4 text-[#00337C]  text-2xl font-nunito">
                <Link
                    className={`my-4 ${
                        router.pathname == "/" &&
                        "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                    }`}
                    href="/"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                >
                    Home
                </Link>
                <Link
                    className={`my-4 ${
                        router.pathname == "/services" &&
                        "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                    } `}
                    href="/services"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                >
                    Services
                </Link>
                <Link
                    className={`my-4 ${
                        router.pathname == "/impact" &&
                        "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                    } `}
                    href="/impact"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                >
                    Our Impact
                </Link>
                <Link
                    className={`my-4 ${
                        router.pathname == "/careers" &&
                        "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                    } `}
                    href="/careers"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                >
                    Careers
                </Link>
                <Link
                    className={`my-4 ${
                        router.pathname == "/contact" &&
                        "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                    } `}
                    href="/contact"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                >
                    Contact Us
                </Link>
                <Link
                    className={`my-4 ${
                        router.pathname == "/contact" &&
                        "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                    } `}
                    href="/marketplace"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                >
                    NFTs
                </Link>
                {state.user ? (
                    <>
                        <Link
                            className={`my-4 ${
                                router.pathname == "/contact" &&
                                "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                            } `}
                            href="/myWallet"
                            onClick={() =>
                                setTimeout(() => {
                                    setOpen(!open);
                                }, 100)
                            }
                        >
                            My Wallet
                        </Link>
                        <button
                            onClick={() => {
                                logoutHandler(dispatch);
                                setTimeout(() => {
                                    setOpen(!open);
                                }, 100);
                            }}
                            className="my-4 bg-[#04A6E7] text-white rounded-3xl px-4 py-2"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link
                        href="/signin"
                    >
                        <button className="my-4 bg-[#04A6E7] text-white rounded-3xl px-4 py-2">
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

const Navbar = () => {
    const { state, dispatch } = useContext(StoreContext);
    const [userText, setUserText] = useState("Connect Wallet");
    const [open, setOpen] = useState(false);
    const router = useRouter();

    //check if user is empty and logout if empty
    try {
        if (state.user && Object.keys(state.user).length == 0) {
            dispatch({ type: "UNSET_USER" });
            Cookies.remove("user");
            dispatch({ type: "UNSET_JWT" });
            Cookies.remove("jwt");
        }
    } catch (error) {
        console.log(error);
    }

    useEffect(() => {
        console.log(state.user);
        state?.user?.wallet_address
            ? setUserText(
                  state.user.wallet_address.slice(0, 4) +
                      "..." +
                      state.user.wallet_address.slice(-3)
              )
            : state?.user?.email
            ? setUserText(state.user.email)
            : setUserText("CONNECTED");
    }, [state.user]);

    const [anchorEl, setAnchorEl] = useState(null);
    const openDropdown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="flex filter z-50 static drop-shadow-md bg-white font-oswald px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} state={state} dispatch={dispatch} />
            <div className="w-3/12 flex items-center">
                <Link
                    className="flex items-center text-2xl font-semibold"
                    href="/"
                >
                    <Image
                        width={75}
                        height={60}
                        src="/images/Logo.png"
                        alt="website logo"
                        style={{ objectFit: "contain" }}
                    />
                    <span className="text-[#00337C]">Green</span>
                    <span className="text-[#88E828]">vest</span>
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">
                <div
                    className={`z-50 flex relative w-8 ${
                        open ? "h-8" : "h-6"
                    }  flex-col justify-between items-center md:hidden`}
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    {/* hamburger button */}
                    <span
                        className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                            open ? "rotate-45 translate-y-3.5" : ""
                        }`}
                    />
                    <span
                        className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                            open ? "hidden" : "w-full"
                        }`}
                    />
                    <span
                        className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                            open ? "-rotate-45 -translate-y-3.5" : ""
                        }`}
                    />
                </div>

                <div className="hidden md:flex text-[#00337C] text-lg font-nunito">
                    <Link
                        href="/"
                        className={`mx-4 hover:scale-105 duration-150 ease-in delay-150 ${
                            router.pathname == "/" &&
                            "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                        } `}
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        className={`mx-4 hover:scale-105 duration-150 ease-in delay-150 ${
                            (router.pathname == "/services" ||
                                router.pathname == "/services/enterprise") &&
                            "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                        } `}
                    >
                        Services
                    </Link>
                    <Link
                        href="/impact"
                        className={`mx-4 hover:scale-105 duration-150 ease-in delay-150 ${
                            router.pathname == "/impact" &&
                            "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                        } `}
                    >
                        Our Impact
                    </Link>
                    <Link
                        href="/careers"
                        className={`mx-4 hover:scale-105 duration-150 ease-in delay-150 ${
                            router.pathname == "/careers" &&
                            "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                        } `}
                    >
                        Careers
                    </Link>
                    <Link
                        href="/contact"
                        className={`mx-4 hover:scale-105 duration-150 ease-in delay-150 ${
                            router.pathname == "/contact" &&
                            "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                        } `}
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/marketplace"
                        className={`mx-4 hover:scale-105 duration-150 ease-in delay-150 ${
                            router.pathname == "/contact" &&
                            "underline underline-offset-[6px] decoration-[#00337C] decoration-2"
                        } `}
                    >
                        NFTs
                    </Link>
                </div>
                {state.user ? (
                    <div className="hidden md:flex text-lg font-nunito items-center">
                        {/* <button 
                            onClick={() => {logoutHandler(dispatch)}}
                            className="mx-4 text-white bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150"
                            >
                                Log out
                        </button> */}
                        <button
                            className="mx-4 text-white bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150"
                            id="basic-button"
                            aria-controls={
                                openDropdown ? "basic-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={openDropdown ? "true" : undefined}
                            onClick={handleClick}
                        >
                            My Account
                        </button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={openDropdown}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                            className="mt-2"
                        >
                            <Link href="/myWallet">
                                <MenuItem onClick={handleClose}>
                                    My Wallet
                                </MenuItem>
                            </Link>

                            <MenuItem
                                onClick={() => {
                                    logoutHandler(dispatch);
                                }}
                            >
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <div className="hidden md:flex text-lg font-nunito items-center">
                        <Link
                            href="/signin"
                            className="mx-4 text-white bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150"
                        >
                            Sign In
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
