import React, { useContext } from "react";
import { UserContext } from "../App";
import Auth from "../utils/Auth";

export default function Welcome() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white gap-y-1 items-center px-5 text-black flex flex-col justify-center  w-[90%] h-36 shadow-sm  ">
        <div className="flex gap-x-2 items-center">
          <div
            className="border rounded-full w-12 bg-cover bg-center h-12 "
            style={{
              backgroundImage: `url(${user?.foto})`,
            }}
          ></div>
          <h1 className="lg:text-3xl font-bold  capitalize">
            Halo, {Auth.getName()}
          </h1>
        </div>
        <p className="text-md font-medium">
          Selamat datang di website akademik Sekolah Kujang
        </p>
      </div>
      {/* <div className="flex w-full justify-center gap-x-2">
        <CardHome judul={"Angkatan"} keterangan={"2019"} />
        <CardHome judul={"SD"} keterangan={""} />
        <CardHome judul={"Nilai Rata-Rata"} keterangan={"85.00"} />
        <CardHome judul={"Kelas"} keterangan={"6A"} />
      </div> */}
    </div>
  );
}
