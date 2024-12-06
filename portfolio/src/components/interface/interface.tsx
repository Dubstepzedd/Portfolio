import React from "react";
import {motion} from "framer-motion";
import { ContactSection } from "./contact";
import { ExperienceSection } from "./experience";
import { ProjectSection } from "./projects";


interface InterfaceProps {
    setSection: (page: number) => void;
}


export const Section = ({children}) => {
    return (
        <motion.section 
            className="h-screen w-screen p-16 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
            initial={
                {
                    opacity: 0,
                    y: 50
                }
            }    
            whileInView={
                {
                    opacity: 1,
                    y: 0
                }
            }
            transition={
                {
                    duration: 1,
                    delay: 0.5
                }
            }
        >
            {children}
        </motion.section>
    );
}

export const Interface = ({setSection} : InterfaceProps) => {
    return (
        <div className="flex flex-col items-center w-screen">
            <IntroSection setSection={setSection}/>
            <AboutSection/>
            <ExperienceSection/>
            <ProjectSection/>
            <ContactSection/>
        </div>
    );
}

const IntroSection = ({setSection} : InterfaceProps) => {
    return (
        <Section>
            <h1 className="text-black dark:text-white text-6xl font-extrabold leading-snug text-left">
                Hi, I am 
                <br/>
                <span className="bg-gray-200 dark:bg-black px-1 italic">Liam Andersson</span>
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-200 mt-4">
                A software developer with a passion for learning and creating. 
            </p>
            <button 
                className="bg-orange-400 text-white dark:text-black py-4 px-8 rounded-lg font-bold text-lg mt-16 transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-700"
                onClick={() => {setSection(4)}}>
                Contact me
            </button>
        </Section>
    );
}

const AboutSection = () => {
    return (
        <Section>
            <h1 className="text-5xl font-bold text-black dark:text-white">About</h1>
        </Section>
    )
}
