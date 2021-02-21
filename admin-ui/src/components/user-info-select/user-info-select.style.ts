import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {color_2} from '../../constants/styles.const'
export const useStylesUserSelectInfo = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        
        },
        userInfoLink:{
            display: 'flex',
            alignItems: 'center',
        },
        userInfoLinkImg:{
            width: 34,
            height: 34,
            borderRadius: 34,
            border: `1px solid ${color_2}`
        },
        userInfoLinkTitle:{
            color: '#000',
            marginLeft: 12
        },
        MenuItemGutters:{
            display: 'flex',
            justifyContent: 'center'
        }

    })
    
);
