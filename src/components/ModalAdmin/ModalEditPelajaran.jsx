import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axiosInstance from "../../configs/AxiosInstance";

export default function ModalEditPelajaran({
  setOpen,
  data,
  setFetched,
  fetched,
}) {
  const [form, setform] = useState({
    nama: data?.nama,
    kkm: data?.kkm,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nama, kkm } = form;
    await axiosInstance
      .put(`pelajaran/${data.id}`, {
        nama,
        kkm,
      })
      .then((res) => {
        setFetched(!fetched);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center top-0 left-0 w-screen bg-black/30 absolute ">
      <div className="w-1/2   bg-white p-5">
        <div className="flex w-full mb-2 items-center justify-between">
          <h1 className="lg:text-2xl font-bold">Edit Pelajaran</h1>
          <span
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-primary transition-all duration-150 ease-in-out active:scale-95"
          >
            <AiFillCloseCircle className="lg:text-[35px]" />
          </span>
        </div>
        <div className="p-4 ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nama"
              >
                Nama pelajaran
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nama"
                type="text"
                name="nama"
                onChange={handleOnChange}
                placeholder="Nama Pelajaran"
                defaultValue={data.nama}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bidangStudi"
              >
                KKM
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bidangStudi"
                type="text"
                placeholder="KKM"
                onChange={handleOnChange}
                name="kkm"
                defaultValue={data.kkm}
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="py-2 px-4 btn-primary rounded" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
