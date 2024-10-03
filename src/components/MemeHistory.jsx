import React from 'react'

function MemeHistory() {
  return (
    <div className='bg-hero2'>
        <div className=' container-wrapper py-12'>

            <h1 className='madimi-font sm:text-4xl text-2xl my-6 text-center'>
            Own a Piece of Meme History—The Diddy Oil NFTs
            </h1>

            <h1 className=' max-w-3xl mx-auto text-center madimi-font text-2xl sm:text-4xl py-6'>
            What do you get when you mix oil barons with meme culture? Our exclusive, one-of-a-kind NFT collection. Each NFT is an homage to the oil industry, but through the eyes of the internet’s greatest meme artists
            </h1>
                <div className=' flex  justify-center flex-col sm:flex-row items-center gap-16 mt-8'>

                    <img src="images/shop.png" alt="" />

                    <img src="images/oil.png" alt="" />

                </div>
                <img src="images/oil2.png" alt="" className=' mx-auto' />
        </div>
    </div>
  )
}

export default MemeHistory