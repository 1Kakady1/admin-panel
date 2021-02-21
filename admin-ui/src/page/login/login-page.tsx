import React from "react"
import { Formik } from 'formik';
import { Button, Checkbox } from '@material-ui/core';
import {Helmet} from "react-helmet";

import {useTranslation} from 'react-i18next';

import {InputDefault} from '../../components/input/default/inputs.component'
import {InputPassword} from '../../components/input/password/inputs.component'
import { ChangeLang} from '../../i18n/components/i18n-change.component'

import {useStylesLoginPage} from "./login-page.styles"
import { IUser } from "../../store/user/user.model";
import {IErrorInput,IFormValue} from './login-page.model'

import {RegExpEmail} from '../../constants/regexp.const'
import {formError} from '../../constants/strings.const'

export const Login = ({
    onLogin
}:{
    onLogin: (value:{email: string, password: string}) => void
}) =>{

    const cl = useStylesLoginPage();
    const [checked, setChecked] = React.useState<boolean>(false);
    const [t] = useTranslation();
    
    const errorInput = (values: IFormValue): IErrorInput => {

        const errors: IErrorInput = {};

        if (!values.email) {
            errors.email = formError.req;
        } else if (
            !RegExpEmail.test(values.email)
        ) {
            errors.email = t('emailError');
        }

        if (!values.password) {
            errors.password = formError.req;
        } else if (values.password.length < 4) {
            errors.password = formError.lenMin;
        }
        return errors;
    };

    const handelSubmit = (values: IFormValue,{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }): void => {
        onLogin({email: values.email, password: values.password});
    };

    return(
        <div className={cl.main}>

            <Helmet>
                <meta charSet="utf-8" />
                <title>{t('loginPageTitle')}</title>
            </Helmet>

            <div className={`${cl.loginWrap} tilt-in-fwd-bl`}>

            <div className={`${cl.lang} swing-in-top-fwd anim-duration_4s delay_0_6s `}>
                <ChangeLang />
            </div>
            
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={(values) => errorInput(values)}
                    onSubmit={(values, { setSubmitting }) => {
                        handelSubmit(values, { setSubmitting });
                    }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form  onSubmit={handleSubmit} className={cl.form} autoComplete="off">

                        <div className={`${cl.pageName} tracking-in-contract-bck-top`}>{t('loginTitle')}</div>

                        <div className={cl.inputWrap}>
                            
                            <InputDefault
                                label={'Login'}
                                type={'email'}
                                name={'email'}
                                animClass={"slide-in-left delay_0_8s anim-duration_2s"}
                                value={values.email}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors.email}
                                touched={touched.email}
                            />

                            <InputPassword
                                label={'Password'}
                                type={'password'}
                                name={'password'}
                                animClass={"slide-in-right delay_0_8s anim-duration_2s"}
                                value={values.password}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors.password}
                                touched={touched.password}
                            />
                            <div className={cl.formNav}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`${cl.singIn} bounce-in-fwd anim-duration_2s delay_2s`}
                                >
                                    {t("login.singin")}
                                </Button>
                                {/* <div className={`${cl.rememberMe} bounce-in-fwd anim-duration_2s delay_2_2s`}>
                                    <Checkbox
                                        checked={checked}
                                        onChange={()=>{setChecked(!checked)}}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                    <span>
                                        {t("login.remember-me")}
                                    </span>
                                </div> */}

                            </div>

                            
                        </div>
                    </form>
                )}
            </Formik>
    
            </div>
        </div>
        
    )
}