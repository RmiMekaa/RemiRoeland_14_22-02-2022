import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import EmployeesPage from "../pages/EmployeesPage";
import Header from '../components/Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Employees" element={<EmployeesPage />} />
        {/* <Route component={ErrorPage} /> */}
      </Routes>
    </Router>
  );
}