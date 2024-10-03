import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import GasF from './components/GasF'
import Cta from './components/Cta'
import Footer from './components/Footer'
import MemeHistory from './components/MemeHistory'

function App() {
  return (
    <>
    <div className=' relative'>
      <div className=' absolute top-0 left-0 right-0 w-full'>
      <Navbar/>
      </div>
      
      <Hero/>
      <div>
      <About/>
      <GasF/>
<div className='bg-hero h-16 sm:h-[300px]'>

</div>
      
        <Cta/>
      </div>
      <div className='bg-hero h-16 sm:h-[300px]'>

</div>
<MemeHistory/>
      <div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App