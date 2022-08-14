import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Logo.png'

const Navbar = () => {
    const[nav, setNav]  = useState(false)
    const handleClick = () => setNav(!nav)
  return (
<div
   className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#10162f] text-[#f0f1f5]'>
 <div>
    <img src={Logo} alt="Logo Images" style={{width:'170px'}}/>
        </div>


        {/* menu */}
        <ul className='hidden md:flex'>
                <li> Home </li>
                <li> About Me </li>
                <li> Projects </li>
                <li> Contact </li>
        </ul>    

             {/* Hamburguer */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
    </div>

        {/* Mobile Menu */}
        <ul className={!nav ? ' hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#10162f] flex flex-col justify-center items-center '}>
                <li className='py-6 text-4xl'> About Me </li>
                <li className='py-6 text-4xl'> Home </li>
                <li className='py-6 text-4xl'> Projects </li>
                <li className='py-6 text-4xl'> Contact </li>    
        </ul>

         {/* Social Icons */}
    <div className='flex fixed flex-col top-[35%] left-0'>
<ul>
    <li>
        <a href="/"> </a>
        Github <FaGithub/>
    </li>
</ul>

    </div>


</div>


  );
};

export default Navbar