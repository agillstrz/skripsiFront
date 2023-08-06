import React, { useContext, useState } from "react";
import { TiArrowBackOutline, TiArrowSortedDown } from "react-icons/ti";
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
    <div className="w-full h-12 border justify-between gap-x-2 items-center flex px-2 relative">
      <div onClick={() => navigate(-1)}>
        <TiArrowBackOutline
          size={40}
          className="cursor-pointer hover:text-primary"
        />
      </div>
      <div className="flex">
        <div className="avatar online placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <img
              className="w-full"
              src={
                user.foto
                  ? user.foto
                  : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.1210189538.1666932477&semt=ais"
              }
              alt=""
            />
          </div>
        </div>

        <div
          onClick={() => setOpen(true)}
          className="hover:bg-white/70 group transition-all duration-150 ease-out"
        >
          <label className="text-sm m-1 flex items-center  cursor-pointer">
            {Auth.getName()}
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
    </div>
  );
}
