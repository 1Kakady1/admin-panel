import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStylesDropdown = makeStyles((theme: Theme) =>
    createStyles({
       dropdownWrapper:{
           width: "100%",
           overflow: 'hidden',
            '& .react-slidedown':{
                transitionDuration: '.5s',
                transitionTimingFunction: 'ease-in-out',
                overflow: 'hidden',
            },
       },
        dropdownTitleWrap:{
            display: 'flex',
            alignItems: 'center',
        },
        dropdownTitle:{
            color: "#000",
        },
        dropdownArrow:{
            transition: theme.transitions.create('transform', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            '& svg':{
               color: 'rgba(0, 0, 0, 0.54)'
            }
        },
        dropdownOpen:{
            transform: 'rotate(0deg)'
        },
        dropdownClose:{
            transform: 'rotate(90deg)'
        },
        dropdownButton:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    })
    
);
