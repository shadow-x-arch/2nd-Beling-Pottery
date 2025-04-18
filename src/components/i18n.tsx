
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      description: "This is a sample internationalized app!",
      main: "Main Menu",
      menu: "Dashboard",
      project: "Projects",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      description: "Ceci est une application internationalisée d'exemple !",
      main: "Menu Principal",
      menu: "Tableau de Bord",
      project: "Projets",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if no translation is found
  interpolation: {
    escapeValue: false, // React already escapes data
  },
});

export default i18n;
