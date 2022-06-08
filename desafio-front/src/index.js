import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <MainRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
