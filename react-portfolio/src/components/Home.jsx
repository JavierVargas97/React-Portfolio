import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#10162f]'>
        {/* container */}

        <div className='nax-w-[100px] mx-auto px-8 flex flex-col justify-center h-full'> 
        <p className='text-[#e5e5e5] sm:text-2xl '>Hi, My name is.</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#d09433]'>Javier Vargas</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#2f96b0]'>I'm a Full-Stack Developer </h2>
        <p className='text-[#999797] py-2 max-w-[650px]'> who enjoys builds any type of apps!
        on this moment im trying to be better on some type of leguages for example: react, tailwind and node.</p>
        <p className='text-[#999797] py-2 max-w-[6500px]'> On this page you can find some projects where have I worked! </p>

        <div>      
            <button className='text-white border-2 px-5 py-3 my-2 flex items-center hover:bg-[#ac3c3c] hover:border-[#a2911f]'>View Work </button>



                </div>
         </div>
    </div>
  )
}

export default Home