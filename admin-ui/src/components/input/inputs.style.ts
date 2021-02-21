import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStylesInputDefault = makeStyles((theme: Theme) =>
    createStyles({

        formControlError: {
            color: 'red',
            textAlign: 'right',
            fontSize: '12px',
            position: 'absolute',
            bottom: '-19px',
            right: '0px',
            fontFamily: 'Lato',
            fontWeight: 800
            
        },

        formControl: {
            marginBottom: '25px',
            position: 'relative'
        },

        formControlInput: {
            maxHeight: '45px',
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
            '&::before': {
                content: '""',
                display: 'none'
            },
            '&::after': {
                content: '""',
                display: 'none'
            }
        },

        formControlLabel: {
            transform: 'translate(12px, 15px) scale(1)'
        }
    })
);
