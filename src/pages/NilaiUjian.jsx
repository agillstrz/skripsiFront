import React, { useEffect, useState } from "react";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import Auth from "../utils/Auth";
import Fetcher from "../hooks/Fetcher";
import LoadingTable from "../components/Loading/LoadingTable";
import axiosInstance from "../configs/AxiosInstance";

export default function NilaiUjian() {
  const [semester, setSemester] = useState(1);
  const [sem, setSem] = useState([]);

  const { data, loading, error, fetched, setFetched } = Fetcher(
    `nilaiUjianSiswa?siswa_id=${Auth.getId()}&semester=${semester}`
  );

  const handleOnchange = (e) => {
    e.preventDefault();
    setSemester(Number(e.target.value));
    setFetched(!fetched);
  };
  useEffect(() => {
    axiosInstance.get("semester").then((res) => setSem(res.data));
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-5">
        <h1 className="lg:text-2xl font-bold capitalize  flex items-center gap-x-1">
          <BsFillFileEarmarkTextFill /> Nilai Ujian
        </h1>
        <select onChange={handleOnchange} name="" id="">
          {sem &&
            sem.map((m) => (
              <option key={m.id} value={m.id}>
                Semester {m.nama}
              </option>
            ))}
        </select>
      </div>
      <div>
        <div className="overflow-x-auto flex justify-center">
          <table className=" divide-y divide-gray-200 border">
            <thead>
              <tr className="text-sm font-medium text-center text-gray-500  capitalize">
                <th className="py-3 w-56 text-center tracking-wider">
                  Semester
                </th>
                <th className="py-3 w-56  text-center tracking-wider">
                  Mata Pelajaran
                </th>
                <th className="py-3 w-56  text-center tracking-wider">Nilai</th>
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
                    <td className="py-2 text-left  whitespace-nowrap">
                      {nilai?.pelajaran?.nama}
                    </td>

                    <td className="py-2 whitespace-nowrap">{nilai?.nilai}</td>
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
