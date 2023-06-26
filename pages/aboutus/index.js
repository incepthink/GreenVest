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
          <h2 className="text-center text-4xl font-bold my-6 font-poppins"> Why Choose Us ?</h2>
          <div className="md:w-[90%] w-[95%]  flex flex-col md:flex-row mx-auto justify-between items-center my-4">
            <Image src="/images/flowChart3.png" alt="vision 1" className="shadow-md shadow-[#04A6E7]" width={600} height={600} style={{"objectFit":"contain", }} />
            <Image src="/images/Website.jpg" alt="vision 1" className="shadow-md shadow-[#04A6E7]" width={600} height={600} style={{"objectFit":"contain", }} />
          </div>
          <div className="max-w-screen md:h-[68vh] h-[50vh] bg-home-background-1 bg-top bg-cover" />
          <MeetOurTeam />
          <Footer />
      </div>
    )
}
