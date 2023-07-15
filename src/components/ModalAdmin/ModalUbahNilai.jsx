import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import UPDATE from "../../apis/update.api";

export default function ModalUbahNilai({
  fetched,
  setFetched,
  setOpen,
  data: id,
}) {
  const [nilai, setNilai] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    UPDATE.updateNilai(id, nilai).then((res) => {
      setFetched(!fetched);
      setOpen(false);
    });
  };
  return (
    <div className="h-screen flex justify-center items-center top-0 left-0 w-screen bg-black/30 absolute ">
      <div className="w-[20%]  bg-white p-5">
        <div className="p-4 ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nama"
              >
                Nilai
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nama"
                name="nama"
                onChange={(e) => setNilai(Number(e.target.value))}
                type="number"
                placeholder="Masukkan nilai"
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
