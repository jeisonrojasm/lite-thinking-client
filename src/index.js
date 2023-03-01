import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
// import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import NavBar from "./components/NavBar";
import EnterpriseList from './components/EnterpriseList';
import EnterpriseForm from './components/EnterpriseForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path='/' element={<EnterpriseList />} />
        <Route path='/enterpriseForm' element={<EnterpriseForm />} />
        <Route path='/enterpriseUpdate/:nit' element={<EnterpriseForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
