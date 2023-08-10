import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SidebarAdmin from "../../components/SidebarAdmin";
import Headers from "../../components/Headers";
import { UserContext } from "../../App";
import axiosInstance from "../../configs/AxiosInstance";

export default function LayoutAdmin() {
  let { pathname } = useLocation();
  const { setUser, user } = useContext(UserContext);

  useEffect(() => {
    axiosInstance.get("getProfile").then((res) => setUser(res.data));
  }, []);

  return (
    <div className="flex ">
      <div className="lg:w-[18%] ">
        <SidebarAdmin />
      </div>
      <div className="lg:w-[82%] bg-based">
        <Headers />

        <div className="p-5  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
