import { createAction, createSlice,PayloadAction } from '@reduxjs/toolkit'
import { USER_KEY } from './user.const';
import {userInit} from './user.init'
import { ILoginData, IUser } from './user.model'

const loginActionRequest = (state:IUser, {payload}:{payload: {email: string, password: string}})=>{
  state.isLoading= true;
  state.email = payload.email;
  state.password = payload.password;
}

const loginRememberActionRequest = (state:IUser)=>{
  state.isLoading= true;
}

const loginActionRequestSuccess = (state:IUser, {payload}:{payload: ILoginData})=>{
  state.isLoading= false;
  state.isAuth = true;
  state.password = "";
  state.preview = payload.preview;
  state.email = payload.email;
  state.name = payload.name;
}
const loginActionRequestFailed = (state:IUser, {payload}:{payload: string})=>{
  state.isLoading = false;
  state.error = payload;
}

const logoutActionRequestSuccess = ()=>{
  return {
    ...userInit,
  }
}

export const userSlice = createSlice({
  name:  USER_KEY,
  initialState: userInit,
  reducers: {
    loginActionRequest,
    loginActionRequestSuccess,
    loginActionRequestFailed,
    loginRememberActionRequest,
    logoutActionRequestSuccess,
  }

})

export const toUserActions = {
  ...userSlice.actions,
  logoutActionRequest: createAction( 'userKey/logout')
};