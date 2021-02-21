export interface IUser{
    name: string,
    isAuth: boolean,
    isLoading: boolean,
    token: string,
    email: string,
    preview?: string | undefined,
    infoDetail?: string,
    error: string,
    password: string
}

export interface ILoginData{
    token: string; 
    email: string; 
    preview: string; 
    refreshToken: string;
}

export interface IUserActionProps{
    email:string,
    password: string
}