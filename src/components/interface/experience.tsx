import React, { useRef } from "react"
import { Section } from "./interface"
import { useTranslation } from "react-i18next";

type ExperienceCardProps = {
    role: string;
    startDate: string;
    endDate: string
    company: string;
    description: string;
    tags: string[];
    link: string
}

export const ExperienceSection = () => {
    const scrollableDivRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();
    
    return (
        <Section>
            <h1 className="text-5xl font-bold text-black dark:text-white">{t("experience")}</h1>
            <button 
                className="bg-orange-400 text-black py-4 px-8 rounded-lg font-semibold text-lg - mt-8 transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-700" 
                onClick={
                    () => {
                        window.open('resume.pdf');
                    }
                }
            >
                {t("resume")}
            </button>
            <div ref={scrollableDivRef} className="mt-8 space-y-8 flex-col flex">
            <ExperienceCard
                role={t("experiences.amanues_aug_2024.role")}
                startDate={t("experiences.amanues_aug_2024.startDate")}
                endDate={t("experiences.amanues_aug_2024.endDate")}
                company={t("experiences.amanues_aug_2024.company")}
                description={t("experiences.amanues_aug_2024.description")}
                tags={t("experiences.amanues_aug_2024.tags", { returnObjects: true }) as string[]}
                link={t("experiences.amanues_aug_2024.link")}
              />
              <ExperienceCard
                role={t("experiences.programmer_aug_2024.role")}
                startDate={t("experiences.programmer_aug_2024.startDate")}
                endDate={t("experiences.programmer_aug_2024.endDate")}
                company={t("experiences.programmer_aug_2024.company")}
                description={t("experiences.programmer_aug_2024.description")}
                tags={t("experiences.programmer_aug_2024.tags", { returnObjects: true }) as string[]}
                link={t("experiences.programmer_aug_2024.link")}
              />
              <ExperienceCard
                role={t("experiences.amanues_jan_2024.role")}
                startDate={t("experiences.amanues_jan_2024.startDate")}
                endDate={t("experiences.amanues_jan_2024.endDate")}
                company={t("experiences.amanues_jan_2024.company")}
                description={t("experiences.amanues_jan_2024.description")}
                tags={t("experiences.amanues_jan_2024.tags", { returnObjects: true }) as string[]}
                link={t("experiences.amanues_jan_2024.link")}
              />
              <ExperienceCard
                role={t("experiences.amanues_aug_2023.role")}
                startDate={t("experiences.amanues_aug_2023.startDate")}
                endDate={t("experiences.amanues_aug_2023.endDate")}
                company={t("experiences.amanues_aug_2023.company")}
                description={t("experiences.amanues_aug_2023.description")}
                tags={t("experiences.amanues_aug_2023.tags", { returnObjects: true }) as string[]}
                link={t("experiences.amanues_aug_2023.link")}
              />
              <ExperienceCard
                role={t("experiences.maintenance_technician_2023.role")}
                startDate={t("experiences.maintenance_technician_2023.startDate")}
                endDate={t("experiences.maintenance_technician_2023.endDate")}
                company={t("experiences.maintenance_technician_2023.company")}
                description={t("experiences.maintenance_technician_2023.description")}
                tags={t("experiences.maintenance_technician_2023.tags", { returnObjects: true }) as string[]}
                link={t("experiences.maintenance_technician_2023.link")}
              />

           
            </div>
        </Section>
    )
}

const ExperienceCard = ({
    role,
    startDate,
    endDate,
    company,
    description,
    tags,
    link,
  }: ExperienceCardProps) => {
    return (
      <a
        href={link} // link to the webpage
        target="_blank"
        rel="noopener noreferrer" // for security reasons when opening in a new tab
        className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row items-start gap-4 max-w-lg w-full select-none transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-700"
      >
        {/* Date Section */}
        <div className="flex-shrink-0 sm:w-1/3 w-full">
          <p className="font-semibold text-gray-700 dark:text-gray-300 ">{startDate} - {endDate}</p>
        </div>
        {/* Content Section */}
        <div className="flex flex-col justify-start sm:w-2/3 w-full text-left">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {role} · {company}
          </h2>
          <p className="inline-block text-wrap text-gray-700 dark:text-gray-300">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-orange-400 text-black font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    );
  };
  

