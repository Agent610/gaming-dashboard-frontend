import { Navigate } from "react-router-dom";
//import { isAuthenticated } from "../utils/auth.js";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
