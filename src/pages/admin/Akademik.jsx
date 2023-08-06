import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Akademik() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const menus = [
    {
      name: "semester",
      path: "semester",
    },
    {
      name: "Guru",
      path: "guru",
    },

    {
      name: "Pelajaran",
      path: "pelajaran",
    },
  ];

  return (
    <div className="">
      <div className="flex w-full justify-center mb-5 h-5">
        {menus.map((m, index) => (
          <div
            key={index}
            className="w-[33%] border flex justify-center items-center"
          >
            <button
              onClick={() => navigate(`${m.path}`)}
              className={`w-full font-semibold  capitalize text-md hover:bg-primary hover:text-white ${
                pathname.split("/").pop() == m.path && "bg-primary text-white"
              }`}
            >
              {m.name}
            </button>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[70%] border p-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
