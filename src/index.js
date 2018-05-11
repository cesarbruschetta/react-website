import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
// https://css-tricks.com/intro-firebase-react
//https://github.com/n0ks/twitelum-react/blob/master/