import React, { useContext } from 'react';
import { AuthContext } from '../pages/providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
      const { user, loading } = useContext(AuthContext)
      if (loading) {
            return <progress className="progress w-56"></progress>
      }

      if (user?.email) {
            return children
      }
      return <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoute;