import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Node from '../assets/node.png';
import Javascript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import reactIcon from '../assets/react.png';
import Mysql from '../assets/sql.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#10162f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#a2911f] text-[#e5e5e5]'>Experience</p>
                    <p className='p-2 text-[#e5e5e5]'>Lenguages I've worked</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className=' shadow-md shadow-black hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='text-[#e5e5e5] my-4'>HTML</p>
                    </div>
                    
                    <div className=' shadow-md shadow-black hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='text-[#e5e5e5] my-4'>CSS</p>
                    </div>
                   
                    <div className=' shadow-md shadow-black hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                        <p className='text-[#e5e5e5] my-4'>Javascript</p>
                    </div>
                    
                    <div className=' shadow-md shadow-black hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                        <p className='text-[#e5e5e5] my-4'>Mongo DB</p>
                    </div>
                    
                    <div className=' shadow-md shadow-black hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='text-[#e5e5e5] my-4'>Node</p>
                    </div>
                   
                    <div className=' shadow-md shadow-black hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                        <p className='text-[#e5e5e5] my-4'>Github</p>
                    </div>
                   
                    <div className=' shadow-md shadow-black hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={reactIcon} alt="React icon" />
                        <p className='text-[#e5e5e5] my-4'>REACT</p>
                    </div>

                    <div className=' shadow-md shadow-black hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto ' src={Mysql} style={{ width: '150px' }} alt="Mysql icon" />
                        <p className='text-[#e5e5e5] my-4'>MySQL</p>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Skills