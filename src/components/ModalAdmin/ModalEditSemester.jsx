import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axiosInstance from "../../configs/AxiosInstance";
import POST from "../../apis/post.api";

export default function ModalEditSemester({
  data,
  setMessage,
  setOpen,
  fetched,
  setFetched,
}) {
  const [nama, setNama] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .put(`semester/${data.id}`, {
        nama: nama,
      })
      .then((res) => {
        setMessage("Semester berhasil ditambahkan");
        setFetched(!fetched);
        setOpen(false);
      });
  };

  return (
    <>
      <div className="h-screen flex backdrop-blur-sm justify-center items-center top-0 left-0 w-screen bg-black/30 fixed ">
        <div className="px-5 gap-y-3 rounded-md  w-[24rem]  flex flex-col py-5  relative bg-white ">
          <span
            onClick={() => setOpen(false)}
            className="absolute right-0 top-0  cursor-pointer text-[20px] pr-2 font-bold"
          >
            X
          </span>
          <form className="" onSubmit={handleSubmit}>
            <div>
              <label className="font-medium mb-2" htmlFor="">
                Nama
              </label>
              <input
                type="text"
                onChange={(e) => setNama(e.target.value)}
                defaultValue={data.nama}
                placeholder="Nama semester.."
                className="outline-none w-full border px-2  rounded-md h-10"
              />
            </div>
            <div className="flex justify-center gap-x-2 w-full mt-5">
              <button className="btn-primary py-1 px-3 rounded-md font-semibold">
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
