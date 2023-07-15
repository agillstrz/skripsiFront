import React, { useState } from "react";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import Auth from "../utils/Auth";
import Fetcher from "../hooks/Fetcher";
import LoadingTable from "../components/Loading/LoadingTable";

export default function NilaiUjian() {
  const [semester, setSemester] = useState(1);
  const { data, loading, error, fetched, setFetched } = Fetcher(
    `nilaiUjianSiswa?siswa_id=${Auth.getId()}&semester=${semester}`
  );

  const handleOnchange = (e) => {
    e.preventDefault();
    setSemester(Number(e.target.value));
    setFetched(!fetched);
  };
  // console.log(data);
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-5">
        <h1 className="lg:text-2xl font-bold capitalize  flex items-center gap-x-1">
          <BsFillFileEarmarkTextFill /> Nilai Ujian
        </h1>
        <select
          onChange={handleOnchange}
          className="h-8 rounded-md text-sm cursor-pointer outline-none hover:border-primary border  select-bordered w-44  max-w-xs"
        >
          <option value={1}>Semester 1</option>
          <option value={2}>Semester 2</option>
        </select>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead>
              <tr className="text-sm font-medium text-center text-gray-500  capitalize">
                <th className="py-3 w-[10%] text-center tracking-wider">
                  Semester
                </th>
                <th className="py-3  text-left tracking-wider">
                  Mata Pelajaran
                </th>
                <th className="py-3   tracking-wider">KKM</th>
                <th className="py-3   tracking-wider">Nilai</th>
                <th className="py-3   tracking-wider">status</th>
                <th className="py-3   tracking-wider">keterangan</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <>
                  <LoadingTable count={[1, 2, 3, 4, 5, 6]} />
                  <LoadingTable count={[1, 2, 3, 4, 5, 6]} />
                  <LoadingTable count={[1, 2, 3, 4, 5, 6]} />
                  <LoadingTable count={[1, 2, 3, 4, 5, 6]} />
                </>
              ) : (
                data?.data?.map((nilai) => (
                  <tr key={nilai.id} className="text-center capitalize text-sm">
                    <td className="py-2 text-center whitespace-nowrap">
                      {nilai?.semester?.nama}
                    </td>
                    <td className="py-2 text-left whitespace-nowrap">
                      {nilai?.pelajaran?.nama}
                    </td>
                    <td className="py-2 whitespace-nowrap">
                      {nilai?.pelajaran?.kkm}
                    </td>
                    <td className="py-2 whitespace-nowrap">{nilai?.nilai}</td>
                    <td className="py-2 whitespace-nowrap">{nilai?.status}</td>
                    <td className="py-2 whitespace-nowrap">
                      {nilai.keterangan ? (
                        <span className="p-[1px] font-medium rounded-md border px-2 ">
                          {nilai.keterangan}
                        </span>
                      ) : (
                        <span className="p-[1px] font-medium rounded-md border px-2 ">
                          -
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
