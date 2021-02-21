import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStylesAsideContainer = makeStyles((theme: Theme) =>
    createStyles({
        aside:{
           position: "fixed",
           left: 0,
           top: 0,
           height: "100vh",
           width: 384,
           zIndex: 1000000,
           backgroundColor: "#fff",
           overflowY: "auto"
        },
        asideOverlay:{
            zIndex: 100000,
            position: "fixed",
            left: 0,
            top: 0,
            height: "100vh",
            width: "100%",
            background: '#467fcf'

        }
        
    })
    
);
