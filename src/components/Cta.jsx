import React from 'react'

function Cta() {
  return (
<section className=' bg-hero2'>
    <div className=' container-wrapper py-12'> 
        <h1 className=' madimi-font text-2xl sm:text-4xl text-center my-6'>
        Circulating Supply: 100b tokens in the wild. They’re scarce, <br /> but don’t worry—we’ve got enough memes for everyone
        </h1>

        <div className=' bg-[#770679] p-4 rounded-3xl max-w-3xl mx-auto mt-4 '>

            <div className=' flex  items-center gap-10'>
                <div>
                    <img src="images/cta.png" alt="" />
                </div>

                <div>
                    <p className=' manrope text-2xl font-bold mb-6'>Our on-chain stats</p>

                    <div className=' bg-[#E626BC] p-3 rounded-2xl ' >

                        <h1 className=' manrope font-semibold text-4xl'>
                        $100b 
                        </h1>
                        <p className='manrope text-2xl'>Circulate Supply</p>

                    </div>
                </div>

            </div>

        </div>
    </div>
</section>
  )
}

export default Cta