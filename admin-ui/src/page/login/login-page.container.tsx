import React from 'react'
import { Login } from './login-page'
import { useDispatch} from 'react-redux';
import { toUserActions } from '../../store/user/user.reducer';

export const LoginContainer = () =>{
    
    const dispatch = useDispatch();
    const onLogin = ({email, password}: {email: string, password: string}) => dispatch(toUserActions.loginActionRequest({email, password}))
    return <Login onLogin={onLogin} />
}