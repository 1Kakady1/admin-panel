import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStylesAppBar = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        rootUserSelect:{
            zIndex: 1301
        },
        rightWrap:{
            display: 'flex',
            alignItems: 'center',
        }
    })
    
);
