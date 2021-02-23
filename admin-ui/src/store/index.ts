import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { slices } from './slices';
import rootEpic from './epics';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { getCookie } from '../helpers/cookies';
import { TOKEN } from '../constants/key.const';
import { toUserActions } from './user/user.reducer';

const epicMiddleware = createEpicMiddleware({
    dependencies: {
        storage: localStorage,
        location: window.location
    }
});

export const browserHistory = createBrowserHistory();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createRootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        ...slices
    });

const reduxRouterMiddleware = routerMiddleware(browserHistory);

export const store = configureStore({
    reducer: createRootReducer(browserHistory),
    middleware: [epicMiddleware, reduxRouterMiddleware,...getDefaultMiddleware()]
});
//@ts-ignore
epicMiddleware.run(rootEpic);

const refreshToken = getCookie(TOKEN.REFRESH_TOKEN);
const tokenAccess = localStorage.getItem(TOKEN.TOKEN);

if(refreshToken && tokenAccess){
    store.dispatch(toUserActions.loginRememberActionRequest())
}


