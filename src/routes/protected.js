import React from 'react';
import { useAuth } from '../authContext';
import { Navigate } from 'react-router-dom';
import Home from '../pages/home/home';

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Home /> : <Navigate to="/login" replace />;
};

export default Routes;
