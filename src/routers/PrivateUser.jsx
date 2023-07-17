import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Auth from "../utils/Auth";
function PrivateUser() {
  if (!Auth.isAuthorization()) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Layout />
    </>
  );
}

export default PrivateUser;
