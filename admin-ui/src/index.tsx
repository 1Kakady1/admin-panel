import React from 'react';
import ReactDOM from 'react-dom';
import './i18n/i18n';
import {App} from './App';
import { Provider } from "react-redux";
import {store} from "./store/index"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
