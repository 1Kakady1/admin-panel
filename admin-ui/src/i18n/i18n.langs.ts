// import translationEN from '../../public/locales/en/translation.json';
// import translationRU from '../../public/locales/ru/translation.json';
import translationEN from './lang/en/translation.json';
import translationRU from './lang/ru/translation.json';
import {flag} from './constants/img.const'

export const langs = {
  en: {
    translation: translationEN
  },
  ru:{
   translation: translationRU
  }
};

export interface IlangsList {
  [key:string]:IlangsListItem
}

export interface IlangsListItem{
  imgFlag: string,
  title: string,
  id: string
}

export const langsList:IlangsList = {
    en:{
        imgFlag: flag.eng,
        title: 'ENG',
        id:'en'
    },
    ru:{
        imgFlag: flag.ru,
        title: 'RU',
        id:'ru'
    }
}