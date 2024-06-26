import { FC } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactElement;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to='/login' replace={true} />;
  }
  return children;
};

export default PrivateRoute;
