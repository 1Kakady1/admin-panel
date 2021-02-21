import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import {colorText} from '../../constants/styles.const'

export const useStylesCardInfoMini = makeStyles((theme: Theme) =>
    createStyles({
        cardInfoMiniItem:{
            width: '100%',
            padding: 10,
            minHeight: 340,
            position: "relative",
            background: '#eaeaea3d',
            borderRadius: 10,
            paddingBottom: 50
        },
        cardInfoMiniHeader:{
            display: 'flex',
            paddingBottom: 16,
            alignItems: 'center'
        },
        cardInfoMiniImg:{
            borderRadius: '100%',
            width: 60,
            height: 60,
        },
        cardInfoMiniTitle:{
            paddingTop: 10,
            marginLeft: 20,
            color: "#000"
        },
        cardInfoMiniDesc:{
            lineHeight: '22px',
            fontSize: 12,
            [theme.breakpoints.up('md')]: {
                fontSize: 16
            },
        },
        cardInfoMiniLink:{
            color: '#fff',
            display: "flex",
            borderRadius: '12px',
            backgroundColor: '#467fcf',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            minWidth: 82,
            width: 82,
            position: 'absolute',
            bottom: 10,
            right: 20,
        }
    })
    
);
