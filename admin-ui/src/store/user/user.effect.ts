import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable} from 'rxjs';

import { userSingIn, checkUserRemember, userLogout } from '../../services/api';
import { toUserActions} from './user.reducer';
import { toUser } from './user.selector';
import { deleteCookie, setCookie } from '../../helpers/cookies';
import { TOKEN } from '../../constants/key.const';
import { toSettingsActions } from '../settings/settings.reducer';


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
                    if (response.error) {
                        return toUserActions.loginActionRequestFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data){

                        setCookie(TOKEN.REFRESH_TOKEN,response.data.refreshToken,80000);
                        localStorage.setItem(TOKEN.TOKEN, response.data.accessToken);

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

export const userLogoutEffect = (
    action$: ActionsObservable<Action>,
): Observable<Action> =>
    action$.pipe(
        ofType(
            toUserActions.logoutActionRequest,
        ),
        switchMap(() => {
            return userLogout()
            .pipe(
                map((response) => {

                    deleteCookie(TOKEN.REFRESH_TOKEN);
                    localStorage.removeItem(TOKEN.TOKEN);

                    return toUserActions.logoutActionRequestSuccess()
                })
            );
        })
);

export const checkUserRememberSetEffect = (
    action$: ActionsObservable<Action>,
): Observable<Action | Action[]> =>
    action$.pipe(
        ofType(
            toUserActions.loginRememberActionRequest.type,
        ),
        switchMap(() => {
            return checkUserRemember()
            .pipe(
                switchMap((response) => {
                    if (response.error) {
                        return [
                            toUserActions.loginActionRequestFailed(response.error.toString()),
                            toSettingsActions.initAction(false),
                        ];
                    }

                    if (response.data){
                        localStorage.setItem(TOKEN.TOKEN, response.data.accessToken);
                        return [
                            toUserActions.loginActionRequestSuccess(response?.data),
                            toSettingsActions.initAction(false)
                        ];
                    }
                    return [
                        toUserActions.loginActionRequestFailed('Data is empty'),
                        toSettingsActions.initAction(false)
                    ];
                })
            );
        })
);



