import React from "react"
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer className="flex flex-col items-center justify-center w-full dark:bg-slate-800 bg-gray-200 p-2">
            <div className="flex justify-center space-x-6 mt-8 mb-4">
                <a href="https://www.linkedin.com/in/liam-andersson-8865b4239/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                    <FaLinkedin size={30} color="#0077b5" />
                </a>
                <a href="https://github.com/Dubstepzedd" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                    <FaGithub size={30} color="#333" />
                </a>
            </div>
            <p className="p-2 font-thin italic text-wrap text-black dark:text-white text-center">{t("copy_right")}</p>
        </footer>
    )
}