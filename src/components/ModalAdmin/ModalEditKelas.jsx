import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function ModalEditKelas({ setOpen }) {
  return (
    <div className="h-screen flex justify-center items-center top-0 left-0 w-screen bg-black/30 absolute ">
      <div className="w-1/2   bg-white p-5">
        <div className="flex w-full mb-2 items-center justify-between">
          <h1 className="lg:text-2xl font-bold">Edit Kelas</h1>
          <span
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-primary transition-all duration-150 ease-in-out active:scale-95"
          >
            <AiFillCloseCircle className="lg:text-[35px]" />
          </span>
        </div>
        <div className="p-4 ">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nama"
              >
                Nama
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nama"
                type="text"
                placeholder="Masukkan nama kelas"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bidangStudi"
              >
                Jenjang
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bidangStudi"
                type="text"
                placeholder="SD / SMP"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="py-2 px-4 btn-primary rounded" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
