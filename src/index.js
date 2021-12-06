import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history } from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './views/App';
import ScrollToTop from './ScrollToTop.js';

import './index.css';
import "./assets/scss/material-kit-pro-react.scss?v=1.9.0";
import "react-image-gallery/styles/css/image-gallery.css";

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <ScrollToTop>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ScrollToTop>  
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
