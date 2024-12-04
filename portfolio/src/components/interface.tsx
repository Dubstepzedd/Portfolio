import React from "react";
import {motion} from "framer-motion";

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

export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection/>
            <WorkSection/>
            <ProjectSection/>
            <ContactSection/>
        </div>
    );
}

const AboutSection = () => {
    return (
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug text-left">
                Hi, I am 
                <br/>
                <span className="bg-gray-200 px-1 italic">Liam Andersson</span>
            </h1>
            <p className="text-lg text-gray-800 mt-4">
                A software developer with a passion for learning and creating. 
            </p>
            <button className="bg-orange-400 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
                Contact me
            </button>
        </Section>
    );
}

const WorkSection = () => {
    return (
        <Section>
            <h1 className="text-5xl font-bold">Work</h1>
        </Section>
    )
}

const ProjectSection = () => {
    return (
        <Section>
            <h1 className="text-5xl font-bold">Projects</h1>
        </Section>
    )
}

const ContactSection = () => {
    return (
        <Section>
            <h1 className="text-5xl font-bold">Contact</h1>
        </Section>
    )
}