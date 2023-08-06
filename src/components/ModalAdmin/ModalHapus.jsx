import React from "react";
import { MdErrorOutline } from "react-icons/md";
import axiosInstance from "../../configs/AxiosInstance";

export default function ModalHapus({ setFetched, fetched, setOpen, data }) {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.delete(`${data.del}/${data.id}`).then((res) => {
        setFetched(!fetched);
        setOpen(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen flex backdrop-blur-sm z-[9999] justify-center items-center top-0 left-0 w-full bg-black/30 fixed ">
        <div className="bg-white w-[25rem] h-[10rem] py-5 rounded-lg flex flex-col justify-around items-center">
          <div>
            <MdErrorOutline className="text-red-600" size={50} />
          </div>

          <div className="flex flex-col justify-center gap-y-1">
            <p className="text-[16px]">Yakin untuk menghapus {data.del}?</p>
            <div className="flex gap-x-2 justify-center">
              <button
                onClick={handleDelete}
                className="btn px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-[17px] font-semibold rounded-lg"
              >
                Hapus
              </button>
              <button
                onClick={() => setOpen(false)}
                className="bg-red-600 text-white  px-2 py-1 text-[17px] font-semibold btn-primary rounded-lg"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
