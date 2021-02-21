import { IUser } from "./user.model";

export const userInit:IUser = {
    name:'User name',
    isAuth: false,
    isLoading: false,
    token: '',
    email: 'User email',
    error: "",
    password: "",
}