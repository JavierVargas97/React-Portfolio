import React from 'react'
import { FaGithub } from 'react-icons/fa'
const Footer = () => {
    return (

        <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-10 dark:bg-gray-800">

            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="about" class="mr-4 hover:underline md:mr-6 "> About</a>
                </li>
                <li>
                    <a href="https://twitter.com/JavierGamboa03" class="mr-4 hover:underline md:mr-6">Contact Me</a>
                </li>
                <li>
                    <a href="https://github.com/JavierVargas97" class="mr-4 hover:underline md:mr-6">
                        Contact Me <FaGithub size={30} />
                    </a>

                </li>

            </ul>
        </footer>

    )
}

export default Footer