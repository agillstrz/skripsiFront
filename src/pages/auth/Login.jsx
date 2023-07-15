import React, { useContext, useState } from "react";
import Auth from "../../utils/Auth";
import AUTH from "../../apis/auth.api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Login({ setOpen }) {
  const [email, setEmail] = useState("agillstrz@gmail.com");
  const [password, setPassword] = useState("MyPassword321");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    AUTH.Login({ email, password }).then((res) => {
      if (Auth.getRoleAs() == 1) {
        setLoading(false);
        navigate("/admin");
      } else if (Auth.getRoleAs() == 0) {
        navigate("kujang");
        setLoading(false);
      }
    });
  };
  return (
    <div className="h-screen  top-0 fixed  z-[9999] w-full flex  items-center justify-center  bg-black/40 backdrop-blur-sm overflow-hidden">
      {/* <div className="flex     w-[30%] h-[80%] py-5 px-10 rounded-lg  bg-white shadow-lg   ">
        <div className=" justify-center  h-full  w-full flex    gap-y-2 flex-col   ">
          <div className="flex flex-col gap-y-2 items-center px-7">
            <h1 className="font-bold text-3xl tracking-wider">Login</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-y-5   w-full  h-full"
          >
            <div className="">
              <label htmlFor="" className="font-medium ">
                Email
              </label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none h-12 w-full flex items-center px-2 placeholder:font-medium rounded-md border"
                name="email"
                placeholder="Masukkan Email"
                id=""
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium ">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="outline-none h-12 w-full flex items-center px-2 placeholder:font-medium rounded-md border"
                name="password"
                placeholder="Masukkan Password"
                id=""
              />
            </div>
            <button
              type="submit"
              className="btn-primary px-4 text-sm rounded-lg py-2 font-bold"
            >
              Sign In
            </button>
          </form>
        </div>
      </div> */}

      <div className="w-[30%] h-[80%]   flex flex-col  relative  py-10 px-10 rounded-lg bg-white shadow-lg">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-0 top-0 text-xl font-bold px-3 py-2   cursor-pointer"
        >
          X
        </button>
        <div className="flex flex-col gap-y-2    items-center px-7">
          <h1 className="font-bold text-3xl tracking-wider">Login</h1>
          <img
            className="h-14"
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png?w=740&t=st=1687056454~exp=16870570SS4~hmac=fce15790883e1dea6242b625cd02d073df4418367f36dd2f9fe2ca027f36fd0f"
            alt=""
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-y-5 h-full  justify-center   w-full  "
        >
          <div className="">
            <label htmlFor="" className="font-medium ">
              Email
            </label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none h-12 w-full flex items-center px-2 placeholder:font-medium rounded-md border"
              name="email"
              placeholder="Masukkan Email"
              id=""
            />
          </div>
          <div>
            <label htmlFor="" className="font-medium ">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="outline-none h-12 w-full flex items-center px-2 placeholder:font-medium rounded-md border"
              name="password"
              placeholder="Masukkan Password"
              id=""
            />
          </div>
          <button
            type="submit"
            className={`${
              loading && ""
            } btn-primary px-4 text-sm flex justify-center rounded-lg py-2 font-bold`}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="text-lg animate-spin" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
