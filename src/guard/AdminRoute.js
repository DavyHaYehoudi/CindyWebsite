import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthAdminContext } from "../context/AuthAdminProvider";

function AdminRoute({ children }) {
  const { isAuthenticated } = useContext(AuthAdminContext);
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/auth" replace />;
}

export default AdminRoute;
