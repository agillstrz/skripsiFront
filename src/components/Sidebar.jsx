import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import {
  BsCalendarWeek,
  BsFillFileEarmarkTextFill,
  BsJournalBookmark,
} from "react-icons/bs";
import foto from "../assets/image/logo.png";
import { CgProfile } from "react-icons/cg";
import { FaFileContract } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Auth from "../utils/Auth";
export default function Sidebar() {
  const sidebar = [
    {
      name: "Beranda",
      path: "/kujang",
      icon: <BiHomeAlt />,
    },
    {
      name: "Profil",
      path: "profile",
      icon: <CgProfile />,
    },
    {
      name: "pembayaran",
      path: "pembayaran",
      icon: <GiTakeMyMoney />,
    },
    {
      name: "jadwal pelajaran",
      path: "jadwal-pelajaran",
      icon: <BsJournalBookmark />,
    },
    {
      name: "nilai akademik",
      path: "nilai",
      icon: <BsFillFileEarmarkTextFill />,
    },
    {
      name: "kalender akademik ",
      path: "kalender",
      icon: <BsCalendarWeek />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };
  return (
    <div className="flex flex-col gap-y-4 py-5 items-center bg-neutral text-white h-screen sticky top-0 ">
      <div className="bg-white">
        <img src={foto} className="h-16" alt="" />
      </div>
      <ul className="flex w-full  flex-col  ">
        {sidebar.map((m, index) => (
          <NavLink
            to={m.path}
            key={index}
            className={({ isActive }) =>
              isActive &&
              `${
                m.path === "/kujang" ? "bg-neutral" : "bg-primary text-neutral"
              } `
            }
          >
            <span className="flex items-center gap-x-2 px-5 py-2  transition-all duration-150 ease-out  hover:bg-primary hover:text-neutral capitalize text-md font-semibold  cursor-pointer ">
              {m.icon} {m.name}
            </span>
          </NavLink>
        ))}
        <div className="w-full">
          <button
            onClick={toggleMenu}
            className="flex w-full justify-between items-center  px-5 py-2  transition-all duration-150 ease-out  hover:bg-primary hover:text-neutral capitalize text-md font-semibold cursor-pointer"
          >
            <p className="flex gap-x-2 items-center">
              <FaFileContract /> Ujian
            </p>
            <TiArrowSortedDown className={`${isOpen && "rotate-180"}`} />
          </button>
          {isOpen && (
            <>
              <Link
                to={"jadwal-ujian"}
                className="flex items-center gap-x-2 px-5 py-2  transition-all duration-150 ease-out  hover:bg-primary hover:text-neutral capitalize text-md font-semibold cursor-pointer"
              >
                <BsCalendarWeek /> Jadwal Ujian
              </Link>
              <Link
                to={"nilai-ujian"}
                className="flex items-center gap-x-2 px-5 py-2  transition-all duration-150 ease-out  hover:bg-primary hover:text-neutral capitalize text-md font-semibold cursor-pointer"
              >
                <BsCalendarWeek /> Nilai Ujian
              </Link>
            </>
          )}
          <button
            onClick={handleLogout}
            className="flex w-full gap-x-2  items-center  px-5 py-2  transition-all duration-150 ease-out  hover:bg-primary hover:text-neutral capitalize text-md font-semibold cursor-pointer"
          >
            <MdLogout />
            Logout
          </button>
        </div>
      </ul>
    </div>
  );
}
