import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute({ adminUser, children }) {
  if (!adminUser) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;