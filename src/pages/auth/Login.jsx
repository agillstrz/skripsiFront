import React, { useContext, useEffect, useState } from "react";
import Auth from "../../utils/Auth";
import AUTH from "../../apis/auth.api";
import { Form, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { CONSTANT } from "../../utils/Constant";
import { ToastBar, Toaster, toast } from "react-hot-toast";

export default function Login({ setOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    errorEmail: "",
    errorPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [btn, setBtn] = useState(true);
  let navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
      setError({ ...error, errorEmail: "Email tidak valid." });
    } else {
      setError({ ...error, errorEmail: "" });
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(value)) {
      setError({
        ...error,
        errorPassword:
          "Password harus terdiri dari minimal 8 karakter, memiliki setidaknya 1 huruf kecil, 1 huruf besar, dan 1 angka.",
      });
    } else {
      setError({ ...error, errorPassword: "" });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${CONSTANT.BASEURL}auth/login`, {
        email,
        password,
      });
      if (res.status === 200) {
        Auth.storeInfoCookie(res.data);
        if (Auth.getRoleAs() == 1) {
          navigate("/admin");
        }
        if (Auth.getRoleAs() == 0) {
          navigate("/kujang");
        }
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      error.errorEmail == "" &&
      error.errorPassword == "" &&
      email !== "" &&
      password !== ""
    ) {
      setBtn(false);
    } else {
      setBtn(true);
    }
  }, [error]);

  return (
    <>
      <div className="h-screen  top-0 fixed  z-[9999] w-full flex  items-center justify-center  bg-black/40 backdrop-blur-sm overflow-hidden">
        <div className="w-[30%] h-[80%]   flex flex-col  relative  py-5 px-10 rounded-lg bg-white shadow-lg">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-0 top-0 text-xl font-bold px-3 py-2   cursor-pointer"
          >
            X
          </button>
          <div className="flex flex-col justify-evenly   h-full">
            <div className="flex flex-col gap-y-2     items-center px-7">
              <Toaster />
              <h1 className="font-bold text-3xl tracking-wider">Login</h1>
              <img
                className="h-14"
                src="https://cdn-icons-png.flaticon.com/512/295/295128.png?w=740&t=st=1687056454~exp=16870570SS4~hmac=fce15790883e1dea6242b625cd02d073df4418367f36dd2f9fe2ca027f36fd0f"
                alt=""
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col  gap-y-2   justify-center   w-full  "
            >
              <div className="">
                <label htmlFor="" className="font-medium ">
                  Email
                </label>
                <input
                  type="text"
                  onChange={handleEmailChange}
                  className="outline-none h-12 w-full flex items-center px-2 placeholder:font-medium rounded-md border"
                  name="email"
                  placeholder="Masukkan Email"
                  id=""
                />
                {error.errorEmail != "" && (
                  <p className="text-[12px] text-red-600">{error.errorEmail}</p>
                )}
              </div>
              <div>
                <label htmlFor="" className="font-medium ">
                  Password
                </label>
                <input
                  onChange={handlePasswordChange}
                  type="password"
                  className="outline-none h-12 w-full flex items-center px-2 placeholder:font-medium rounded-md border"
                  name="password"
                  placeholder="Masukkan Password"
                  id=""
                />
                {error.errorPassword != "" && (
                  <p className="text-[12px] text-red-600">
                    {error.errorPassword}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={btn}
                className={`${
                  loading && ""
                }  px-4 text-sm flex justify-center rounded-lg py-2 mt-5 font-bold ${
                  btn ? "bg-primary/90 text-white  border" : "btn-primary"
                }`}
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
      </div>
    </>
  );
}
