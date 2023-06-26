import Ecosystem from "@/components/Ecosystem/Ecosystem";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MeetOurTeam from "@/components/MeetOurTeam/MeetOurTeam";
import Mission from "@/components/Mission/Mission";
import Navbar from "@/components/Navbar/Navbar";
import RecentProjects from "@/components/RecentProjects/RecentProjects";
import Services from "@/components/Services/Services";
import Visions from "@/components/Visions/Visions";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
      <div>
          <Head>
            <title>About Us</title>
          </Head>
          <Navbar />
          <Header />
          <Visions />
          <Mission />
          <Services />
          {/* <Ecosystem /> */}
          {/* <h1 className="text-3xl font-bold text-center underline">
              Hello World!!

          </h1> */}
          <h2 className="text-center text-2xl font-bold mt-6 font-poppins"> Glimpse of our model </h2>
          <div className="md:w-[90%] w-[95%]  flex flex-col md:flex-row mx-auto justify-center items-center cursor-pointer hover:scale-105 hover:duration-500">
            <Image src="/images/flowChart3.png" alt="vision 1" className="shadow-md my-4 shadow-[#04A6E7]" width={850} height={850}  />
            
          </div>

          <h2 className="text-center text-2xl font-bold mt-4 my-2  font-poppins"> How REC&apos;s work ?</h2>
          <div className="md:w-[90%] w-[95%] mb-4 flex flex-col md:flex-row mx-auto justify-center items-center cursor-pointer hover:scale-105 hover:duration-500 hover:rounded-xl">
            <Image src="/images/Website.jpg" alt="vision 1" className="shadow-md my-4 shadow-[#04A6E7]" width={850} height={850}  />
            
          </div>
          <div className="my-4 hidden md:flex max-w-screen md:h-[60vh] h-[50vh] bg-home-background-1 bg-cover bg-center" />
          <MeetOurTeam />
          <Footer />
      </div>
    )
}
