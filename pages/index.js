import Ecosystem from "@/components/Ecosystem/Ecosystem";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MeetOurTeam from "@/components/MeetOurTeam/MeetOurTeam";
import Navbar from "@/components/Navbar/Navbar";
import RecentProjects from "@/components/RecentProjects/RecentProjects";
import Services from "@/components/Services/Services";
import Visions from "@/components/Visions/Visions";

export default function Home() {
    return (
      <div>
          <Navbar />
          <Header />
          <Visions />
          <Services />
          <Ecosystem />
          {/* <h1 className="text-3xl font-bold text-center underline">
              Hello World!!

          </h1> */}
          <div className="max-w-screen md:h-[68vh] h-[50vh] bg-home-background-1 bg-top bg-cover" />
          <RecentProjects />
          <MeetOurTeam />
          <Footer />
      </div>
    )
}
