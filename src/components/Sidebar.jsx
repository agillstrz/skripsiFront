import React, { useContext, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FaFileContract } from "react-icons/fa";
import {
  BsCalendarWeek,
  BsFillFileEarmarkTextFill,
  BsJournalBookmark,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrDocumentTime } from "react-icons/gr";
import { MdKeyboardArrowDown, MdLogout } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../App";

export default function Sidebar() {
  const { pathname } = useLocation();

  const sidebar = [
    {
      name: "Beranda",
      path: "",
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
  console.log(sidebar[0].path == "");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col gap-y-4 py-5 items-center bg-neutral text-white h-screen sticky top-0 ">
      <div>
        <span className="font-extrabold text-primary ">Kujang</span>
      </div>
      <ul className="flex w-full  flex-col  ">
        {sidebar.map((m, index) => (
          // <Link
          //   to={m.path}
          //   className={`${
          //     pathname == m.path && "text-neutral bg-primary"
          //   } flex items-center gap-x-2 px-5 py-2  transition-all duration-150 ease-out  hover:bg-primary hover:text-neutral capitalize text-md font-semibold  cursor-pointer`}
          //   key={m.name}
          // >
          //   {m.icon} {m.name}{" "}
          // </Link>
          <NavLink
            to={m.path}
            key={index}
            className={({ isActive }) =>
              isActive &&
              `${m.path == "" ? "bg-neutral" : "bg-primary text-neutral"} `
            }
          >
            <span className="flex items-center gap-x-2 px-5 py-2  transition-all duration-150 ease-out  hover:bg-primary hover:text-neutral capitalize text-md font-semibold  cursor-pointer ">
              {" "}
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
            onClick={toggleMenu}
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
