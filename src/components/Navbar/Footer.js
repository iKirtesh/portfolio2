import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between bg-white text-gray-800 py-6 px-10 md:px-20 shadow-lg">
            <div className="flex flex-col items-center mb-4 md:mb-0">
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/ikirtesh" className="text-blue-500 hover:text-blue-400 transition duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.github.com/ikirtesh" className="text-gray-800 hover:text-gray-600 transition duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.twitter.com/Akirtesh" className="text-blue-400 hover:text-blue-300 transition duration-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://www.instagram.com/ikirtesh" className="text-pink-500 hover:text-pink-400 transition duration-300">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
            <div className="text-center text-md mt-4 md:mt-0">
                <p>© 2024 Kirtesh Admute. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
