import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import {colorText} from '../../constants/styles.const'

export const useStylesSliderContainer = makeStyles((theme: Theme) =>
    createStyles({
        sliderWrapper:{
            position: "relative",
            '& .slick-slider':{
                marginLeft: 22,
                marginRight: 22,
            }
        },
        sliderArrow:{
            position: "absolute",
            top: '50%',
            transform: 'translateX(-50%)'
        },
        sliderArrowPrew:{
            left: 20
        },
        sliderArrowNext:{
            right: -12
        },

    })
    
);
