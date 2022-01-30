// Importing Main Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Importing Components
import App from './components/App';

// Importing i18n to Be Bundled 
import './components/utils/i18n';

// Importing Main CSS Files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import './assets/css/style.css';

// Importing Bootstrap JS File
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

