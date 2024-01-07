import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Pages/Hooks/useAdmin";
import useAuth from "../Pages/Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user } = useAuth(); 
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default AdminRoute;
