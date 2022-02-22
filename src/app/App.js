import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployeePage from "../pages/CreateEmployeePage";
import EmployeesPage from "../pages/EmployeesPage";
import Header from '../components/Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<CreateEmployeePage />} />
        <Route path="/Employees" element={<EmployeesPage />} />
      </Routes>
    </Router>
  );
}