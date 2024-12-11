import React from "react";
import {motion} from "framer-motion";
import { ContactSection } from "./contact";
import { ExperienceSection } from "./experience";
import { ProjectSection } from "./projects";
import { AboutSection } from "./about";
import { useTranslation } from "react-i18next";


interface InterfaceProps {
    setSection: (page: number) => void;
    sectionRefs : React.RefObject<HTMLDivElement>[];
}

interface IntroProps {
    setSection: (page: number) => void;
}


export const Section = ({children}) => {
    return (
        <motion.section 
            className=" w-screen min-h-screen p-16 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
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
                    duration: 0.5,
                    delay: 0.2
                }
            }
        >
            {children}
        </motion.section>
    );
}


export const Interface = ({ setSection, sectionRefs}: InterfaceProps) => {
    
    return (
        <div className="flex flex-col items-center w-screen dark:bg-slate-900 bg-white">
            <div ref={sectionRefs[0]}>
                <IntroSection />
            </div>
            <div ref={sectionRefs[1]}>
                <AboutSection />
            </div>
            <div ref={sectionRefs[2]}>
                <ExperienceSection />
            </div>
            <div ref={sectionRefs[3]}>
                <ProjectSection />
            </div>
        </div>
    );
};

const IntroSection = () => {

    const { t } = useTranslation();

    return (
        <Section>
            <h1 className="text-black dark:text-white text-4xl md:text-6xl font-extrabold text-left">
                {t("intro_1")}
                <br />
                <span className="bg-gray-200 dark:bg-black px-1 italic mt-4 inline-block">{t("intro_2")}</span>
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-200 mt-4 text-left">
            {t("intro_3")}
            </p>
            <button
                className="bg-orange-400 text-black py-4 px-8 rounded-lg font-bold text-lg mt-16 transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-700"
                onClick={() => window.open("mailto:liam.andersson2002@gmail.com", "_blank")}>
                {t("contact_me")}
            </button>
        </Section>
    );
}

