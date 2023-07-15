import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import POST from "../../apis/post.api";
import UPDATE from "../../apis/update.api";

export default function ModalAkademikEdit({
  setOpen,
  fetched,
  setFetched,
  data,
}) {
  const [form, setform] = useState({
    id: data.id,
    kegiatan: data.kegiatan,
    mulai: data.mulai,
    akhir: data.akhir,
  });
  const handleOnChange = (e) => {
    const { name, value, type } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UPDATE.updateJadwalAkademik(form)
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
          <h1 className="lg:text-2xl font-bold">Tambah Jadwal</h1>
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
                htmlFor="hari"
              >
                Kegiatan
              </label>
              <input
                onChange={handleOnChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="hari"
                type="text"
                name="kegiatan"
                defaultValue={form.kegiatan}
                placeholder="Masukkan Hari"
              />
            </div>

            <div className="mb-4">
              <div className="flex gap-x-2">
                <div className="w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Mata pelajaran"
                  >
                    Waktu Mulai
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Mata pelajaran"
                    name="mulai"
                    onChange={handleOnChange}
                    defaultValue={form.mulai}
                    type="date"
                    placeholder="Masukkan Mata pelajaran"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Mata pelajaran"
                  >
                    Waktu Selesai
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Mata pelajaran"
                    name="akhir"
                    onChange={handleOnChange}
                    defaultValue={form.akhir}
                    type="date"
                    placeholder="Masukkan Mata pelajaran"
                  />
                </div>
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
