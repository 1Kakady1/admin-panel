import React from "react"
interface IAsideHeaderProps{
    title: string,
    close: ()=>void
}
export const AsideHeader = ({title,close}:IAsideHeaderProps):JSX.Element =>{
    return(
        <div className="aside-header">
            <div className="aside-header__title">
                {title}
            </div>
            <div className="aside-header-column-right">
                <div className="aside-header__close" onClick={()=>{
                    close();
                }}>
                    x
                </div>
            </div>
        </div>
    )
}