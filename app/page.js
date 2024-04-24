import Coutdown from "./sections/coutdown";
import Events from "./sections/events";
import Footer from "./sections/footer";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <div className="bg-black text-white font-bold">
    <div className="h-screen flex justify-center items-center bg-black text-white font-bold ">
      <Hero/>
    </div>
    <Coutdown/>
    <Events/>
    <Footer/>
    </div>
  );
}
