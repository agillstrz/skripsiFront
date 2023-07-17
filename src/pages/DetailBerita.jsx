import React from "react";
import { useLocation } from "react-router-dom";

export default function DetailBerita() {
  const { state } = useLocation();
  return (
    <div className="border   w-[60%]">
      <div className="flex flex-col gap-y-3">
        <h1 className="font-semibold py-2 border w-full px-2 text-neutral text-xl">
          {state?.judul}
        </h1>
        <img className="w-44" src={state.foto} alt="" />
        <p className="text-md font-normal">{state.deskripsi}</p>
      </div>
    </div>
  );
}
