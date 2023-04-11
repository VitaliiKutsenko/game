import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Private = ({ children }) => {
  const user = useSelector(store => store.user);

  if (!user.name) {
    return <Navigate to="/auth" />;
  }

  return children;
};
