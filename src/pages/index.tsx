import MainComponent from "./../components/MainComponent/MainComponent";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer"

export default function Home() {
  return (
      <div className="h-screen">
        <div className="h-screen overflow">
          <div className="h-1/5 w-full"><Navbar/></div>
          <div className="h-4/5 w-full "><MainComponent/></div>
        </div>
        <div className="h-[600px] md:h-[200px] w-full bg-green-500"><Footer/></div>
        {/* <div className="h-[200px] w-full">
          <Footer/>
        </div> */}
      </div>
  );
}
