import React from "react";
import { Section } from "./interface";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
    const { t } = useTranslation();
    return (
        <Section>
            <div className="mb-8 text-center">
                <h1 className="text-5xl font-bold text-black dark:text-white">{t("about")}</h1>
            </div>

            <div className="container mx-auto">
                {/* First 'Section' */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10 text-left">
                    <div className="lg:w-2/3">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed ">
                            {t("about_1")}
                        </p>
                    
                    </div>
                    <div className="lg:w-1/3 flex justify-center">
                        <img
                        src="images/castle.jpg"
                        alt="Profile illustration"
                        className="rounded-lg shadow-lg lg:w-64 lg:h-64 xl:h-96 xl:w-96 object-cover"
                        />
                    </div>
                </div>

                {/* Second 'Section' */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start mt-12 space-y-8 lg:space-y-0 lg:space-x-10 text-left">
                    <div className="lg:w-1/3 flex justify-center">
                        <img
                        src="images/bike.jpg"
                        alt="Language illustration"
                        className="rounded-lg shadow-lg lg:w-64 lg:h-64 xl:h-96 xl:w-96 object-cover"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {t("about_2")}
                        </p>
                    </div>
                </div>
            </div>
        </Section>
      );
};


const AboutCard = ({ img, description }: { img: string; description: string }) => {
    return (
      <div className="keen-slider__slide bg-white flex flex-col items-center justify-center text-center shadow-lg rounded-lg p-6 max-h-screen">
        <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-600">{img}</span>
        </div>
        
        <p className="mt-10 mb-10 text-sm text-gray-700">{description}</p>
      </div>
    );
  };
  
