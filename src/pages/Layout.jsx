import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Headers from "../components/Headers";
import Welcome from "../components/Welcome";
import Fetcher from "../hooks/Fetcher";
import Auth from "../utils/Auth";
import { UserContext } from "../App";
import axiosInstance from "../configs/AxiosInstance";

export default function Layout() {
  let { pathname } = useLocation();
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
        {pathname == "/" && <Welcome />}

        <div className="p-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
