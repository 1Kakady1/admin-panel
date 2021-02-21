import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {  MenuItem, Select,Input } from '@material-ui/core';
import {langsList} from '../i18n.langs'
import {langInit} from "../i18n"
import {setCookie} from '../../helpers/cookies'
import {useStylesLangSelect,useInputStyles,useSelectItem} from './i18n-change.style'
import { IPropsI18 } from './i18n-change.model';

export const ChangeLang:React.FC<IPropsI18> = ({animClass="",zIndexSelect=1300}) =>{

    const {i18n} = useTranslation();
    const [lang,setLang] = useState(langInit);

    const cl = useStylesLangSelect({zIndex: zIndexSelect});
    const inputStyles = useInputStyles();
    const itemSelectStyles = useSelectItem()
    
    const handlerChange = (event: React.ChangeEvent<{ value: unknown }>):void =>{
        const ln = event.target.value as string;
        setCookie("lang",ln,60000);
        setLang(ln)
        i18n.changeLanguage(ln);
    }
  
  
  return(
    <Select
        labelId="demo-simple-select-label"
        className={`${animClass}`}
        id="demo-simple-select"
        value={lang}
        classes={{
          root: cl.root,
          icon: cl.icon
        }}
        input={<Input classes={inputStyles} />}
        inputProps={{
            name: "lang",
            id: "lang"
        }}
        onChange={handlerChange}
    >
      { 
        Object.keys(langsList).map((key:string)=>{
          const {imgFlag,title,id}:{imgFlag:string,title:string,id:string} = langsList[key];
          return(
            <MenuItem 
              value={key} 
              key={id}
              classes={{
                gutters: itemSelectStyles.gutters,
                root: itemSelectStyles.root,
              }}
            >
              <img src={imgFlag} className={cl.imgFlag} alt={`flag ${id}`}/>
              <span className={cl.nameFlag}>{title}</span>
            </MenuItem>
          )
        }) 
      }
        
    </Select>

  )
}

 
