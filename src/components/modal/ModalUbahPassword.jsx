import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axiosInstance from "../../configs/AxiosInstance";

export default function ModalUbahPassword({ setOpen, setMessage }) {
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [error, setError] = useState({
    errorEmail: "",
    errorPassword: "",
    newPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleNewPassword = (event) => {
    const value = event.target.value;
    setNewPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("auth/ubah-password", {
        current_password: password,
        new_password: newpassword,
      })
      .then((res) => {
        toast.success(res.data.message);
        setOpen(false);
      })
      .catch((err) => {
        setError({ ...error, newPassword: err.response.data.message });
      });
  };

  return (
    <>
      <Toaster />
      <div className="h-screen border border-black left-[18%]   top-0 fixed  z-[9999] w-[82%] flex  items-center justify-center  bg-black/40 backdrop-blur-sm overflow-hidden">
        <div className="w-[40%] h-[50%]   flex flex-col  relative  py-5 px-10 rounded-lg bg-white shadow-lg">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-0 top-0 text-xl font-bold px-3 py-2   cursor-pointer"
          >
            X
          </button>
          <div className="flex flex-col justify-evenly   h-full">
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col  gap-y-2   justify-center   w-full  "
            >
              <div className="">
                <label htmlFor="" className="font-medium ">
                  Password Sekarang
                </label>
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none h-12 w-full flex items-center px-2 placeholder:font-medium rounded-md border"
                  name="password"
                  placeholder="Masukkan Password Sekarang"
                  id=""
                />
              </div>
              <div>
                <label htmlFor="" className="font-medium ">
                  Password Baru
                </label>
                <input
                  onChange={handleNewPassword}
                  type="text"
                  className="outline-none h-12 w-full flex items-center px-2 placeholder:font-medium rounded-md border"
                  name="password"
                  placeholder="Masukkan Password"
                  id=""
                />
                {error.newPassword != "" && (
                  <p className="text-[12px] text-red-600">
                    {error.newPassword}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className={`${
                  loading && ""
                }  px-4 text-sm flex justify-center rounded-lg py-2 mt-5 font-bold btn-primary`}
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="text-lg animate-spin" />
                ) : (
                  "Simpan"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
