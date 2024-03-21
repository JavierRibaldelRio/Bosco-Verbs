// Importa React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals';

// Boostrap y Bootswach
import "bootswatch/dist/lumen/bootstrap.min.css";

//

// Componentes
import VerbsList from './pages/Verbs-List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/verb-list' element={<VerbsList />} />
        </Routes>
      </BrowserRouter>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
