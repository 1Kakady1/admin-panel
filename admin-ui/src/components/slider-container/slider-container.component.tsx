import React,{useRef} from "react"
import Slider from "react-slick";
import "../../assets/sass/slick/slick.scss"
import "../../assets/sass/slick/slick-theme.scss"
import {ISliderContainer} from "./slider-container.model"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useStylesSliderContainer} from "./slider-container.style"

const SliderWrap:React.FC<ISliderContainer> = ({children,classContainer="slider-container",options={arrowsInclude:false}}) =>{
    const cl = useStylesSliderContainer();

    const settingDefalt = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
            },            
          ]
    };
    const sliderRef = useRef(null);
    const setting =  Object.assign(settingDefalt,options)
    
    return(
        <div className={cl.sliderWrapper}>
            {
                setting.arrowsInclude && <div onClick={()=>{
                    //@ts-ignore
                    sliderRef.current.slickPrev();
                }} className={`${cl.sliderArrowPrew} ${cl.sliderArrow}`}>
                    <ArrowBackIosIcon />
                </div>
            }

            <Slider ref={sliderRef} className={classContainer} {...setting}>
                {children}
            </Slider>

            {
                 setting.arrowsInclude  && <div onClick={()=>{ 
                    //@ts-ignore
                    sliderRef.current.slickNext();
                }} 
                 className={`${cl.sliderArrowNext} ${cl.sliderArrow}`}>
                        <ArrowForwardIosIcon />
                 </div>
            }

        </div>

    );
}

export const SliderContainer = React.memo(SliderWrap)