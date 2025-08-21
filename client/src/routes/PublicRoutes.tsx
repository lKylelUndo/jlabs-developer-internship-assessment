import { useEffect } from "react";
import { useAuthContext } from "../context/AuthProvider";
import { Outlet, useNavigate } from "react-router-dom";

const PublicRoutes = () => {
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(auth.isAuthenticated ? "/homepage" : "/");
  }, [auth]);
  return !auth.isAuthenticated ? <Outlet /> : null;
};

export default PublicRoutes;
