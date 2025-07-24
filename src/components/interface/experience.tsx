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
    img: string
}

export const ExperienceSection = () => {
    const scrollableDivRef = useRef<HTMLDivElement>(null);
    const { t, i18n } = useTranslation();

    return (
        <Section>
            <h1 className="text-5xl font-bold text-black dark:text-white">{t("experience")}</h1>
            <button
                className="bg-orange-400 text-black py-4 px-8 rounded-lg font-semibold text-lg - mt-8 transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-700" 
                onClick={
                    () => {
                        if(i18n.language === "en") {
                          window.open('resume_en.pdf');
                        }
                        else {
                          window.open('resume.pdf');
                        }
                    }
                }
            >
                {t("resume")}
            </button>
            <div ref={scrollableDivRef} className="mt-8 space-y-8 flex-col flex">
              <ExperienceCard
                  img={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.connect.ro%2Fwp-content%2Fuploads%2F2012%2F08%2Fericsson-logo.jpg&f=1&nofb=1&ipt=c4763a6f7ca599d112c7a45fe99dbe8c992ebcb09a043516e7aa8c3abab52f2b"}
                  role={t("experiences.ericsson_summer_2025.role")}
                  startDate={t("experiences.ericsson_summer_2025.startDate")}
                  endDate={t("experiences.ericsson_summer_2025.endDate")}
                  company={t("experiences.ericsson_summer_2025.company")}
                  description={t("experiences.ericsson_summer_2025.description")}
                  tags={t("experiences.ericsson_summer_2025.tags", { returnObjects: true }) as string[]}
                  link={t("experiences.ericsson_summer_2025.link")}
              />
              <ExperienceCard
                  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDtxtpEVup0EgeFc8-FFDKXHnBPXu00V5bg&s"}
                  role={t("experiences.amanuens_jan_2025.role")}
                  startDate={t("experiences.amanuens_jan_2025.startDate")}
                  endDate={t("experiences.amanuens_jan_2025.endDate")}
                  company={t("experiences.amanuens_jan_2025.company")}
                  description={t("experiences.amanuens_jan_2025.description")}
                  tags={t("experiences.amanuens_jan_2025.tags", { returnObjects: true }) as string[]}
                  link={t("experiences.amanuens_jan_2025.link")}
              />
              <ExperienceCard
                  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDtxtpEVup0EgeFc8-FFDKXHnBPXu00V5bg&s"}
                  role={t("experiences.amanuens_aug_2024.role")}
                  startDate={t("experiences.amanuens_aug_2024.startDate")}
                  endDate={t("experiences.amanuens_aug_2024.endDate")}
                  company={t("experiences.amanuens_aug_2024.company")}
                  description={t("experiences.amanuens_aug_2024.description")}
                  tags={t("experiences.amanuens_aug_2024.tags", { returnObjects: true }) as string[]}
                  link={t("experiences.amanuens_aug_2024.link")}
                />
                <ExperienceCard
                  img={"https://h24-original.s3.amazonaws.com/180040/15132033-egcWi.jpg"}
                  role={t("experiences.programmer_aug_2024.role")}
                  startDate={t("experiences.programmer_aug_2024.startDate")}
                  endDate={t("experiences.programmer_aug_2024.endDate")}
                  company={t("experiences.programmer_aug_2024.company")}
                  description={t("experiences.programmer_aug_2024.description")}
                  tags={t("experiences.programmer_aug_2024.tags", { returnObjects: true }) as string[]}
                  link={t("experiences.programmer_aug_2024.link")}
                />
                <ExperienceCard
                  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDtxtpEVup0EgeFc8-FFDKXHnBPXu00V5bg&s"}
                  role={t("experiences.amanuens_jan_2024.role")}
                  startDate={t("experiences.amanuens_jan_2024.startDate")}
                  endDate={t("experiences.amanuens_jan_2024.endDate")}
                  company={t("experiences.amanuens_jan_2024.company")}
                  description={t("experiences.amanuens_jan_2024.description")}
                  tags={t("experiences.amanuens_jan_2024.tags", { returnObjects: true }) as string[]}
                  link={t("experiences.amanuens_jan_2024.link")}
                />
                <ExperienceCard
                  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDtxtpEVup0EgeFc8-FFDKXHnBPXu00V5bg&s"}
                  role={t("experiences.amanuens_aug_2023.role")}
                  startDate={t("experiences.amanuens_aug_2023.startDate")}
                  endDate={t("experiences.amanuens_aug_2023.endDate")}
                  company={t("experiences.amanuens_aug_2023.company")}
                  description={t("experiences.amanuens_aug_2023.description")}
                  tags={t("experiences.amanuens_aug_2023.tags", { returnObjects: true }) as string[]}
                  link={t("experiences.amanuens_aug_2023.link")}
                />
                <ExperienceCard
                  img={"https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Arla_Foods_logo.svg/1200px-Arla_Foods_logo.svg.png"}
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
    img
  }: ExperienceCardProps) => {
    return (
      <a
        href={link} // link to the webpage
        target="_blank"
        rel="noopener noreferrer" // for security reasons when opening in a new tab
        className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4 flex flex-col lg:flex-row items-start gap-4 w-full lg:w-1/2 select-none transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-700"
      >
        {/* Date Section */}
        <div className="flex-shrink-0 lg:w-1/3 w-full">
          <p className="font-semibold text-gray-700 dark:text-gray-300 ">{startDate} - {endDate}</p>
          <img
            src={img}
            alt={`${role} at ${company}`}
            className="w-32 h-32 max-w-[120px] max-h-[120px] mx-auto object-contain p-2"
          />
        </div>
        {/* Content Section */}
        <div className="flex flex-col justify-start lg:w-2/3 w-full text-left">
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
        {/* Image Section */}
      </a>
    );
  };

