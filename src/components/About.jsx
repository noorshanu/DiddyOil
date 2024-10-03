import React from "react";

function About() {
  return (
    <section className=" pt-[10%] pb-[18%]  bg-hero">
      <div className="container-wrapper">
      <div className=" flex justify-between flex-col sm:flex-row gap-4">
        <div className="sm:w-1/2 w-full bg-[#770679] rounded-3xl p-5 mx-2">
          <h1 className=" madimi-font text-2xl sm:text-[40px]">
            Imagine this: You’re cruising down the highway of life in your
            crypto Lambo, and then—BAM!—you hit a slick patch of oil. But guess
            what? It’s not a mess, it’s the Diddy Oil Token, and you’re riding
            straight to the moon, fueled by memes, DeFi, and a dash of NFT
            goodness
          </h1>
        </div>

        <div className=" sm:w-1/2 w-full ">
          <img src="images/about.png" alt="" className=" w-full mx-auto " />
        </div>
      </div>
      </div>
   
    </section>
  );
}

export default About;
