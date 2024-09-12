import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import { StaticRoutes } from '../../routes';

const UserPage: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return <div>Not logged in</div>;
  }

  const handleLogout = () => {
    logout();
    navigate(StaticRoutes.login);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
