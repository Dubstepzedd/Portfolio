import { Section } from "./interface";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import keys from "../../../keys.json";

export const ContactSection = () =>  {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(""); // To show success or error message

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
                    setStatus("Email sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setIsSubmitting(false);
                    setStatus("Failed to send email. Please try again.");
                    console.error("EmailJS error:", error);
                }
            );
    };

    return (
        <Section>
            <h1 className="text-5xl font-bold mb-10 dark:text-white">Contact</h1>
            <form
                onSubmit={handleSubmit}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-3xl align-middle"
            >
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="bg-gray-200 dark:bg-gray-700 dark:text-white p-2 rounded-lg w-full mt-4 sm:flex-1"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="bg-gray-200 dark:bg-gray-700 dark:text-white p-2 rounded-lg w-full mt-4 sm:flex-1"
                        required
                    />
                </div>
    
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="bg-gray-200 dark:bg-gray-700 dark:text-white p-2 rounded-lg w-full mt-4 h-32 overflow-y-auto resize-none"
                    required
                />
    
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`py-4 px-8 rounded-lg font-bold text-lg mt-4 w-full transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-700 ${
                        isSubmitting ? "bg-gray-400" : "bg-orange-400"
                    } text-white flex items-center justify-center`}
                >
                    {isSubmitting ? "Sending..." : "Send"}
                </button>
            </form>
    
            {status && (
                <p className="text-center mt-4 text-lg bg-white dark:bg-gray-800 text-black dark:text-white font-semibold p-2 rounded-lg">
                    {status}
                </p>
            )}
        </Section>
    );
    

}
