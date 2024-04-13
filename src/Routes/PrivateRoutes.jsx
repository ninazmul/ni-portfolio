import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Audio } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center item-center my-52">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="orange"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
