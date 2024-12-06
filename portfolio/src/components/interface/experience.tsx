import React from "react"
import { Section } from "./interface"

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
    return (
        <Section>
            <h1 className="text-5xl font-bold text-black dark:text-white">Experience</h1>
            <button 
                className="bg-orange-400 text-black py-4 px-8 rounded-lg font-bold text-lg ml-5 mt-8 transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-700" 
                onClick={
                    () => {
                        window.open('resume.pdf');
                    }
                }
            >
                View Full Resume
            </button>
            <div className="mt-8 space-y-8 flex-col flex p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 dark:scrollbar-thumb-white scrollbar-track-transparent scrollbar-thumb-rounded">
                <ExperienceCard
                    role="Software Developer"
                    startDate="Aug 2020"
                    endDate="Present"
                    company="Google"
                    description="Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback."
                    tags={["Python", "C++", "JavaScript", "React"]}
                    link={"https://about.google/"}
                />
                <ExperienceCard
                    role="Software Developer"
                    startDate="Aug 2020"
                    endDate="Present"
                    company="Google"
                    description="Worked on the Google Search team to improve the search algorithm and user experience."
                    tags={["Python", "C++", "JavaScript", "React"]}
                    link={"https://about.google/"}
                />
                <ExperienceCard
                    role="Software Developer"
                    startDate="Aug 2020"
                    endDate="Present"
                    company="Google"
                    description="Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback."
                    tags={["Python", "C++", "JavaScript", "React"]}
                    link={"https://about.google/"}
                />
                <ExperienceCard
                    role="Software Developer"
                    startDate="Aug 2020"
                    endDate="Present"
                    company="Google"
                    description="Worked on the Google Search team to improve the search algorithm and user experience."
                    tags={["Python", "C++", "JavaScript", "React"]}
                    link={"https://about.google/"}
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
  

