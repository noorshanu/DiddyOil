import React from "react";

function Hero() {
  return (
    <section className=" pt-[50%] sm:pt-[10%]  bg-hero2">
      <div className=" container-wrapper px-12 py-2">
        <div className=" flex justify-between flex-col sm:flex-row items-center gap-4">
          <div className=" ">
            <img src="images/hero.png" alt="" className=" h-full sm:h-[500px] w-full sm:w-[350px] " />
          </div>

          <div className=" w-full">
            <h2 className=" madimi-font text-2xl sm:text-4xl text-center sm:text-end hidden sm:block">
              Welcome to Diddy Oil Token, where we mix slick DeFi <br /> moves with the
              smoothness of an oil spill (just kidding— <br /> no spills here, only
              profits).This ain’t your average token <br />—it’s a blend of old-school
              oil money vibes and new-age <br /> crypto memes. Hold tight, because
              we’re pumping gains <br /> like it's the Texas Gold Rush, but on-chain!
            </h2>
            <h2 className=" madimi-font text-2xl sm:text-4xl text-center sm:text-end block sm:hidden">
              Welcome to Diddy Oil Token, where we mix slick DeFi  moves with the
              smoothness of an oil spill (just kidding—  no spills here, only
              profits).This ain’t your average token —it’s a blend of old-school
              oil money vibes and new-age  crypto memes. Hold tight, because
              we’re pumping gains  like it's the Texas Gold Rush, but on-chain!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
