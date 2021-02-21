import { Settings } from "react-slick";

export interface ISliderContainer{
    children: React.ReactNode,
    classContainer?: string,
    options?: Settings & {arrowsInclude?: boolean}
}

