import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {langs} from './i18n.langs'
import {getCookie} from '../helpers/cookies'

let langDefault:string = 'en';
const cookieLang:string|null|undefined = getCookie('lang');

if(cookieLang !== undefined && cookieLang !== null){
  langDefault = cookieLang;
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: langs,
    lng: langDefault,
    fallbackLng: langDefault,
    keySeparator: false, // we do not use keys in form messages.welcome
    supportedLngs: ['en', 'ru'],
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export const langInit =  langDefault;
export default i18n;