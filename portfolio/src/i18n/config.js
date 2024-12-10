import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translations.json';
import seTranslations from './locales/se/translations.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'se',
  resources: {
    en: { translations: enTranslations },
    se: { translations: seTranslations }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'se'];

export default i18n;