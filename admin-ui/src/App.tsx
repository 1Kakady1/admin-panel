import React,{useEffect} from 'react';
import {HomeContainer} from "./page/home/home-page.container"
import {ProductCreateContainer} from "./page/products-create/product-create-page.container"
import {LoginContainer} from "./page/login/login-page.container"
import {Products} from "./page/products/products.component"
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./constants/theme.const"
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { browserHistory } from './store';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// global style animation
import './assets/sass/reset.sass'
import './assets/sass/animation.sass'
import { toUser } from './store/user/user.selector';
import { SplashScreen } from './components/splash-screen/splash-screen.component';
import { getCookie } from './helpers/cookies';
import { TOKEN } from './constants/key.const';
import { toSettingsActions } from './store/settings/settings.reducer';
import { toSettings } from './store/settings/settings.selector';

export  const App = () => {

  const refreshToken = getCookie(TOKEN.REFRESH_TOKEN);
  const tokenAccess = localStorage.getItem(TOKEN.TOKEN);
  const isAuth = useSelector(toUser.isAuth)
  const dispatch = useDispatch();
  const isInit = useSelector(toSettings.isInit)

  useEffect(() => {
    setTimeout(()=>{
       //@ts-ignore
      document.querySelector('body').style.overflow = '';
      if(!refreshToken || !tokenAccess){
        dispatch(toSettingsActions.initAction(false))
      }
    },200)
  }, []);

  return (
      <ThemeProvider theme={theme}>
          <SplashScreen isLoading={isInit} />
          {
          !isInit &&
            <ConnectedRouter  history={browserHistory}>
              <div className="App">

                {
                isAuth === true ? 

                  <Switch>
                      <Route exact key={"home-page"} path="/admin">
                        <HomeContainer />
                      </Route>

                      <Route exact key={"product-page"} path="/admin/products">
                          <Products />
                      </Route>

                      <Route exact key={"product-page"} path="/admin/products/create">
                        <ProductCreateContainer />
                      </Route>

                      <Route exact key={"Profile-page"} path="/admin/profile">
                        <h1>Profile</h1>
                      </Route>
                      
                      <Route exact key={"post-view-page"} path="/admin/products/:id">
                        
                      </Route>

                      <Redirect to={{pathname: "/admin",}} />
                  </Switch> 

                    : 

                  <Switch>
                    <Route path="/admin/login">
                      <LoginContainer />
                    </Route>
                    <Redirect to={{pathname: "/admin/login",}} />
                  </Switch>
                  
                }
              </div>
          </ConnectedRouter>
        }
      </ThemeProvider>
  );
}
