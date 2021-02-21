import React from 'react';
import {
    FilledInput,
    FormControl,
    InputLabel
} from '@material-ui/core';
import { IFieldInput } from '../inputs.model';
import { useStylesInputDefault } from '../inputs.style';
import { useInputStyles} from './input-default.style'
import { useTranslation } from 'react-i18next';


const inputIdSlug = 'filled-adornment-';

const InputDefault = ({
    label,
    name,
    animClass='',
    type = 'text',
    value,
    errors,
    touched,
    handleChange,
    handleBlur
}: IFieldInput) => {

    const classes = useStylesInputDefault();
    const cl = useInputStyles();
    const [t] = useTranslation();
    
    return (
        <FormControl className={`${classes.formControl} ${cl.formControl} ${animClass}`} variant="filled">
            <InputLabel
                htmlFor={inputIdSlug + name}
                className={`${classes.formControlLabel} ${cl.label}`}
            >
                {t(`${label}`)}
            </InputLabel>
            <FilledInput
                id={inputIdSlug + name}
                name={name}
                className={classes.formControlInput}
                classes={{
                    root: cl.root,
                    //underline: cl.u
                }}
                type={type}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <span className={classes.formControlError}>
                {errors && touched && errors}
            </span>
        </FormControl>
    );
};

export { InputDefault};
