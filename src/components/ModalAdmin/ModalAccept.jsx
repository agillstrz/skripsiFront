import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axiosInstance from "../../configs/AxiosInstance";
import POST from "../../apis/post.api";

export default function ModalAccept({ setMessage, setOpen, data }) {
  const handleYes = async (e) => {
    e.preventDefault();
    POST.tambahNilai(data.id, data.kelas).then((res) => {
      setMessage("nilai berhasil ditambahkan");
      setMessage(res.data.message);
      setOpen(false);
    });
  };

  return (
    <>
      <div className="h-screen flex backdrop-blur-sm justify-center items-center top-0 left-0 w-screen bg-black/30 absolute ">
        <div className="px-5 gap-y-3 rounded-md h-36 w-[24rem]  flex flex-col items-center justify-center  bg-white ">
          <h1 className="font-medium text-md text-center">
            Yakin untuk Mempublikasikan semua data semester {data.id} untuk
            kelas <span className="uppercase">{data.nama}</span>?
          </h1>
          <div className="flex gap-x-2 items-center">
            <button
              onClick={() => setOpen(false)}
              className=" bg-red-600 hover:bg-red-700 px-2 text-lg rounded-lg flex text-center py-1 font-bold transition-all duration-150 ease-linear text-white"
            >
              Batal
            </button>
            <button
              onClick={handleYes}
              className="bg-primary hover:bg-focus px-2 text-lg rounded-lg flex text-center py-1 font-bold transition-all duration-150 ease-linear text-white"
            >
              Yakin
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
