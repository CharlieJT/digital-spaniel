import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Favicon from 'react-favicon';
import DigitalSpanielFavicon from './media/images/digitalSpanielFavicon.png';

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={DigitalSpanielFavicon}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
