import React, { useEffect, useState } from "react";
import FormProfile from "../components/form/FormProfile";
import Fetcher from "../hooks/Fetcher";
import Auth from "../utils/Auth";
import ModalUbahPassword from "../components/modal/ModalUbahPassword";
import { Toaster, toast } from "react-hot-toast";

export default function Profil() {
  const { data, loading, error } = Fetcher(`profile?siswa_id=${Auth.getId()}`);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);

  if (!data && loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center ">
        loading
      </div>
    );
  }
  return (
    <>
      {modal && (
        <ModalUbahPassword setMessage={setMessage} setOpen={setModal} />
      )}
      <div className="flex justify-center min-h-screen">
        <div className="border  w-full">
          <div className="border h-8  flex justify-center items-center ">
            <p className="text-lg font-semibold">Profile</p>
          </div>
          {data && !loading && <FormProfile setModal={setModal} data={data} />}
          {!loading && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setModal(true)}
                className="w-44 py-3 font-bold text-white bg-focus rounded-lg hover:bg-primary transition-all duration-150 ease-linear"
              >
                Ubah Password
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
