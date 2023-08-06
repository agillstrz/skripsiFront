import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Fetcher from "../../hooks/Fetcher";
import ModalUbahNilai from "../../components/ModalAdmin/ModalUbahNilai";
import LoadingTable from "../../components/Loading/LoadingTable";
import ModalUbahNilaiUjian from "../../components/ModalAdmin/ModalUbahNilaiUjian";
import axiosInstance from "../../configs/AxiosInstance";

export default function NilaiUjianAdmin() {
  const { state } = useLocation();
  const { id, nama } = state;
  const [modal, setModal] = useState({
    show: false,
    data: 0,
  });
  const [sem, setSem] = useState([]);
  const [semester, setSemester] = useState(1);

  const { data, loading, error, fetched, setFetched } = Fetcher(
    `nilaiUjian?siswa_id=${id}&semester_id=${semester}`
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
    <>
      {modal.show && (
        <ModalUbahNilaiUjian
          data={modal.data}
          fetched={fetched}
          setFetched={setFetched}
          setOpen={setModal}
        />
      )}
      <div className="flex w-full mb-5 justify-between">
        <h1 className="lg:text-xl font-bold capitalize  flex items-center gap-x-1">
          Nilai Ujian: {nama}
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
      <div className="overflow-x-auto flex justify-center">
        <table className=" divide-y min-w-full divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 px-5 w-44 border  tracking-wider">
                semester
              </th>
              <th className="py-3 px-5 w-56 border  tracking-wider">
                Mata Pelajaran
              </th>
              <th className="py-3 px-5 w-44 border  tracking-wider">Nilai</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <>
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
              </>
            ) : (
              data?.data?.data.map((nilai) => (
                <tr key={nilai.id} className=" text-center capitalize text-sm">
                  <td className="py-2 whitespace-nowrap">
                    {nilai?.semester?.nama}
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    {nilai?.pelajaran?.nama}
                  </td>

                  <td className="py-2 whitespace-nowrap">
                    <button
                      onClick={() => setModal({ show: true, data: nilai.id })}
                      className="border py-1  px-2"
                    >
                      {nilai?.nilai}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
