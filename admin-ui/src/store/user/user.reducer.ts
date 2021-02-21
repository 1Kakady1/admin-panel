import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { USER_KEY } from './user.const';
import {userInit} from './user.init'
import { ILoginData, IUser,IUserActionProps } from './user.model'

const loginReducer = (state:IUser,action:PayloadAction<IUserActionProps>) =>{
  state.isAuth = true;
}

const logoutReducer = (state:IUser)=>{
    state.isAuth = false;
}

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
  state.token = payload.token;
  state.preview = payload.preview;
  state.email = payload.email;
}
const loginActionRequestFailed = (state:IUser, {payload}:{payload: string})=>{
  state.isLoading = false;
  state.error = payload;
}

export const userSlice = createSlice({
  name:  USER_KEY,
  initialState: userInit,
  reducers: {
    login: loginReducer,
    logout: logoutReducer,
    loginActionRequest,
    loginActionRequestSuccess,
    loginActionRequestFailed,
    loginRememberActionRequest
  }

})

export const toUserActions = {
  ...userSlice.actions
};