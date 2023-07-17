import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axiosInstance from "../../configs/AxiosInstance";
import POST from "../../apis/post.api";

export default function ModalDetailSiswa({ setOpen, data }) {
  console.log(data);
  return (
    <>
      <div className="h-screen flex backdrop-blur-sm justify-center items-center top-0 left-0 w-full bg-black/30 absolute ">
        <div className="px-5  rounded-md w-[44rem]  flex flex-col pb-5  relative bg-white ">
          <button
            onClick={() => setOpen(false)}
            className="flex justify-end text-[2rem] font-semibold cursor-pointer"
          >
            x
          </button>
          <div className="grid grid-cols-2 gap-4 ">
            <label
              htmlFor=""
              className="col-span-2 font-semibold border text-center"
            >
              Nama : {data?.nama}
            </label>
            <label className="border px-2 py-1 capitalize text-sm font-medium">
              email : {data?.email}
            </label>
            <label className="border px-2 py-1 capitalize text-sm font-medium">
              nomor hp : {data?.nomor_hp}
            </label>
            <label className="border px-2 py-1 capitalize text-sm font-medium">
              alamat : {data?.alamat}
            </label>
            <label className="border px-2 py-1 capitalize text-sm font-medium">
              Kelas : {data?.kelas.nama}
            </label>
            <label className="border px-2 py-1 capitalize text-sm font-medium">
              Ibu kandung : {data?.ibu_kandung}
            </label>
            <label className="border px-2 py-1 capitalize text-sm font-medium">
              Nik : {data?.nik}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
