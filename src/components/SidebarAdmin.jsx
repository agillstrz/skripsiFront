import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import {
  BsCalendarWeek,
  BsFillFileEarmarkTextFill,
  BsJournalBookmark,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaFileContract } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function SidebarAdmin() {
  const { pathname } = useLocation();
  const sidebar = [
    {
      name: "Beranda",
      path: "/admin",
      icon: <BiHomeAlt />,
    },
    {
      name: "Kategori Berita",
      path: "kategori-berita",
      icon: <BiHomeAlt />,
    },
    {
      name: "Berita",
      path: "berita-admin",
      icon: <BiHomeAlt />,
    },

    {
      name: "Jadwal Akademik",
      path: "jadwal-akademik",
      icon: <GiTakeMyMoney />,
    },
    {
      name: "akademik",
      path: "akademik/guru",
      icon: <GiTakeMyMoney />,
    },
    {
      name: "kelas",
      path: "kelas",
      icon: <GiTakeMyMoney />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col gap-y-4 py-5 items-center bg-neutral text-white h-screen sticky top-0 ">
      <div>Logo</div>
      <ul className="flex w-full  flex-col  ">
        {sidebar.map((m, index) => (
          <NavLink
            key={index}
            to={m.path}
            className={({ isActive }) =>
              isActive ? "bg-primary text-neutral " : ""
            }
          >
            <span className="flex items-center gap-x-2 px-5 py-2  transition-all duration-150 ease-out  hover:bg-primary hover:text-neutral capitalize text-md font-semibold  cursor-pointer ">
              {m.icon} {m.name}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
