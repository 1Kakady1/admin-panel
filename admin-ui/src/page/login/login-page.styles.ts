import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {loginBg,color_op_8, color_2} from "../../constants/styles.const"

export const useStylesLoginPage = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              margin: theme.spacing(1),
              width: '25ch',
            },
        },
        main: {
            backgroundImage: `url(${loginBg})`,
            height: '100vh',
            width: '100%',
            position: 'relative',
            backgroundSize: 'cover',
            overflow: 'hidden'
        },
        loginWrap:{
            overflow: 'hidden',
            maxWidth: '596px',
            width: '100%',
            height: '100vh',
            position: "absolute",
            left: '0%',
            top: '0%',
            transform: 'translate(0%,0%)',
            //borderRadius: '0px 20px 20px 0px',
            backgroundColor: color_op_8,
            zIndex: 3,
        },
        pageName:{
            textAlign: 'center',
            fontSize: '42px',
            color: '#fff',
            fontWeight: 600,
            marginBottom: '58px',
            animationDelay: '0.6s',
        },
        inputWrap:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        lang:{
            position: 'absolute',
            top: '0px',
            right: '0px'
        },
        form:{
            padding: '16px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '286px'
        },
        formNav:{
            display: "flex",
            alignItems: 'center',
            justifyContent: "space-between",
            width: '100%'
        },
        rememberMe:{
            display: "flex",
            alignItems: 'center',
            '& span':{
                color: '#fff'
            }
        },
        singIn:{
            backgroundColor: '#fff',
            fontWeight: 700,
            color: 'rgba(0, 0, 0, 0.54)',
            "&:hover":{
                backgroundColor: color_2,
                color: "#fff"
            }
        }
        
    })
);
