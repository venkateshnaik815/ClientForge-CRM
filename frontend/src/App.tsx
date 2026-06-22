import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './features/auth/Login';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './features/dashboard/Dashboard';
import { Leads } from './features/leads/Leads';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected layout wrapping CRM routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
          {/* Placeholders for future routes */}
          <Route path="clients" element={<div className="p-4">Clients Component Coming Soon</div>} />
          <Route path="calendar" element={<div className="p-4">Calendar Component Coming Soon</div>} />
          <Route path="tasks" element={<div className="p-4">Tasks Component Coming Soon</div>} />
          <Route path="settings" element={<div className="p-4">Settings Component Coming Soon</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
