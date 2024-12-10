import React from 'react';
import { IconButton } from '@mui/material';
import { GB,SE } from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next';
const LanguageToggle = () => {
    const { i18n } = useTranslation(); // Get the i18n instance from react-i18next
    const language = i18n.language; // Get the current language

     // Function to toggle language
     const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'se' : 'en'; // Toggle between 'en' and 'se'
        i18n.changeLanguage(newLanguage); // Change the language using i18next
    };

    return (
        <IconButton onClick={toggleLanguage} color="inherit">
            {language === 'se' ? <GB className='w-7 h-7' /> : <SE className='w-7 h-7'/>}
        </IconButton>
    );
};

export default LanguageToggle;
