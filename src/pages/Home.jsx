import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Login from "./auth/Login";

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Navbar setModal={setModal} />
      <Hero />
      {modal && <Login setOpen={setModal} />}
      {/* <div className="flex px-20  flex-col  items-center">
        <h1 className="text-5xl font-bold  my-5 text-neutral">
          Berita Terbaru
        </h1>
        <div className="grid grid-cols-4 gap-x-4 ">
          <CardBerita />
          <CardBerita />
          <CardBerita />
          <CardBerita />
        </div>
      </div>
      <div className="flex px-20  flex-col  items-center">
        <h1 className="text-5xl font-bold  my-5 text-neutral">Alumni</h1>
        <div className="flex justify-center  w-full gap-x-4 ">
          <div className="bg-white p-5 shadow-md rounded-lg flex flex-col gap-2 items-center w-[20rem] h-72">
            <div
              className="w-36 h-36 overflow-hidden rounded-full border bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')`,
              }}
            ></div>
            <h1 className="font-bold text-center text-xl">Muhammad Agil</h1>
            <p className="text-sm text-center">
              Saya sangat senang bersekolah disini, guru gurunya sangat baik
            </p>
          </div>
          <div className="bg-white p-5 shadow-md rounded-lg flex flex-col gap-2 items-center w-[20rem] h-72">
            <div
              className="w-36 h-36 overflow-hidden rounded-full border bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')`,
              }}
            ></div>
            <h1 className="font-bold text-center text-xl">Muhammad Agil</h1>
            <p className="text-sm text-center">
              Saya sangat senang bersekolah disini, guru gurunya sangat baik
            </p>
          </div>
          <div className="bg-white p-5 shadow-md rounded-lg flex flex-col gap-2 items-center w-[20rem] h-72">
            <div
              className="w-36 h-36 overflow-hidden rounded-full border bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')`,
              }}
            ></div>
            <h1 className="font-bold text-center text-xl">Muhammad Agil</h1>
            <p className="text-sm text-center">
              Saya sangat senang bersekolah disini, guru gurunya sangat baik
            </p>
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
    </>
  );
}
