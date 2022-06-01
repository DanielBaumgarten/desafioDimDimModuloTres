import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import SignIn from './pages/SignIn';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>
);