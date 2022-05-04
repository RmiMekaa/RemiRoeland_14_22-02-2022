import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; //Use HashRouter instead of BrowserRouter to handle routing in github page.
import { CreateEmployeePage } from "./pages/CreateEmployeePage";
import { EmployeesPage } from "./pages/EmployeesPage";
import { Header } from './components/Header';
import './sass/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/Employees" />} />
        <Route path="/Create-employee" element={<CreateEmployeePage />} />
        <Route path="/Employees" element={<EmployeesPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);