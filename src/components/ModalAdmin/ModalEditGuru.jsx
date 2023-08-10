import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import POST from "../../apis/post.api";
import axiosInstance from "../../configs/AxiosInstance";

export default function ModalEditGuru({ setFetched, fetched, setOpen, data }) {
  const { id, nama, jenis_kelamin, nomorhp } = data;
  const [form, setform] = useState({
    nama: nama,
    jenis_kelamin: jenis_kelamin,
    nomorhp: nomorhp,
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance
      .put(`guru/${id}`, {
        nama: form.nama,
        jenis_kelamin: form.jenis_kelamin,
        nomorhp: form.nomorhp,
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
    <div className="h-full fixed flex justify-center items-center top-0 left-0 w-screen bg-black/30  ">
      <div className="w-1/2   bg-white p-5">
        <div className="flex w-full mb-2 items-center justify-between">
          <h1 className="lg:text-2xl font-bold">Edit Guru</h1>
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
                Nama
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nama"
                type="text"
                onChange={handleOnChange}
                name="nama"
                defaultValue={nama}
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="jenis_kelamin"
              >
                Jenis Kelamin
              </label>
              <select
                name="jenis_kelamin"
                onChange={handleOnChange}
                className="select select-bordered w-full max-w-xs"
                defaultValue={jenis_kelamin}
              >
                <option disabled>Pria/Wanita</option>
                <option value="pria">Pria</option>
                <option value="wanita">Wanita</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nomorhp"
              >
                Nomor Handphone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nomorhp"
                name="nomorhp"
                onChange={handleOnChange}
                type="text"
                defaultValue={nomorhp}
                placeholder="Nomor Handphone"
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
