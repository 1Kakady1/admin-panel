import React from 'react'
import { Link } from 'react-router-dom';
import { ICartInfoMiniProps,} from './card-info-mini.model'
import {useStylesCardInfoMini} from './card-info-mini.style'
import {noImage} from "../../constants/img.const"

export const CardInfoMini = ({preview=noImage,desc,title,link="#",titleBtn="More"}:ICartInfoMiniProps):JSX.Element =>{
    const cl = useStylesCardInfoMini();
    return(

        <div className={cl.cardInfoMiniItem}>
            <div className={cl.cardInfoMiniHeader}>
                <img src={preview === null ? noImage :  preview} alt="card info mini" className={cl.cardInfoMiniImg}/>
                <h3 className={cl.cardInfoMiniTitle}>
                    {title}
                </h3>
            </div>
            <p className={cl.cardInfoMiniDesc}>
                {desc.length > 500 ? desc.substr(0, 500)+"...":desc}
            </p>

            <Link className={cl.cardInfoMiniLink} to={link}>
                {titleBtn}
            </Link>

        </div>

    )
}