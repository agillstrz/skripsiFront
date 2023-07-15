import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import POST from "../../apis/post.api";

export default function ModalTambahGuru({ setOpen, setFetched, fetched }) {
  const [form, setform] = useState({
    nama: "BUDI",
    jenis_kelamin: "pria",
    nomorhp: "082281788810",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    POST.tambahGuru(form)
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
          <h1 className="lg:text-2xl font-bold">Tambah Guru</h1>
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
                defaultValue="pria"
                className="select select-bordered w-full max-w-xs"
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
