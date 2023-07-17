import React from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import Fetcher from "../hooks/Fetcher";
import { useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";

export default function Beranda() {
  let navigate = useNavigate();
  const { data, loading, error } = Fetcher(`berita`);

  return (
    <>
      <Welcome />
      <div className="">
        <div className="grid grid-cols-2 mb-5 gap-5 place-items-center px-36 w-full">
          <div className="cursor-pointer hover:bg-[#002B3D]/90 transition-all duration-100 ease-out h-36 w-full bg-[#002B3D] text-white border flex flex-col justify-center items-center">
            <h1 className="font-bold  text-2xl">Profile</h1>
          </div>
          <div className="cursor-pointer hover:bg-[#1FB2A6]/90 transition-all duration-100 ease-out h-36 w-full bg-[#1FB2A6] text-white border flex flex-col justify-center items-center">
            <h1 className="font-bold  text-2xl">Akademik</h1>
          </div>
          <div className="cursor-pointer hover:bg-[#3ABFF8]/90 transition-all duration-100 ease-out h-36 w-full bg-[#3ABFF8] text-white border flex flex-col justify-center items-center">
            <h1 className="font-bold  text-2xl">Jadwal</h1>
          </div>
          <div className="cursor-pointer hover:bg-[#FBBD23]/90 transition-all duration-100 ease-out h-36 w-full bg-[#FBBD23] text-white border flex flex-col justify-center items-center">
            <h1 className="font-bold  text-2xl">Ujian</h1>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-3 items-center ">
          {data &&
            data?.data?.map((berita) => (
              <div key={berita.id} className="w-full border ">
                <div className="w-full h-8 flex items-center gap-x-2 text-neutral px-4 font-bold tracking-wide text-xl  bg-slate-300">
                  <HiOutlineSpeakerphone />
                  <h1 className=" text-md">{berita.judul}</h1>
                </div>
                <div className="px-4 flex gap-x-2  py-2">
                  <img className="w-48 h-32" src={berita?.foto} alt="" />
                  <p className=" text-sm">
                    {berita.deskripsi.slice(0, 300)}...
                  </p>
                </div>
                <div className="flex justify-end w-full px-4 pb-2">
                  <button
                    onClick={() =>
                      navigate(`berita/${berita.id}`, { state: berita })
                    }
                    className=" border px-4 py-3 font-semibold text-sm hover:shadow-md"
                  >
                    Lebih Lengkap...
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
