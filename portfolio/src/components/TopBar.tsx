import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg w-80 transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 z-40`}
            >
                <ul className="mt-20 p-4 space-y-5 font-semibold select-none font-mono text-lg">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="flex justify-center space-x-6 mt-8 mb-4">
                    {/* LinkedIn and GitHub Icons */}
                    <a href="https://www.linkedin.com/in/liam-andersson-8865b4239/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} color="#0077b5" />
                    </a>
                    <a href="https://github.com/Dubstepzedd" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} color="#333" />
                    </a>
                </div>
            </div>

            <div
                className={`fixed top-5 ${
                    isOpen ? "right-64" : "right-10"
                } transition-all duration-300 z-50 bg-orange-400 rounded-md`}
            >
                <Hamburger toggled={isOpen} size={20} toggle={setOpen} color="white" />
            </div>
        </div>
    );
};

export default HamburgerMenu;
