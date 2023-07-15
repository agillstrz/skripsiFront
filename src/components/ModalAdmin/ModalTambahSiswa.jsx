import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import POST from "../../apis/post.api";

export default function ModalTambahSiswa({
  setOpen,
  setFetched,
  fetched,
  kelas,
}) {
  const [form, setform] = useState({
    name: "muhammad Agil",
    email: "agillstrz@gmail.com",
    password: "MyPassword321",
    kelas_id: Number(kelas),
    nim: "13119968",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    POST.tambahSiswa(form)
      .then((res) => {
        setFetched(!fetched);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center top-0 left-0 w-screen bg-black/30 absolute ">
      <div className="w-1/2   bg-white p-5">
        <div className="flex w-full mb-2 items-center justify-between">
          <h1 className="lg:text-2xl font-bold">Tambah Siswa</h1>
          <span
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-primary transition-all duration-150 ease-in-out active:scale-95"
          >
            <AiFillCloseCircle className="lg:text-[35px]" />
          </span>
        </div>
        <div className="p-4 ">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="nama"
                >
                  Nama
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nama"
                  type="text"
                  onChange={handleOnChange}
                  name="name"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  onChange={handleOnChange}
                  placeholder="Email"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="nama"
                >
                  NIM
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nama"
                  name="nim"
                  onChange={handleOnChange}
                  type="text"
                  placeholder="nim"
                />
              </div>
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
