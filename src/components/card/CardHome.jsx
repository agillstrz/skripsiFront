import React from "react";

export default function CardHome({ judul, keterangan }) {
  return (
    <div className="flex bg-white flex-col p-2 rounded-lg text-black border border-primary bg-focus/80 mx-2 shadow-lg -translate-y-14 lg:h-28 w-56 items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{judul}</h1>
        <h1 className="text-2xl font-bold">{keterangan}</h1>
      </div>
    </div>
  );
}
