import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProvider from './contextWrappers/UserContextWrapper';
import LoginPage from './pages/LoginPage/LoginPage';
import UserPage from './pages/UserPage/UserPage';
import { StaticRoutes } from './routes';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path={StaticRoutes.login} element={<LoginPage />} />
          <Route path={StaticRoutes.user} element={<UserPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
