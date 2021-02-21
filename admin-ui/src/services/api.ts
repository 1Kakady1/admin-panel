import axios from "axios";
import { from, Observable, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { TOKEN } from "../constants/key.const";
import {getCookie} from "../helpers/cookies"
import { ILoginData } from "../store/user/user.model";

const lang:string = getCookie('lang') !== undefined ? getCookie('lang') as string : "ru";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/admin',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'},
});

export interface IResponse<TMeta, TError, TData> {
    meta?: TMeta;
    error?: TError;
    data?: TData;
}

export const userSingIn = ({email, password}: {email: string, password: string}): Observable<IResponse<{}, string, ILoginData>> =>{
    return from(instance.post('/auth/login', {email, password})).pipe(
      switchMap((res) => {
        console.log("res", res)
        const {email,preview,accessToken, refreshToken} = res.data
        return of({data: {token: accessToken, email, preview, refreshToken}})
      }),
      catchError((e)=> of({error: e}))
    )
}

export const checkUserRemember = (): Observable<IResponse<{}, string, ILoginData>> =>{

  const refreshToken = getCookie(TOKEN.REFRESH_TOKEN);
  const tokenAccess = localStorage.getItem(TOKEN.TOKEN);

  return from(instance.post('/auth/remember-me', {refreshToken, accessToken: tokenAccess})).pipe(
    switchMap((res) => {
      const {email,preview,accessToken, refreshToken} = res.data
      return of({data: {token: accessToken, email, preview, refreshToken}})
    }),
    catchError((e)=> of({error: e}))
  )
}

export const getHomeData = (_token:string="test",location:string=lang) =>{
    return instance.post('/home', {_token,location})
}

