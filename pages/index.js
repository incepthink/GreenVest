import Ecosystem from "@/components/Ecosystem/Ecosystem";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MeetOurTeam from "@/components/MeetOurTeam/MeetOurTeam";
import OurPartners from "@/components/OurPartners/index";
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
          {/* <Mission /> */}
          <Services />
          {/* <Ecosystem /> */}
          {/* <h1 className="text-3xl font-bold text-center underline">
              Hello World!!

          </h1> */}
          <h2 className="text-center text-3xl font-bold mt-6 font-poppins"> This is how we work </h2>
          <div className="md:w-[90%] w-[95%] font-poppins flex flex-col md:flex-row mx-auto justify-between items-center ">
            <Image src="/images/workflow1.png" alt="vision 1" className="shadow-md my-4 shadow-[#04A6E7] cursor-pointer hover:scale-105 hover:duration-500" width={800} height={800}  />
            <ul className="md:px-24 px-4 my-4 text-xl ">
              <li className="my-2">
                1. We <span className="text-[#04A6E7]">aggregate</span> all sized requirements to build scale.
              </li >
              <li className="my-2">
                2. We <span className="text-[#04A6E7]">negotiate</span> leveraging the scale.
              </li>
              <li className="my-2">
                3. We <span className="text-[#04A6E7]">procure</span> the REC on your behalf.
              </li>
              <li className="my-2">
                4. We <span className="text-[#04A6E7]">fractionalize</span> the REC to right-fit your requirement.
              </li>
              <li className="my-2">
                5. We <span className="text-[#04A6E7]">mint tokens</span> called <span className="text-green-400">&apos;tree&apos;</span> creating a unique identity for your REC fractions.
              </li>
              <li className="my-2">
                6. We <span className="text-[#04A6E7]">allocate</span> the tokens as per demand, to your business, employee, customer or your supply chain.
              </li>
              <li className="my-2">
                7. We <span className="text-[#04A6E7]">retire</span> the REC to ensure that no one else can claim the same unit of green power.
              </li>
            </ul>
          </div>
          <div className="my-4 hidden md:flex max-w-screen  h-[52vh] bg-home-background-1 bg-cover bg-center" />
          <MeetOurTeam />
          <OurPartners />
          <Footer />
      </div>
    )
}
