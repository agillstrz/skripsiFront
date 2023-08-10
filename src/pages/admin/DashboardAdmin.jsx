import React from "react";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { GiSecretBook } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaNewspaper } from "react-icons/fa";
import Fetcher from "../../hooks/Fetcher";
export default function DashboardAdmin() {
  const { data, loading } = Fetcher("dashboard");
  return (
    <>
      <h1 className="text-3xl font-bold mb-10 text-center">
        Selamat Datang di Dashbord Akademik Sekolah Kujang
      </h1>
      <div className="flex gap-5 items-center  justify-center flex-wrap">
        <div className="w-[20rem] h-44 border bg-white shadow-sm rounded-lg flex items-center flex-col p-5 ">
          <h1 className="font-bold text-center text-2xl">Jumlah Guru</h1>
          <div className="flex items-center gap-x-4 justify-center  h-full w-full">
            <div>
              <FaChalkboardTeacher size={50} />
            </div>
            <p className="text-4xl">{data?.guru}</p>
          </div>
        </div>
        <div className="w-[20rem] h-44 border bg-white shadow-sm rounded-lg flex items-center flex-col p-5 ">
          <h1 className="font-bold text-center text-2xl">Jumlah Kelas</h1>
          <div className="flex items-center gap-x-4 justify-center  h-full w-full">
            <div>
              <SiGoogleclassroom size={50} />
            </div>
            <p className="text-4xl">{data?.kelas}</p>
          </div>
        </div>
        <div className="w-[20rem] h-44 border bg-white shadow-sm rounded-lg flex items-center flex-col p-5 ">
          <h1 className="font-bold text-center text-2xl">Jumlah Pelajaran</h1>
          <div className="flex items-center gap-x-4 justify-center  h-full w-full">
            <div>
              <GiSecretBook size={50} />
            </div>
            <p className="text-4xl">{data?.pelajaran}</p>
          </div>
        </div>
        <div className="w-[20rem] h-44 border bg-white shadow-sm rounded-lg flex items-center flex-col p-5 ">
          <h1 className="font-bold text-center text-2xl">Jumlah Siswa</h1>
          <div className="flex items-center gap-x-4 justify-center  h-full w-full">
            <div>
              <FaUserGraduate size={50} />
            </div>
            <p className="text-4xl">{data?.siswa}</p>
          </div>
        </div>
        <div className="w-[20rem] h-44 border bg-white shadow-sm rounded-lg flex items-center flex-col p-5 ">
          <h1 className="font-bold text-center text-2xl">Jumlah Berita</h1>
          <div className="flex items-center gap-x-4 justify-center  h-full w-full">
            <div>
              <FaNewspaper size={50} />
            </div>
            <p className="text-4xl">{data?.berita}</p>
          </div>
        </div>
      </div>
    </>
  );
}
