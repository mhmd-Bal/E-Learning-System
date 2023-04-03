import AdminPage from 'Pages/AdminPage';
import LoginPage from 'Pages/LoginPage';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
