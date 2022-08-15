import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/Logo.png'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div
            className='shadow-md shadow-black  fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#10162f] text-[#f0f1f5]'>
            <div>
                <img src={Logo} alt="Logo Images" style={{ width: '170px' }} />
            </div>


            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} >
                        Experience
                    </Link>
                </li>
                <li> <Link to="Project" smooth={true} duration={500}>
                    Projects
                </Link>
                </li>
            </ul>

            {/* Hamburguer */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? ' hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#10162f] flex flex-col justify-center items-center '}>
                <li className='py-6 text-4xl'> About Me </li>
                <li className='py-6 text-4xl'> Home </li>
                <li className='py-6 text-4xl'> Projects </li>
                <li className='py-6 text-4xl'> Contact </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#1f2020]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#41badf]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Twitter <FaTwitter size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#235844]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#0081a7]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>


                    </li>
                </ul>
            </div>


        </div>


    );
};

export default Navbar