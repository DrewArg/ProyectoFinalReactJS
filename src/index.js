import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestoreApp } from './database/config'

getFirestoreApp();


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

reportWebVitals();
