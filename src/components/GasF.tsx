import React from "react";

function GasF() {
  return (
    <section className=" pt-[10%]  py-12 bg-hero3">
      <div className="container-wrapper">
      <div className=" flex justify-between flex-col sm:flex-row gap-8">
        <div className=" sm:w-1/2 w-full ">
          <h1 className="madimi-font text-2xl sm:text-4xl max-w-sm mx-auto lh-1_7">
            Forget gas prices; earn gas money (literally) by staking your Diddy
            Oil Tokens. Just park ‘em, and watch that sweet passive income roll
            in like barrels of crude
          </h1>
        </div>

        <div className=" sm:w-1/2 w-full">
            <img src="images/gas.png" alt="" className=" h-[550px]" />
        </div>
      </div>
      </div>
 
    </section>
  );
}

export default GasF;
