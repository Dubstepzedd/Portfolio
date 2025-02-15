import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import DarkModeToggle from "./dark_mode_toggle";
import LanguageToggle from "./language_toggle";
import { useTranslation } from "react-i18next";

type HamburgerMenuProps = {
    section: number;
    onSectionChange: (section: number) => void;
};

const HamburgerMenu = ({ section, onSectionChange }: HamburgerMenuProps) => {
    const { t } = useTranslation();
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div>
            <div
                className={`fixed top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-lg transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 z-40`}
            >
                <ul className="mt-32 p-4 space-y-5 font-semibold select-none font-mono text-lg">
                    {/* If Contact section is added back, add "Contact" below*/}
                    {[t("introduction"),t("about"), t("experience"), t("projects")].map((title, index) => (
                        <li key={index}>
                            <a
                                className={`rounded-lg p-2 block hover:bg-orange-400 ${
                                    section === index ? "text-blue-800 dark:text-blue-600" : "text-black dark:text-white"
                                }`}
                                onClick={() => {
                                    onSectionChange(index);
                                    setOpen(false); // Close the menu on selection
                                }}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center space-x-6 mt-8 mb-4">
                    <a href="https://www.linkedin.com/in/liam-andersson-8865b4239/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                        <FaLinkedin size={30} color="#0077b5" />
                    </a>
                    <a href="https://github.com/Dubstepzedd" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                        <FaGithub size={30} color="#333" />
                    </a>
                </div>

                <p className="px-2 font-thin italic text-wrap text-black dark:text-white text-center">{t("copy_right")}</p>
            </div>

            <div
                className={`fixed top-5 z-50 flex space-x-4 transition-all duration-300 ${
                    isOpen ? "right-20" : "right-10"
                }`}
            >
                <div className="flex items-center justify-center bg-orange-400 rounded-2xl p-2">
                    <LanguageToggle />
                </div>
                <div className="flex items-center justify-center bg-orange-400 rounded-2xl p-2">
                    <DarkModeToggle/>
                </div>

                <div className="bg-orange-400 rounded-2xl p-1">
                    <Hamburger toggled={isOpen} size={20} toggle={setOpen} color="black" />
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
