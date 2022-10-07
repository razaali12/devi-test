import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "../constants";
import { getCurrentAccessToken } from "../services/utils";
import AdminSharedLayout from "../sharedLayout";

const DashboardPrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = getCurrentAccessToken();

  return <AdminSharedLayout>{children}</AdminSharedLayout>;
};
const AuthPrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = getCurrentAccessToken();
  useEffect(() => {
    if (token) {
      navigate(DASHBOARD_ROUTE);
    }
  }, []);
  return children;
};
export { DashboardPrivateRoute, AuthPrivateRoute };
