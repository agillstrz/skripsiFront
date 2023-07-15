import React, { useEffect, useState } from "react";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import Auth from "../utils/Auth";
import Fetcher from "../hooks/Fetcher";
import LoadingTable from "../components/Loading/LoadingTable";
import axiosInstance from "../configs/AxiosInstance";

export default function Nilai() {
  const [semester, setSemester] = useState([]);
  const [semesters, setSemesters] = useState(1);
  const { data, loading, error, fetched, setFetched } = Fetcher(
    `nilaiSiswa?siswa_id=${Auth.getId()}&semester=${semesters}`
  );
  const { data: sem } = Fetcher("semester");

  useEffect(() => {
    axiosInstance.get("semester").then((res) => setSemester(res.data));
  }, []);

  const handleOnchange = (e) => {
    e.preventDefault();
    setSemester(Number(e.target.value));
    setFetched(!fetched);
  };
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-5">
        <h1 className="lg:text-2xl font-bold capitalize  flex items-center gap-x-1">
          <BsFillFileEarmarkTextFill /> Nilai Akademik
        </h1>
        <select onChange={handleOnchange} name="" id="">
          {sem &&
            sem.map((m) => (
              <option key={m.id} value={m.id}>
                semester {m.id}
              </option>
            ))}
        </select>
      </div>
      <div className="grid grid-cols-4 mb-4 place-items-start">
        <div className="flex items-center font-medium gap-x-3">
          <div>
            <label className="block mb-1" htmlFor="">
              Total Pelajaran
            </label>
          </div>
          <div>
            <input
              type="text"
              name=""
              value={data?.pelajaran}
              className="border h-7 mb-1 p-2 block w-36 bg-white rounded-lg"
              disabled
              id=""
            />
          </div>
        </div>
        <div className="flex items-center font-medium gap-x-3">
          <div>
            <label className="block mb-1" htmlFor="">
              Total Nilai
            </label>
          </div>
          <div>
            <input
              type="text"
              name=""
              value={data?.rata}
              className="border h-7 mb-1 p-2 block w-36 bg-white rounded-lg"
              disabled
              id=""
            />
          </div>
        </div>
        <div className="flex items-center font-medium gap-x-3">
          <div>
            <label className="block mb-1" htmlFor="">
              Rata- Rata
            </label>
          </div>
          <div>
            <input
              type="text"
              name=""
              value={data?.rata}
              className="border h-7 mb-1 p-2 block w-36 bg-white rounded-lg"
              disabled
              id=""
            />
          </div>
        </div>
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
                      {nilai?.semester_id}
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
                      <span className="p-[1px] font-medium rounded-md border px-2 border-primary text-primary">
                        {nilai?.keterangan}
                      </span>
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
