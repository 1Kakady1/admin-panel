import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable} from 'rxjs';

import { userSingIn, checkUserRemember } from '../../services/api';
import { toUserActions} from './user.reducer';
import { toUser } from './user.selector';
import { setCookie } from '../../helpers/cookies';
import { TOKEN } from '../../constants/key.const';


export const userSetEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(
            toUserActions.loginActionRequest.type,
        ),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return userSingIn({email: toUser.email(state), password: toUser.password(state) || ''})
            .pipe(
                map((response) => {
                    if (response.error) {toUserActions.loginActionRequestFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data){

                        setCookie(TOKEN.REFRESH_TOKEN,response.data.refreshToken,80000);
                        localStorage.setItem(TOKEN.TOKEN, response.data.token);

                        return toUserActions.loginActionRequestSuccess(
                            response?.data
                        );
                    }
                    return toUserActions.loginActionRequestFailed(
                        'Data is empty'
                    );
                })
            );
        })
);

export const checkUserRememberSetEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(
            toUserActions.loginRememberActionRequest.type,
        ),
        switchMap(() => {
            return checkUserRemember()
            .pipe(
                map((response) => {
                    if (response.error) {toUserActions.loginActionRequestFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data){
                        localStorage.setItem(TOKEN.TOKEN, response.data.token);
                        return toUserActions.loginActionRequestSuccess(
                            response?.data
                        );
                    }
                    return toUserActions.loginActionRequestFailed(
                        'Data is empty'
                    );
                })
            );
        })
);



