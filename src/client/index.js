
import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import { devToolsEnhancer } from 'redux-devtools-extension';
import '!style-loader!css-loader!rc-slider/assets/index.css';
import '!style-loader!css-loader!./index.css'
import '!style-loader!css-loader!./datepicker.css'
const preloadedState = window.__PRELOADED_STATE__
const store = createStore(rootReducer, preloadedState, devToolsEnhancer());

  hydrate(
    <Provider store={store}>
    <BrowserRouter>
      <App location={location} initUser={preloadedState} />
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );