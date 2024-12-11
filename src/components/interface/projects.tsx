import React from "react"
import { Section } from "./interface"
import { useTranslation } from "react-i18next"


interface ProjectGithub {
  name: string;
  description: string;
  languages: string[];
  link: string;
}

export const ProjectSection = () => {
    const { t } = useTranslation();

    const projects: ProjectGithub[] = t("projects_github", { returnObjects: true }) as ProjectGithub[];

    return (
        <Section>
            <h1 className="text-5xl font-bold text-black dark:text-white mb-8">{t("projects")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((repo: any, index: number) => (
                <ProjectCard key={index} repo={repo} />
              ))}
            </div>
        </Section>
    );
}


const ProjectCard = ({ repo }: { repo: ProjectGithub }) => { 
    const { name, description, languages, link } = repo;
    return (
        <a
          href={link} // link to the repo
          target="_blank"
          rel="noopener noreferrer" // for security reasons when opening in a new tab
          className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row items-start gap-4 max-w-lg w-full select-none transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-700"
        >
          <div className="flex flex-col justify-start sm:w-2/3 w-full text-left">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              {name}
            </h2>
            <p className="inline-block text-wrap text-gray-700 dark:text-gray-300">{description || "No description is available"}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {languages.filter(tag => tag).map((tag, index) => (
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
}