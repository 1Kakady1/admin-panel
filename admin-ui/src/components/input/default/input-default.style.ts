import {makeStyles} from '@material-ui/core/styles';
import { color_2 } from '../../../constants/styles.const';


export const useInputStyles = makeStyles({
    formControl:{
        width: '100%',
        maxWidth: '246px'
    },
    label:{
        fontWeight: 700
    },
    root:{
        border: `2px solid ${color_2}`,
        backgroundColor: '#fff!important',
        '&:hover':{
            backgroundColor: '#fff',
        }
    }
});
