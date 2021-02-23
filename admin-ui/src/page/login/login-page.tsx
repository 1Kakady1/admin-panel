import React from "react"
import { Formik } from 'formik';
import { Button, Fade} from '@material-ui/core';
import {Helmet} from "react-helmet";

import {useTranslation} from 'react-i18next';

import {InputDefault} from '../../components/input/default/inputs.component'
import {InputPassword} from '../../components/input/password/inputs.component'
import { ChangeLang} from '../../i18n/components/i18n-change.component'

import {useStylesLoginPage} from "./login-page.styles"
import {IFormValue} from './login-page.model'
import { loginSchema } from "./login-page.schema";

export const Login = ({
    onLogin,
    error,
    isLoading
}:{
    onLogin: (value:{email: string, password: string}) => void;
    error: string;
    isLoading: boolean;
}) =>{

    const cl = useStylesLoginPage();
    const [t] = useTranslation();
    
    const handelSubmit = (values: IFormValue): void => {
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
                    validationSchema={loginSchema}
                    onSubmit={(values) => {
                        handelSubmit(values);
                    }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
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
                                    disabled={isLoading}
                                    className={`${cl.singIn} bounce-in-fwd anim-duration_2s delay_2s`}
                                >
                                    {t("login.singin")}
                                </Button>
                                <Fade in={!!error}>
                                    <div className={cl.error}>{error}</div>
                                </Fade>
                            </div>

                        </div>
                    </form>
                )}
            </Formik>
    
            </div>
        </div>
        
    )
}