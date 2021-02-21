import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {boxShadowContent,contentBg} from '../../constants/styles.const'
export const useStylesContainer= makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        contentWrap: {
            marginTop: '60px',
            flexGrow: 1,
            marginLeft: "57px",
            padding: theme.spacing(2),
            backgroundColor: contentBg,
            minHeight: 'calc(100vh - 64px)',
            overflow: 'hidden',
            [theme.breakpoints.up('md')]: {
                marginLeft: "0px",
            },
        },
        content:{
            backgroundColor: "#fff",
            padding: theme.spacing(2),
            boxShadow:  boxShadowContent,
            width: '100%',
        }
    })
    
);
