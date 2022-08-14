import React from 'react'
import Password from '../assets/Password.png';
import Quiz from '../assets/Quiz.png';
import PortfolioValue from '../assets/PortfolioValue.png';
import Wheater from '../assets/Wheater.png';


const Projects = () => {
  return (
    <div className=' w-full md:h-screen text-white bg-[#10162f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>

            
            <p className='text-4xl font-semibold inline border-b-4 border-[#a2911f]'>Projects</p>
            <p className='py-4'> Look around a some projects I've Worked</p>
        </div>
            <div className='grid sm:grid-col-2 md:grid-cols-3 gap-4'>
                <div  className='shadow-lg shadow-black group container rounded-md flex justify-items-center items-center mx-auto content-div'>
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href=" ">
                            <button></button>
                            </a>
                            <a href=" ">
                                <button></button>
                            </a>
                        </div>
                    </div>
                 </div>
             </div>

        </div>
    </div>
  )
}

export default Projects