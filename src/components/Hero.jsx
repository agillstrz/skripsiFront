import React from "react";

export default function Hero() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center  "
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')`,
      }}
    >
      <div className="bg-black/70 flex-col gap-y-4 absolute w-full h-screen z-0 top-0 flex justify-center items-center">
        <h1 className=" font-bold text-white text-7xl flex flex-col items-center">
          Selamat Datang
        </h1>

        <h2 className="text-4xl font-semibold text-primary">
          SMP PUPUK KUJANG
        </h2>
        <p className="text-white text-lg font-medium">
          "Kesuksesan seseorang berbanding lurus dengan kemauannya untuk
          belajar, bangkit, dan mencoba."
        </p>
      </div>
    </div>
  );
}
