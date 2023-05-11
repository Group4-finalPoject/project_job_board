import { Navigate } from "react-router-dom";
import Auth from '../utils/auth';

export const ProtectedRoute = ({ children }) => {
  const isLoggedIn = Auth.loggedIn()
  if (!isLoggedIn) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};