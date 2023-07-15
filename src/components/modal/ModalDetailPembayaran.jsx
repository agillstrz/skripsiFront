import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
export default function ModalDetailPembayaran({ setOpen }) {
  return (
    <div className="h-screen flex justify-center items-center top-0 left-0 w-screen bg-black/30 absolute ">
      <div className="w-1/2  h-[70%] bg-white p-5">
        <div className="flex w-full mb-2 items-center justify-between">
          <h1 className="lg:text-2xl font-bold">Detail Pembayaran</h1>
          <span
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-primary transition-all duration-150 ease-in-out active:scale-95"
          >
            <AiFillCloseCircle className="lg:text-[35px]" />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-y-2 gap-x-5 ">
          <div className="">
            <p className="font-semibold text-md">Nama</p>
            <p className="p-1 text-sm border rounded-md ">Muhammad Agil</p>
          </div>
          <div className="">
            <p className="font-semibold text-md">Kelas</p>
            <p className="p-1 text-sm border rounded-md ">Muhammad Agil</p>
          </div>
          <div className="">
            <p className="font-semibold text-md">Semester</p>
            <p className="p-1 text-sm border rounded-md ">Muhammad Agil</p>
          </div>
          <div className="">
            <p className="font-semibold text-md">Tanggal Pembayaran</p>
            <p className="p-1 text-sm border rounded-md ">Muhammad Agil</p>
          </div>
          <div className="">
            <p className="font-semibold text-md">Jumlah Pembayaran</p>
            <p className="p-1 text-sm border rounded-md ">Muhammad Agil</p>
          </div>
          <div className="">
            <p className="font-semibold text-md">Metode Pembayaran</p>
            <p className="p-1 text-sm border rounded-md ">Muhammad Agil</p>
          </div>
          <div className="">
            <p className="font-semibold text-md">Status Pembayaran</p>
            <p className="p-1 text-sm border rounded-md ">Muhammad Agil</p>
          </div>
        </div>
      </div>
    </div>
  );
}
