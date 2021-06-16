import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from "i18next-browser-languagedetector";
import en from './locales/en'
import se from './locales/se'

const resources = {
  Svenska: se,
  English: en,
}

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
}

i18n.use(initReactI18next)
.use(LanguageDetector)
.init({
  detection: options,
  resources,
  fallbackLng: 'English',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
})

export default i18n
