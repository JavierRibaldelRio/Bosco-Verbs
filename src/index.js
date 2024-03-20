import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from 'react-bootstrap/Button';
import reportWebVitals from './reportWebVitals';

// Boostrap y Bootswach
import "bootswatch/dist/lumen/bootstrap.min.css";

//

// Componentes
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button variant='primary' >asdfadsf</Button>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
