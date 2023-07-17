import React, { useContext, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import Auth from "../utils/Auth";
import { UserContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ setModal }) {
  let navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const handleLogout = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };

  return (
    <div className="flex z-[999] font-bold  justify-between px-20 shadow-md absolute w-full text-primary backdrop-blur-sm  py-5">
      <div>Kujang</div>
      {/* <ul className="flex items-center gap-x-2">
        <li className="">Home</li>
      </ul> */}
      <div className="flex gap-x-1 items-center relative">
        {/* <label>agillstrz</label>
        <TiArrowSortedDown /> */}
        {Auth.isAuthorization() ? (
          <>
            <div className=" group transition-all duration-150 ease-out">
              <label className="text-sm m-1 flex items-center  cursor-pointer">
                {Auth.getName()}
                <TiArrowSortedDown />
              </label>
              <ul
                className={` absolute -bottom-[80] text-sm text-neutral group-hover:visible invisible  bg-white right-0 menu p-2 shadow  rounded-box w-44 `}
              >
                <li>
                  <Link to={"kujang"}>Kujang Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <button className="font-bold " onClick={() => setModal(true)}>
            Login
          </button>
        )}
        {/* <div className="absolute w-full h-12 bg-black -bottom-12"></div> */}
      </div>
    </div>
  );
}
