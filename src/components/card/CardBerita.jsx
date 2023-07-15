import React from "react";

export default function CardBerita() {
  return (
    <div className="h-[20rem] group cursor-pointer hover:shadow-md transition-all duration-150 ease-out  bg-white border  shadow-sm rounded-md flex flex-col">
      <div className="h-[60%] ">
        <img
          className="h-full w-full rounded-md"
          src="https://images.unsplash.com/photo-1550592704-6c76defa9985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
      <div className="p-2 h-[20%]">
        <h1 className="font-bold text-lg group-hover:text-primary transition-all duration-150 ease-out ">
          Judul Berita
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          debitis vero, quae vitae sit non quasi, aspernatur adipisci
          praesentium...
        </p>
      </div>
    </div>
  );
}
