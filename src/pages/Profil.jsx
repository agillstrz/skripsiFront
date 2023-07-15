import React, { useState } from "react";
import FormProfile from "../components/form/FormProfile";
import Fetcher from "../hooks/Fetcher";
import Auth from "../utils/Auth";

export default function Profil() {
  const { data, loading, error } = Fetcher(`profile?siswa_id=${Auth.getId()}`);
  if (!data && loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center ">
        loading
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="border  w-full">
        <div className="border h-8  flex justify-center items-center ">
          <p className="text-lg font-semibold">Profile</p>
        </div>
        {data && !loading && <FormProfile data={data} />}
      </div>
    </div>
  );
}
