import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Login } from './features/auth/Login';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './features/dashboard/Dashboard';
import { Leads } from './features/leads/Leads';
import { Clients } from './features/clients/Clients';
import { Pipeline } from './features/pipeline/Pipeline';
import { CalendarView } from './features/calendar/Calendar';
import { Tasks } from './features/tasks/Tasks';
import { Settings } from './features/settings/Settings';

// A wrapper component that checks for authentication
const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected layout wrapping CRM routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="leads" element={<Leads />} />
            <Route path="clients" element={<Clients />} />
            <Route path="pipeline" element={<Pipeline />} />
            <Route path="calendar" element={<CalendarView />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
