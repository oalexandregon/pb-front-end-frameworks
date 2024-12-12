import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const session = JSON.parse(localStorage.getItem('session'));

  if (!session || !session.loggedIn) {
    return <Navigate to="/signIn" />;
  }

  return children;
};

export default ProtectedRoute;
