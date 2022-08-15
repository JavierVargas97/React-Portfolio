import React from 'react'
import Password from '../assets/Password.png';
import Quiz from '../assets/Quiz.png';
import PortfolioValue from '../assets/PortfolioValue.png';
import Wheater from '../assets/Wheater.png';
import Bcash from '../assets/Bcash.png';
import Readme from '../assets/Readme.png';


const Projects = () => {
    return (
        <div name='Project' className=' w-full md:h-screen text-white bg-[#10162f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#a2911f]'>
                        Projects
                    </p>
                    <p className='py-6'> Look around for some projects I've Worked</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Position card and propieties */}
                    <div
                        style={{ backgroundImage: `url(${Password})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* //hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <a href='https://github.com/JavierVargas97/Password-Generator'>
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-[#a2911f] text-black font-bold text-lg tracking-wider'>
                                    Github Code
                                    "Click Here" for GO!
                                </button>
                            </a>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Wheater})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* //hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <a href='https://github.com/JavierVargas97/Weather-Dashboard'>
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-[#a2911f] text-black font-bold text-lg tracking-wider'>
                                    Github Code
                                    "Click Here" for GO!
                                </button>
                            </a>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Quiz})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* //hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <a href='https://github.com/JavierVargas97/Code-Quiz'>
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-[#a2911f] text-black font-bold text-lg tracking-wider'>
                                    Github Code
                                    "Click Here" for GO!
                                </button>
                            </a>
                        </div>
                    </div>


                    <div
                        style={{ backgroundImage: `url(${PortfolioValue})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* //hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <a href='https://github.com/JavierVargas97/personal-asset-manager'>
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-[#a2911f] text-black font-bold text-lg tracking-wider'>
                                    Github Code
                                    "Click Here" for GO!
                                </button>
                            </a>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Readme})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* //hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <a href='https://github.com/JavierVargas97/TeamProfileGenerator'>
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-[#a2911f] text-black font-bold text-lg tracking-wider'>
                                    Github Code
                                    "Click Here" for GO!
                                </button>
                            </a>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Bcash})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* //hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <a href='https://github.com/JavierVargas97/BCash'>
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-[#a2911f] text-black font-bold text-lg tracking-wider'>
                                    Github Code
                                    "Click Here" for GO!
                                </button>
                            </a>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Projects