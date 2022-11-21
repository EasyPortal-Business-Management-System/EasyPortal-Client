import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute({ loggedInUser, children }) {
  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;