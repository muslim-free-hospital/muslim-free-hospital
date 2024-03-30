// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation files
import translationEN from "./locales/en/translation.json";
import translationMM from "./locales/mm/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  mm: {
    translation: translationMM,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
