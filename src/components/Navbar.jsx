import React from 'react'


const Navbar = () => {
  return (
   <nav className=' container-wrapper px-12 py-4'>

    <div className=' flex justify-between items-center flex-col sm:flex-row gap-4'>

        <div className=' flex items-center gap-3' >
         <img src="images/hero.png" alt="" className=' h-[80px]' />   <img src="images/logo.png" alt="" />
        </div>

        <div className=' flex items-center gap-6 sm:gap-8 pr-10'>

            <a href="https://t.me/diddyoiltoken" target='_blank' className=' flex gap-2 items-center mx-2'>
            <img src="images/tele.png" alt="" />
            Telegram
            </a>
            <a href="https://x.com/diddyoil_token" target='_blank' className=' flex gap-2 items-center mx-2'>
            <img src="images/tweet.png" alt="" />
            Twitter
            </a>
            <a href="https://www.tiktok.com/@diddyoiltoken" target='_blank' className=' flex gap-2 items-center'>
            <img src="images/tiktok.png" alt="" />
            Tiktok
            </a>
            <a href="https://www.facebook.com/profile.php?id=61566452043926" target='_blank' className=' flex gap-2 items-center'>
            <img src="images/facebook.png" alt="" className=' h-6 ' />
           Facebook
            </a>

        </div>

    </div>

   </nav>
  )
}

export default Navbar