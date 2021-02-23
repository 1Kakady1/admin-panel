import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStylesSplash = makeStyles((theme: Theme) =>
    createStyles({
        splash:{
            width: "100%", 
            height: "100vh", 
            backgroundColor: '#fff', 
            position: 'fixed', 
            left: 0, top: 0, 
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        svg:{
            width: "320px",
            height: "320px",
            "&>path":{
                fill: "#467fcf"
            }
        }

    })
    
);
