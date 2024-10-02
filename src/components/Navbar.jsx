import React from 'react'


const Navbar = () => {
  return (
   <nav className=' container-wrapper px-12 py-4'>

    <div className=' flex justify-between items-center flex-col sm:flex-row'>

        <div>
            <img src="images/logo.png" alt="" />
        </div>

        <div className=' flex items-center gap-4 pr-10'>

            <a href="/" className=' flex gap-2 items-center'>
            <img src="images/tele.png" alt="" />
            Telegram
            </a>
            <a href="/" className=' flex gap-2 items-center'>
            <img src="images/tweet.png" alt="" />
            Twitter
            </a>
            <a href="/" className=' flex gap-2 items-center'>
            <img src="images/tiktok.png" alt="" />
            Tiktok
            </a>
            <a href="/" className=' flex gap-2 items-center'>
            <img src="images/discord.png" alt="" />
            Discord
            </a>

        </div>

    </div>

   </nav>
  )
}

export default Navbar