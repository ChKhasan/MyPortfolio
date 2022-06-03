import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedAuth = () => {
  const auth = useAuth();
  return auth ? <Navigate to="/messages" /> : <Outlet />;
};

export default ProtectedAuth;
