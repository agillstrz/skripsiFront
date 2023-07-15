import React from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import Fetcher from "../hooks/Fetcher";
import { useNavigate } from "react-router-dom";

export default function Beranda() {
  let navigate = useNavigate();
  const { data, loading, error } = Fetcher(`berita`);

  return (
    <>
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
          {/* <div className="w-full h-[1px] bg-black" />
          <p className="text-blue-600 text-xl">
            Harap Lengkapi Foto dan Biodata pada menu Profil
          </p>
          <div className="w-full h-[1px] bg-black" />
          <p className="text-blue-600 text-xl">
            Jadwal Ujian sudah tersedia silahkan lihat pada menu ujian
          </p>
          <div className="w-full h-[1px] bg-black" />
          <h1 className="text-left w-full text-2xl font-bold capitalize">
            Berita Terkini
          </h1> */}
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
          <div className="w-full border ">
            <div className="w-full h-8 flex items-center gap-x-2 text-neutral px-4 font-bold tracking-wide text-xl  bg-slate-300">
              <HiOutlineSpeakerphone />
              <h1 className=" text-md">Ujian Kujang</h1>
            </div>
            <div className="px-4 flex gap-x-2  py-2">
              <img
                className="w-48"
                src="https://mulaidiug.com/blog/office/assets/upload/image/Gedung_UG(4).JPG"
                alt=""
              />
              <p className=" text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur cumque odio dolor eius eveniet soluta reprehenderit
                nostrum nobis possimus atque suscipit, nulla unde quibusdam a
                ipsam, quod accusamus pariatur assumenda!
              </p>
            </div>
            <div className="flex justify-end w-full px-4 py-2 ">
              <button className=" border px-2 py-1 font-semibold text-sm hover:shadow-md">
                Lebih Lengkap...
              </button>
            </div>
          </div>
          <div className="w-full border ">
            <div className="w-full h-8 flex items-center gap-x-2 text-neutral px-4 font-bold tracking-wide text-xl  bg-slate-300">
              <HiOutlineSpeakerphone />
              <h1 className=" text-md">Kujang event</h1>
            </div>
            <div className="px-4 flex gap-x-2  py-2">
              <img
                className="w-48"
                src="https://cdn.medcom.id/images/content/2020/03/09/1119908/wOgDInBP23.jpg"
                alt=""
              />
              <p className=" text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur cumque odio dolor eius eveniet soluta reprehenderit
                nostrum nobis possimus atque suscipit, nulla unde quibusdam a
                ipsam, quod accusamus pariatur assumenda!
              </p>
            </div>
            <div className="flex justify-end w-full px-4 py-2 ">
              <button className=" border px-2 py-1 font-semibold text-sm hover:shadow-md">
                Lebih Lengkap...
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
