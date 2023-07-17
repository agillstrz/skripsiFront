import React, { useState } from "react";
import Fetcher from "../../hooks/Fetcher";
import Auth from "../../utils/Auth";
import UPDATE from "../../apis/update.api";
import { storage } from "../../configs/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { Toaster, toast } from "react-hot-toast";

export default function FormProfile({ data }) {
  const [form, setForm] = useState({
    id: data?.data?.id,
    email: data?.data?.email,
    nama: data?.data?.nama,
    nik: data?.data?.nik,
    nomor_hp: data?.data?.nomor_hp,
    ibu_kandung: data?.data?.ibu_kandung,
    alamat: data?.data?.alamat,
    foto: data?.data?.foto,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFoto = async (e) => {
    const imageUpload = e.target.files[0];
    if (!imageUpload) return;
    const storageRef = ref(storage, `profile/${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setForm({ ...form, foto: url });
      });
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    UPDATE.updateProfile(form).then((res) =>
      toast.success("berhasil menyimpan profile")
    );
  };
  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="flex items-center py-4 flex-col gap-y-3"
      >
        <div
          className="w-52 relative overflow-hidden group  h-52 bg-cover bg-center rounded-full"
          style={
            form.foto !== null
              ? {
                  backgroundImage: `url(${form.foto})`,
                }
              : {
                  backgroundImage: `url('https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.1210189538.1666932477&semt=ais')`,
                }
          }
        >
          <div className="absolute h-full transition-all duration-150  invisible group-hover:visible text-white w-full flex justify-center items-center top-0 font-bold z-10">
            Upload Foto
          </div>
          <div className="absolute w-full cursor-pointer transition-all duration-200 ease-out bg-black/20  hover:bg-black/40  h-full">
            <input
              type="file"
              onChange={handleFoto}
              className="z-10 opacity-0 cursor-pointer absolute w-full h-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 ">
          <div className="flex font-semibold flex-col gap-y-2">
            <label htmlFor="nama">Nama Lengkap*</label>
            <input
              className="outline-none h-10 w-80 rounded-lg px-2 border"
              type="text"
              name="nama"
              disabled
              placeholder="nama"
              onChange={onChange}
              value={data?.data?.nama}
            />
          </div>
          <div className="flex font-semibold flex-col gap-y-2">
            <label htmlFor="nama">NIM*</label>
            <input
              className="outline-none h-10 w-80 rounded-lg px-2 border"
              type="text"
              name="nim"
              disabled
              required
              defaultValue={data?.data?.nim}
              id="nama"
            />
          </div>
          <div className="flex font-semibold flex-col gap-y-2">
            <label htmlFor="nama">Email*</label>
            <input
              className="outline-none h-10 w-80 rounded-lg px-2 border"
              type="text"
              name="email"
              defaultValue={data?.data?.email}
              onChange={onChange}
              id="nama"
            />
          </div>
          <div className="flex font-semibold flex-col gap-y-2">
            <label htmlFor="nama">Kelas*</label>
            <input
              className="outline-none h-10 w-80 rounded-lg px-2 border"
              type="text"
              name="kelas"
              disabled
              value={data?.data?.kelas?.nama}
              id="nama"
            />
          </div>
          <div className="flex font-semibold flex-col gap-y-2">
            <label htmlFor="nama">NIK*</label>
            <input
              className="outline-none h-10 w-80 rounded-lg px-2 border"
              type="number"
              name="nik"
              defaultValue={data?.data?.nik}
              onChange={onChange}
              required
              id="nama"
            />
          </div>
          <div className="flex font-semibold flex-col gap-y-2">
            <label htmlFor="nama">Alamat*</label>
            <input
              className="outline-none h-10 w-80 rounded-lg px-2 border"
              type="text"
              name="alamat"
              defaultValue={data?.data?.alamat}
              onChange={onChange}
              id="nama"
              required
            />
          </div>

          <div className="flex font-semibold flex-col gap-y-2">
            <label htmlFor="nama">Nama Ibu Kandung*</label>
            <input
              className="outline-none h-10 w-80 rounded-lg px-2 border"
              type="text"
              name="ibu_kandung"
              defaultValue={data?.data?.ibu_kandung}
              onChange={onChange}
              required
              id="nama"
            />
          </div>
          <div className="flex font-semibold flex-col gap-y-2">
            <label htmlFor="nama">Nomor Hp*</label>
            <input
              className="outline-none h-10 w-80 rounded-lg px-2 border"
              type="text"
              name="nomor_hp"
              defaultValue={data?.data?.nomor_hp}
              onChange={onChange}
              id="nama"
              required
            />
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <button
            type="submit"
            className="w-44 py-3 font-bold text-white bg-primary rounded-lg hover:bg-focus transition-all duration-150 ease-linear"
          >
            Simpan Profile
          </button>
          <button className="w-44 py-3 font-bold text-white bg-focus rounded-lg hover:bg-primary transition-all duration-150 ease-linear">
            Ubah Password
          </button>
        </div>
      </form>
    </>
  );
}
