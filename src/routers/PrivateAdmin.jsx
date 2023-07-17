import React from "react";
import LayoutAdmin from "../pages/admin/LayoutAdmin";
import { Navigate } from "react-router-dom";
import Auth from "../utils/Auth";
function PrivateAdmin() {
  if (Auth.isAuthorization() && Auth.getRoleAs() == 0) {
    return <Navigate to="/kujang" replace />;
  }
  return (
    <>
      <LayoutAdmin />
    </>
  );
}

export default PrivateAdmin;
