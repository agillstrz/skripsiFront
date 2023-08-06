import React from "react";
import { BsCalendarWeek } from "react-icons/bs";
import Fetcher from "../hooks/Fetcher";
import Auth from "../utils/Auth";
import LoadingTable from "../components/Loading/LoadingTable";

export default function JadwalPelajaran() {
  const { data, loading, error } = Fetcher(
    `jadwalPelajaranSiswa?kelas_id=${Auth.getKelas()}`
  );
  return (
    <div>
      <h1 className="lg:text-2xl font-bold capitalize lg:mb-8 flex items-center gap-x-1">
        <BsCalendarWeek /> Jadwal Pelajaran
      </h1>
      <div className="overflow-x-auto flex justify-center">
        <table className=" divide-y divide-gray-200 border">
          <thead>
            <tr className="text-sm text-left font-medium  text-gray-500  capitalize">
              <th className="py-3 px-16 text-center tracking-wider">Kelas</th>
              <th className="py-3 px-16 tracking-wider">Hari</th>
              <th className="py-3 px-16 tracking-wider">Mata Pelajaran</th>
              <th className="py-3 px-16 tracking-wider">Guru</th>
              <th className="py-3 px-16 tracking-wider">Waktu</th>
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
              data?.data?.map((jadwal) => (
                <tr key={jadwal.id} className=" text-center capitalize text-sm">
                  <td className="py-2 text-center whitespace-nowrap">
                    {jadwal?.kelas?.nama}
                  </td>
                  <td className="py-2 whitespace-nowrap">{jadwal.hari}</td>

                  <td className="py-2 whitespace-nowrap">
                    {jadwal?.pelajaran?.nama}
                  </td>

                  <td className="py-2 whitespace-nowrap">
                    {jadwal?.guru?.nama}
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    {jadwal?.mulai} - {jadwal?.selesai} WIB
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
