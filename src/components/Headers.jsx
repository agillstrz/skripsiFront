import React, { useContext, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import Auth from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function Headers() {
  let navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const handleLogout = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };

  const { user } = useContext(UserContext);
  return (
    <div className="w-full h-12 border justify-end gap-x-2 items-center flex px-2 relative">
      <div className="avatar online placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
          <img className="w-full" src={user?.foto} alt="" />
        </div>
      </div>

      <div
        onClick={() => setOpen(true)}
        className="hover:bg-white/70 group transition-all duration-150 ease-out"
      >
        <label className="text-sm m-1 flex items-center  cursor-pointer">
          {user && user?.nama}
          {!user && <>loading</>}
          <TiArrowSortedDown />
        </label>
        <ul
          className={` absolute -bottom-[80] group-hover:visible invisible  bg-based right-0 menu p-2 shadow  rounded-box w-44 `}
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
