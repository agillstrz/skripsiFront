import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axiosInstance from "../../configs/AxiosInstance";
import POST from "../../apis/post.api";

export default function ModalTambahSemester({ setMessage, setOpen }) {
  const handleYes = async (e) => {
    e.preventDefault();
    axiosInstance.post("semester").then((res) => {
      setMessage("Semester berhasil ditambahkan");
      setOpen(false);
    });
  };

  return (
    <>
      <div className="h-screen flex backdrop-blur-sm justify-center items-center top-0 left-0 w-screen bg-black/30 absolute ">
        <div className="px-5 gap-y-3 rounded-md h-36 w-[24rem]  flex flex-col items-center justify-center  bg-white ">
          <h1 className="font-medium text-md text-center">
            Yakin Untuk Menambahkan semester baru ? pastikan semester sebelumnya
            telah selesai
          </h1>
          <div className="flex gap-x-2 items-center">
            <button
              onClick={handleYes}
              className="bg-red-600 hover:bg-red-700 px-2 text-lg rounded-lg flex text-center py-1 font-bold transition-all duration-150 ease-linear text-white"
            >
              Yakin
            </button>
            <button
              onClick={() => setOpen(false)}
              className="bg-primary hover:bg-focus px-2 text-lg rounded-lg flex text-center py-1 font-bold transition-all duration-150 ease-linear text-white"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
