import { Section } from "./interface";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import keys from "../../../keys.json";
import { useTranslation } from "react-i18next";

export const ContactSection = () =>  {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(""); // To show success or error message
    const { t } = useTranslation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
            .send(
                keys.SERVICE_KEY, // Replace with your service ID
                keys.TEMPLATE_KEY, // Replace with your template ID
                formData,
                keys.PUBLIC_KEY // Replace with your user ID
            )
            .then(
                () => {
                    setIsSubmitting(false);
                    setStatus(t("fail_mail"));
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setIsSubmitting(false);
                    setStatus(t("success_mail"));
                    console.error("EmailJS error:", error);
                }
            );
    };

    return (
        <Section>
            <h1 className="text-5xl font-bold mb-10 dark:text-white text-black">{t("contact")}</h1>
            <form
                onSubmit={handleSubmit}
                className="p-6 bg-gray-100 dark:bg-gray-800  rounded-lg shadow-lg"
            >
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("name")}
                        className="bg-gray-200 dark:bg-gray-800 dark:text-white text-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 p-2 rounded-lg w-full mt-4 sm:flex-1"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("email")}
                        className="bg-gray-200 dark:bg-gray-800 dark:text-white text-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 p-2 rounded-lg w-full mt-4 sm:flex-1"
                        required
                    />
                </div>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("message")}
                    className="bg-gray-200 dark:bg-gray-800 dark:text-white text-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 p-2 rounded-lg w-full mt-4 h-32 resize-none"
                    required
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`py-4 px-8 rounded-lg font-bold text-lg mt-4 w-full transition-transform transform hover:scale-105 ${
                        isSubmitting
                            ? "bg-gray-400 text-gray-800 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed"
                            : "bg-orange-400 text-white hover:bg-orange-500"
                    }`}
                >
                    {isSubmitting ? t("sending") : t("send")}
                </button>
            </form>

            {status && (
                <p className="text-center mt-4 text-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-semibold p-2 rounded-lg">
                    {status}
                </p>
            )}
        </Section>

    );
    

}
