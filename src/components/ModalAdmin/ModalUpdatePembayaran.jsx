import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import UPDATE from "../../apis/update.api";
import Fetcher from "../../hooks/Fetcher";
import { FormatRupiah } from "@arismun/format-rupiah";
export default function ModalUpdatePembayaran({
  setOpen,
  setFetched,
  fetched,
  data,
}) {
  const [form, setForm] = useState({
    id: data?.id,
    semester_id: data?.semester_id,
    tanggal_bayar: data?.tanggal_bayar,
    metode: data?.metode,
    jumlah: data?.jumlah,
    status: data?.status,
  });
  const handleOnchange = (e) => {
    const { value, name, type } = e.target;
    setForm({
      ...form,
      [name]:
        type == "number"
          ? Number(value)
          : name == "semester_id" || name == "status"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UPDATE.updatePembayaran(form).then((res) => {
      if (res.status == 200) {
        setFetched(!fetched);
        setOpen(false);
      }
    });
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center top-0 left-0 w-screen bg-black/30 fixed ">
        <div className=" bg-white p-5">
          <div className="flex justify-end">
            <RxCross1
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="p-4 ">
            <form onSubmit={handleSubmit} className="grid gap-x-5 grid-cols-2">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nama"
                >
                  Tanggal Bayar
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nama"
                  name="tanggal_bayar"
                  defaultValue={form.tanggal_bayar}
                  onChange={handleOnchange}
                  type="date"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nama"
                >
                  Metode
                </label>
                <select
                  name="metode"
                  onChange={handleOnchange}
                  defaultValue={form.metode}
                  className="select  select-bordered w-full max-w-xs"
                >
                  <option value={"offline"}>Offline</option>
                  <option value={"transfer"}>Transfer antar bank</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nama"
                >
                  Jumlah
                </label>
                <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ">
                  <FormatRupiah value={form.jumlah} />
                </p>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nama"
                >
                  Status Pembayaran
                </label>
                <select
                  name="status"
                  onChange={handleOnchange}
                  defaultValue={form.status}
                  className="select  select-bordered w-full max-w-xs"
                >
                  <option value={0}>Belum Lunas</option>
                  <option value={1}>Lunas</option>
                </select>
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
    </>
  );
}
