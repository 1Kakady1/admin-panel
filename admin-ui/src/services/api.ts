import { from, Observable, of, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { TOKEN } from "../constants/key.const";
import {getCookie} from "../helpers/cookies"
import { ILoginData } from "../store/user/user.model";

const API_PREFIX = "/api/admin";

export interface IResponse<TMeta, TError, TData> {
    meta?: TMeta;
    error?: TError;
    data?: TData;
}

const getToken = () =>{

  const refreshToken = getCookie(TOKEN.REFRESH_TOKEN);
  const accessToken = localStorage.getItem(TOKEN.TOKEN);

  return {
    refreshToken,
    accessToken
  }

}

function baseRequest<TMeta, TError, TData, TBody extends object>(
  url: string,
  method: string,
  body: TBody
): Observable<IResponse<TMeta, TError, TData>> {
  const lang:string = getCookie('lang') !== undefined ? getCookie('lang') as string : "ru";
  return from(
      window.fetch(`${API_PREFIX}/${url}`, {
          method: method,
          body: JSON.stringify({...body,...getToken(), lang}),
          headers: {
              'Content-Type': 'application/json',
          }
      })
  ).pipe(
      switchMap((response) =>
          parseResponse<TMeta, TError, TData>(response)
      ),
      catchError((err: TError) =>
          requestError<TMeta, TError, TData>(err)
      )
  );
  
  function parseResponse<TMeta, TError, TData>(
    response: Response
  ): Observable<IResponse<TMeta, TError, TData>> {
    if (response.status === 200) {
        return from(response.json());
    } else {
        return throwError(response.statusText);
    }
  }
  
  function requestError<TMeta, TError, TData>(
    err: TError
  ): Observable<IResponse<TMeta, TError, TData>> {
    return of({
        error: err
    });
  }

}

export const userSingIn = ({email, password}: {email: string, password: string}): Observable<IResponse<{}, string, ILoginData>> =>{
    return baseRequest('/auth/login',"POST" ,{email, password})
}

export const checkUserRemember = (): Observable<IResponse<{}, string, ILoginData>> =>{
  return baseRequest('/auth/remember-me',"POST" ,{});
}

export const userLogout = (): Observable<IResponse<{}, string, ILoginData>> =>{
  return baseRequest('/auth/logout',"POST" ,{});
}

// export const getHomeData = (_token:string="test",location:string=lang) =>{
//     return instance.post('/home', {_token,location})
// }

