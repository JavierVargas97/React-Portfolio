import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Node from '../assets/node.png';
import Javascript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';


const Skills = () => {
    return (
        <div name='skills' className='bg-[#10162f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#a2911f] text-[#e5e5e5]'>Experience</p>
                    <p className='p-2 text-[#e5e5e5]'>Lenguages I've worked</p>
                </div>
                <div>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" /> 
                    <p>HTML</p>
                </div>

                <div>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p>CSS</p>
                </div>

                <div>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p>Node</p>
                </div>

                <div>
                    <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                    <p>Javascript</p>
                </div>

                <div>
                    <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                    <p>Github</p>
                </div>

                <div>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                    <p>Mongo</p>
                </div>

            </div>

        </div>
    )
}

export default Skills