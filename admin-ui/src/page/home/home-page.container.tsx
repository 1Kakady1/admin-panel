import React from 'react'
import { Home } from './home-page'
import { useDispatch, useSelector } from 'react-redux';
import { toUser } from '../../store/user/user.selector';

export const HomeContainer = () =>{
    
    const name = useSelector(toUser.name)
    const dispatch = useDispatch();

    return <Home name={name} />
}