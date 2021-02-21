//import {useStylesCardInfoMini} from './card-info-mini.style'
export interface ICartInfoMiniProps{
    [x: string]: any;
    preview?: string
    desc: string,
    title: string,
    link?: string,
    titleBtn?: string
}

export interface ICardData{
    count: number,
    rows: ICartInfoMiniProps
}

export interface ICartInfoMiniContent{
    img?: string
    desc: string,
    title: string,
    classes?: any
}