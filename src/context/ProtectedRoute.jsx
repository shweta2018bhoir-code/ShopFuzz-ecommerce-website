import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // or your auth logic

function ProtectedRoute({ children }) {

  const { user } = useAuth(); // user = logged in user

  if (!user) {
    return <Navigate to="/Login" />;
  }

  return children;
}

export default ProtectedRoute;