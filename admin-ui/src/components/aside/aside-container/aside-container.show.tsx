import React from "react"
import {DiagramWidget} from "../widget-1/widget-diagram.componet"

export const GetWidget = ({widget,data}:{widget:string,data:any}):JSX.Element =>{
    switch(widget){
        case "DiagramWidget":
            return (<DiagramWidget data={data} />)
        default:
            return (<h1>Not found component: {widget}</h1>)
    }
}