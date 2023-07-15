import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import Auth from "../utils/Auth";

export default function Navbar({ setModal }) {
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
          Auth.getName()
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
