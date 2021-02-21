import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {drawerWidth,drawlerLinkBg,drawlerLinkBgHover,colorText} from '../../constants/styles.const'

export const useStylesDrawler = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: drawerWidth,
            },
            flexShrink: 0,
            whiteSpace: 'nowrap',
            position: 'absolute',
            [theme.breakpoints.up('md')]: {
                position: 'relative',
            },
        },
        drawerOpen: {
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: drawerWidth,
            },
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }) + '!important',
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }) + '!important',
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
        },
        drawerContainer: {
            overflowX: 'hidden',
        },
        dropdownWrapper:{
            display: 'flex',
            alignItems: "flex-start",
            flexDirection: 'column',
        },
        drawlerLink:{
            paddingLeft: 12,
            paddingBottom: '10px',
            paddingTop: '10px',
            backgroundColor: drawlerLinkBg,
            display: 'flex',
            alignItems: 'center',
            color: colorText,
            borderRadius: 0,
            transition: 'background-color 400ms ease, color 400ms ease, border-radius 200ms ease-in',
            '& svg':{
                transition: 'fill 400ms ease',
                fill: colorText
            },
            '&:hover':{
                borderRadius: 12,
                color: '#fff',
                backgroundColor: drawlerLinkBgHover,
                '& svg':{
                    fill: '#fff',
                    transition: 'fill 400ms ease'
                }
            }
        }
    })
    
);
