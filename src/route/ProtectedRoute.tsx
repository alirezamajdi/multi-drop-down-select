import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";
import LoginContext from "../context/loginContext";

// interface Props {
//   isAuthenticated: boolean;
//   authenticationPath: string;
//   outlet: JSX.Element;
// }
const ProtectedRoute: React.FC = () => {
  const loginCtx = useContext(LoginContext);
  return loginCtx.isLogin ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
