import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../App";
import Headers from "../components/Headers";
import Sidebar from "../components/Sidebar";
import axiosInstance from "../configs/AxiosInstance";

export default function Layout() {
  const { setUser, user } = useContext(UserContext);

  useEffect(() => {
    axiosInstance.get("getProfile").then((res) => setUser(res.data));
  }, []);

  return (
    <div className="flex">
      <div className="lg:w-[18%] ">
        <Sidebar />
      </div>
      <div className="lg:w-[82%] bg-based">
        <Headers />

        <div className="p-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
