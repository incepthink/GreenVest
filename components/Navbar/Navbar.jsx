import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"


function MobileNav({open, setOpen}) {
    const router = useRouter();
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
           
                <Link className="flex items-center text-xl font-semibold" href="/">
                    <Image width={55} height={41} src = '/images/Logo.png' alt='website logo' style={{"objectFit":"contain"}} />
                    <span className="text-[#00337C]">Green</span><span className="text-[#88E828]">vest</span>
                </Link>

            </div>
            <div className="flex flex-col ml-4 text-[#00337C]  text-2xl font-nunito">
                
                <Link 
                    className={`my-4 ${router.pathname=='/' && 'underline underline-offset-[6px] decoration-[#00337C] decoration-2'}`} 
                    href="/" 
                    onClick={() => setTimeout(() => {setOpen(!open)}, 100)}
                >
                    Home
                </Link>
                <Link 
                    className={`my-4 ${router.pathname=='/services' && 'underline underline-offset-[6px] decoration-[#00337C] decoration-2'} `} 
                    href="/services" 
                    onClick={() => setTimeout(() => {setOpen(!open)}, 100)}
                >
                    Services
                </Link>
                <Link 
                    className={`my-4 ${router.pathname=='/impact' && 'underline underline-offset-[6px] decoration-[#00337C] decoration-2'} `} 
                    href="/impact" 
                    onClick={() => setTimeout(() => {setOpen(!open)}, 100)}
                >
                    Our Impact
                </Link>
                <Link 
                    className={`my-4 ${router.pathname=='/careers' && 'underline underline-offset-[6px] decoration-[#00337C] decoration-2'} `} 
                    href="/careers" 
                    onClick={() => setTimeout(() => {setOpen(!open)}, 100)}
                >
                    Careers
                </Link>
                <Link 
                    className={`my-4 ${router.pathname=='/contact' && 'underline underline-offset-[6px] decoration-[#00337C] decoration-2'} `} 
                    href="/contact" 
                    onClick={() => setTimeout(() => {setOpen(!open)}, 100)}
                >
                    Contact Us                    
                </Link>

                <Link 
                    href='/signin'
                    className="my-4 text-[#04A6E7] hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 underline underline-offset-[6px] decoration-[#04A6E7] decoration-2"
                >
                    Sign In
                </Link>
                <Link 
                    href='/signup'
                >
                    <button
                        className="my-4 bg-[#04A6E7] text-white rounded-3xl px-4 py-2"
                    >
                        Sign Up
                    </button>
                </Link>
            </div>  
        </div>
    )
}

const Navbar = () => {

    const [open,setOpen] = useState(false);
    const router = useRouter();
    
    return (
        <nav className="flex filter z-50 static drop-shadow-md bg-white font-oswald px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <Link className="flex items-center text-2xl font-semibold" href="/">
                    <Image width={75} height={60} src = '/images/Logo.png' alt='website logo' style={{"objectFit":"contain"}}  />
                    <span className="text-[#00337C]">Green</span><span className="text-[#88E828]">vest</span>
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className={`z-50 flex relative w-8 ${open ? 'h-8' : 'h-6'}  flex-col justify-between items-center md:hidden`} onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "hidden" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex text-[#00337C] text-lg font-nunito">
                    <Link 
                        href="/" 
                        className={`mx-4 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 ${router.pathname=='/' && 'underline underline-offset-[6px] decoration-[#00337C] decoration-2'} `}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/services" 
                        className={`mx-4 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 ${(router.pathname=='/services' || router.pathname=='/services/enterprise') && 'underline underline-offset-[6px] decoration-[#00337C] decoration-2'} `}
                    >
                        Services
                    </Link>
                    <Link 
                        href="/impact" 
                        className={`mx-4 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 ${router.pathname=='/impact' && 'underline underline-offset-[6px] decoration-[#00337C] decoration-2'} `}
                    >
                        Our Impact
                    </Link>
                    <Link 
                        href="/careers" 
                        className={`mx-4 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 ${router.pathname=='/careers' && 'underline underline-offset-[6px] decoration-[#00337C] decoration-2'} `}
                    >
                        Careers
                    </Link>
                    <Link 
                        href="/contact" 
                        className={`mx-4 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 ${router.pathname=='/contact' && 'underline underline-offset-[6px] decoration-[#00337C] decoration-2'} `}
                    >
                        Contact Us
                    </Link>
                </div>
                <div className="hidden md:flex text-lg font-nunito items-center">
                    <Link 
                        href='/signin'
                        className="mx-4 text-[#04A6E7]  hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150 underline underline-offset-[4px] decoration-[#04A6E7] decoration-2"
                    >
                        Sign In
                    </Link>
                    <Link 
                        href="/signup"
                    >
                        <button 
                        className="mx-4 text-white bg-[#04A6E7] rounded-[1.5rem] px-4 py-2 hover:scale-105 hover:duration-150 hover:ease-in hover:delay-150"
                        >
                            Sign Up
                        </button>
                    </Link>
                </div>  
            </div>
        </nav>
    )
}

export default Navbar