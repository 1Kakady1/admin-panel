import React from 'react'
import { Login } from './login-page'
import { useDispatch, useSelector} from 'react-redux';
import { toUserActions } from '../../store/user/user.reducer';
import { toUser } from '../../store/user/user.selector';

export const LoginContainer = () =>{
    
    const dispatch = useDispatch();
    const onLogin = ({email, password}: {email: string, password: string}) => dispatch(toUserActions.loginActionRequest({email, password}))
    const error = useSelector(toUser.error);
    const isLoading = useSelector(toUser.isLoading);

    return <Login 
        onLogin={onLogin} 
        error={error}
        isLoading={isLoading} 
    />
}