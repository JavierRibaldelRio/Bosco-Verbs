// Boostrap y Bootswach
import "bootswatch/dist/lumen/bootstrap.min.css";

// Importa React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals';

// Componentes
import VerbsList from './pages/Verbs-List';
import TestGenerator from './pages/Test-Generator';
import IrregularVerbsGame from './pages/Irregular-Verbs-Game';
import Header from "./components/Header";
import Footer from "./components/Footer";

// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

};

console.log('firebaseConfig :>> ', firebaseConfig);

// Initialize Firebase and analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/verb-list' element={<VerbsList />} />
          <Route path='/test-generator' element={<TestGenerator />} />
          <Route path='/game' element={<IrregularVerbsGame />} />
        </Routes>
      </BrowserRouter>
    </main>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
