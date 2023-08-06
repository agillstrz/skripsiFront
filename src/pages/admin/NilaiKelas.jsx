import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import LoadingTable from "../../components/Loading/LoadingTable";
import Fetcher from "../../hooks/Fetcher";
import ModalUbahNilai from "../../components/ModalAdmin/ModalUbahNilai";
import Auth from "../../utils/Auth";
import axiosInstance from "../../configs/AxiosInstance";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

export default function NilaiKelas() {
  const { state } = useLocation();
  const { data: dataSiswa, sem: semesterSekarang } = state;
  const { id, nama } = dataSiswa;
  const [modal, setModal] = useState({
    show: false,
    data: 0,
  });
  const [semester, setSemester] = useState(semesterSekarang.id);
  const [sem, setSem] = useState([]);

  const { data, loading, error, fetched, setFetched } = Fetcher(
    `nilai?siswa_id=${id}&semester_id=${semester}`
  );

  useEffect(() => {
    axiosInstance.get("semester").then((res) => setSem(res.data));
  }, []);

  const handleOnchange = (e) => {
    e.preventDefault();
    setSemester(Number(e.target.value));
    setFetched(!fetched);
  };
  return (
    <>
      {modal.show && (
        <ModalUbahNilai
          data={modal.data}
          fetched={fetched}
          setFetched={setFetched}
          setOpen={setModal}
        />
      )}
      <div className="flex w-full mb-5 justify-between">
        <h1 className="lg:text-2xl font-bold capitalize  flex items-center gap-x-1">
          <BsFillFileEarmarkTextFill /> Nilai Akademik {nama} Semester{" "}
          {semesterSekarang.nama}
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
      <div className="overflow-x-auto flex justify-between">
        <table className=" divide-y divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 px-5 w-44 border  tracking-wider">
                semester
              </th>
              <th className="py-3 px-5 w-56 border  tracking-wider">
                Mata Pelajaran
              </th>
              <th className="py-3 px-5 w-44 border  tracking-wider">KKM</th>
              <th className="py-3 px-5 w-44 border  tracking-wider">Nilai</th>
              <th className="py-3 px-5 w-44 border  tracking-wider">
                Keterangan
              </th>
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
                    {nilai?.pelajaran?.kkm}
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    <button
                      onClick={() => setModal({ show: true, data: nilai.id })}
                      className="border py-1  px-2"
                    >
                      {nilai?.nilai}
                    </button>
                  </td>
                  <td className="py-2 whitespace-nowrap">{nilai?.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
