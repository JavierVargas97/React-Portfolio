import React from 'react'

const Aboutme = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#10162f] text-[#f0f1f5]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-semibold inline border-b-4 border-[#8a3333]'>
                            About Me
                        </p>
                    </div>
                    <div></div>
                </div>


                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-semibold'>
                        <p>Welcome to my personal portfolio. Plase take a look around of my website I apreciate your visit! </p>
                    </div>
                    <div>
                        <p className='sm:text-right  font-semibold'>Im so excited for start on this world of Developer of web apps,
                            all this time i was looking what i could do of my laboral life and I could never take a desition about that,
                            So a friend who too dedicates on this , he talked to me for take a  look at the topic and i was so facinate
                            how you can create a lot of things using web tools! so i was decide to learn  for create amazing
                            things some day.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Aboutme


