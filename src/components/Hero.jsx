import React from "react";

function Hero() {
  return (
    <section>
      <div className=" container-wrapper px-12 py-2">
        <div className=" flex justify-between items-center">
          <div className=" ">
            <img src="images/hero.png" alt="" className=" h-[500px]  w- " />
          </div>

          <div className=" w-full">
            <h2 className=" madimi-font text-3xl text-end">
              Welcome to Diddy Oil Token, where we mix slick DeFi <br /> moves with the
              smoothness of an oil spill (just kidding— <br /> no spills here, only
              profits).This ain’t your average token <br />—it’s a blend of old-school
              oil money vibes and new-age <br /> crypto memes. Hold tight, because
              we’re pumping gains <br /> like it's the Texas Gold Rush, but on-chain!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
