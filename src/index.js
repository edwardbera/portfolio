import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.css';
import App from './App';
import Loading from './components/Loading';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>
);

