import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Fetcher from "../../hooks/Fetcher";
import { useParams } from "react-router-dom";
import POST from "../../apis/post.api";
import axiosInstance from "../../configs/AxiosInstance";

export default function ModalEditUjian({
  setOpen,
  fetched,
  setFetched,
  data: jadwal,
}) {
  const { data } = Fetcher("pelajaran");
  const [form, setform] = useState({
    id: jadwal.id,
    hari: jadwal?.hari,
    pelajaran_id: jadwal?.pelajaran.id,
    kelas_id: Number(jadwal?.kelas.id),
    mulai: jadwal?.mulai,
    pengawas: jadwal?.pengawas,
    tanggal: jadwal?.tanggal,
    selesai: jadwal?.selesai,
  });
  const handleOnChange = (e) => {
    const { name, value, type } = e.target;
    setform({
      ...form,
      [name]: type === "select-one" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      hari,
      id,
      kelas_id,
      mulai,
      pelajaran_id,
      pengawas,
      selesai,
      tanggal,
    } = form;

    await axiosInstance
      .put(`jadwalUjian/${id}`, {
        hari,
        kelas_id,
        mulai,
        pelajaran_id,
        pengawas,
        selesai,
        tanggal,
      })
      .then((res) => {
        setOpen(false);
        setFetched(!fetched);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center top-0 left-0 w-screen bg-black/30 fixed ">
      <div className="w-1/2   bg-white p-5">
        <div className="flex w-full mb-2 items-center justify-between">
          <h1 className="lg:text-2xl font-bold">Tambah Jadwal ujian</h1>
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
                htmlFor="pengawas"
              >
                Pengawas
              </label>
              <input
                onChange={handleOnChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pengawas"
                type="text"
                name="pengawas"
                defaultValue={form.pengawas}
                placeholder="Nama pengawas"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hari"
              >
                Hari
              </label>
              <input
                onChange={handleOnChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="hari"
                type="text"
                name="hari"
                defaultValue={form.hari}
                placeholder="Masukkan Hari"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hari"
              >
                tanggal
              </label>
              <input
                onChange={handleOnChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tanggal"
                type="date"
                defaultValue={form.tanggal}
                name="tanggal"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Mata pelajaran"
              >
                Mata Pelajaran
              </label>
              <select
                onChange={handleOnChange}
                name="pelajaran_id"
                defaultValue={jadwal?.pelajaran.nama}
                className="select select-bordered w-full max-w-xs"
              >
                {data &&
                  data?.data?.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.nama}
                    </option>
                  ))}
              </select>
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
                    type="time"
                    defaultValue={jadwal?.mulai}
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
                    name="selesai"
                    onChange={handleOnChange}
                    type="time"
                    defaultValue={jadwal?.selesai}
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
