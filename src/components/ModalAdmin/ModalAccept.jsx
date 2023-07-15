import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axiosInstance from "../../configs/AxiosInstance";

export default function ModalAccept({ setFetched, fetched, setOpen, data }) {
  const handleDelete = async (e) => {
    e.preventDefault();
    // try {
    //   await axiosInstance.post(`${data.del}/${data.id}`).then((res) => {
    //     setFetched(!fetched);
    //     setOpen(false);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <div className="h-screen flex backdrop-blur-sm justify-center items-center top-0 left-0 w-screen bg-black/30 absolute ">
        <div className="px-5 gap-y-3 rounded-md h-36 flex flex-col items-center justify-center  bg-white ">
          <h1 className="font-medium text-md">Yakin untuk tambah</h1>
          <div className="flex gap-x-2 items-center">
            <button
              onClick={handleDelete}
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
