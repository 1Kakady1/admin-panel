import React, { useState } from 'react';
import {
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel
} from '@material-ui/core';
import { IFieldInput } from '../inputs.model';
import { useStylesInputDefault } from '../inputs.style';
import {useInputStyles} from "./input-password.style"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useTranslation } from 'react-i18next';

const inputIdSlug = 'filled-adornment-';

const InputPassword = ({
    label,
    name,
    type = 'text',
    value,
    animClass="",
    errors,
    touched,
    handleChange,
    handleBlur
}: IFieldInput) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const classes = useStylesInputDefault();
    const [t] = useTranslation();
    const cl = useInputStyles();
    return (
        <FormControl className={`${classes.formControl} ${animClass}`} variant="filled">
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
                    focused: cl.focused
                    //underline: cl.underline
                }}
                type={showPassword ? 'text' : type}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => {
                                setShowPassword(!showPassword);
                            }}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />

            <span className={classes.formControlError}>
                {errors && touched && errors}
            </span>
        </FormControl>
    );
};

export {InputPassword};
