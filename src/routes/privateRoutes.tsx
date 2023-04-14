import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface PrivateRoutesProps {
  children;
}
export const Private: React.FC<PrivateRoutesProps> = ({ children }) => {
  const user = useSelector((store: any) => store.user);

  if (!user.name) {
    return <Navigate to="/auth" />;
  }

  return children;
};
