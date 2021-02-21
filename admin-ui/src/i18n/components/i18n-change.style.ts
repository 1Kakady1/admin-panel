import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {color_2,color_fff} from "../../constants/styles.const"
import {IStulesProps} from './i18n-change.model'

export const useStylesLangSelect = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width:   '92px',
            zIndex: (props:IStulesProps) => props.zIndex,
        },
        imgFlag:{
            width: '22px',
            height: '14px'
        },
        nameFlag:{
            color: color_fff,
            fontWeight: 700,
            marginLeft: '10px'
        },
        icon:{
            color: color_fff
        },
        paper:{
          backgroundColor: color_2
        }
    })
);

export const useSelectItem = makeStyles({
    root:{
      '&.Mui-selected':{
        backgroundColor: color_2,
        color: color_fff,
        '& span':{
          color: '#fff',
        }
      },
      '&.MuiListItem-button:hover':{
        backgroundColor: color_2,
        color: color_fff,
        '& span':{
          color: '#fff',
        }
      },
      '& span':{
        color: color_2
      }
    },
    gutters:{
      color: color_2
    }
});

export const useInputStyles = makeStyles({
    underline: {
      "&:before": {
        // normal
        borderBottom: "1px solid #fff"
      },
      "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
        // hover
        borderBottom: `1px solid #fff`
      }
    }
  });
