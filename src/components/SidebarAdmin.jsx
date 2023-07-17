import React, { useState } from "react";
import { AiFillSchedule } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { SiGoogleclassroom, SiMicrosoftacademic } from "react-icons/si";
import { NavLink, useLocation } from "react-router-dom";
import foto from "../assets/image/logo.png";
export default function SidebarAdmin() {
  const { pathname } = useLocation();
  const sidebar = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <BiHomeAlt />,
    },

    {
      name: "Berita",
      path: "berita-admin",
      icon: <BsNewspaper />,
    },

    {
      name: "Jadwal Akademik",
      path: "jadwal-akademik",
      icon: <AiFillSchedule />,
    },
    {
      name: "akademik",
      path: "akademik/guru",
      icon: <SiMicrosoftacademic />,
    },
    {
      name: "kelas",
      path: "kelas",
      icon: <SiGoogleclassroom />,
    },
    {
      name: "Semua Siswa",
      path: "semua-siswa",
      icon: <IoMdPeople />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col gap-y-4 py-5 items-center bg-neutral text-white h-screen sticky top-0 ">
      <div className="bg-white">
        <img src={foto} className="h-16" alt="" />
      </div>
      <ul className="flex w-full  flex-col  ">
        {sidebar.map((m, index) => (
          <NavLink
            key={index}
            to={m.path}
            className={({ isActive }) =>
              isActive &&
              `${
                m.path === "/admin" ? "bg-neutral" : "bg-primary text-neutral"
              } `
            }
          >
            <span className="flex  items-center gap-x-2 px-5 py-2  transition-all duration-150 ease-out  hover:bg-primary hover:text-neutral capitalize text-md font-semibold  cursor-pointer ">
              {m.icon} {m.name}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
