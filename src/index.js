// Importing Main Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Importing Components
import App from './components/App';

// Importing Main CSS Files
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import './assets/css/style.css';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

