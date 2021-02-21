import React from 'react'
import { UserInfoSelect } from './user-info-select.componet'
import { useDispatch, useSelector } from 'react-redux';
import { toUser } from '../../store/user/user.selector';
import { toUserActions } from '../../store/user/user.reducer';
import { IUserInfoSelectContainer } from './user-info-selector.model';

export const UserInfoSelectContainer = ({zIndexMenu=1300}:IUserInfoSelectContainer ) =>{
    
    const preview = useSelector(toUser.preview) || "";
    const dispatch = useDispatch();
    const onSingOut = () => dispatch(toUserActions.logout());

    return <UserInfoSelect 
        zIndexMenu={zIndexMenu}
        singOut={onSingOut}
        userImg={preview}
    />
}