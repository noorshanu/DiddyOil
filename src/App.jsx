import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GasF from "./components/GasF";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import MemeHistory from "./components/MemeHistory";

function App() {
  return (
    <>
      <div className=" relative">
        <div className=" relative">
          <div className=" absolute top-0 left-0 right-0 w-full">
            <Navbar />
          </div>
          <img
            src="images/bgoil.png"
            alt=""
            className=" absolute top-0 bottom-0 left-[20%] right-0"
          />
          <Hero />
        </div>
        <div>
          <About />

          <div className=" relative">

            <img src="images/about1.png" alt="" className=" absolute top-0 left-[10%]" />
            <GasF />
            <div className="bg-hero h-16 sm:h-[150px]"></div>

            <Cta />
          </div>
        </div>
        <div className="bg-hero h-16 sm:h-[200px]"></div>
        <MemeHistory />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
