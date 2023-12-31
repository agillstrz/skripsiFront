import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Fetcher from "../../hooks/Fetcher";
import POST from "../../apis/post.api";
import { v4 } from "uuid";
import { storage } from "../../configs/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import UPDATE from "../../apis/update.api";

export default function ModalEditKategori({
  edit,
  setOpen,
  setFetched,
  fetched,
}) {
  const [form, setForm] = useState({
    id: edit.id,
    nama: edit.nama,
    foto: edit.foto,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFoto = async (e) => {
    const imageUpload = e.target.files[0];
    if (!imageUpload) return;
    const storageRef = ref(storage, `kategori/${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setForm({ ...form, foto: url });
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UPDATE.editKategori(form).then((res) => {
      setOpen(false);
      setFetched(!fetched);
    });
  };

  return (
    <div className="h-full  bottom-0  flex justify-center items-center top-0 left-0 w-screen bg-black/30 fixed ">
      <div className="w-1/2   bg-white p-5">
        <div className="flex w-full mb-2 items-center justify-between">
          <h1 className="lg:text-2xl font-bold">Tambah Kategori</h1>
          <span
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-primary transition-all duration-150 ease-in-out active:scale-95"
          >
            <AiFillCloseCircle className="lg:text-[35px]" />
          </span>
        </div>
        <div className="p-4 ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nama"
              >
                Nama Kategori
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nama"
                name="nama"
                onChange={onChange}
                type="text"
                defaultValue={form.nama}
                placeholder="Masukkan nama kelas"
              />
            </div>

            <div className="mb-4">
              <div className="  w-24 h-24 border relative cursor-pointer">
                <input
                  type="file"
                  onChange={handleFoto}
                  className="z-[10] absolute w-24  h-full opacity-0 cursor-pointer"
                />
                <div className=" relative  h-full w-full flex items-center justify-center">
                  {form.foto ? (
                    <>
                      <img
                        src={form.foto}
                        className="absolute w-full h-full"
                        alt=""
                      />
                    </>
                  ) : (
                    <BsFileEarmarkImageFill size={40} />
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="py-2 px-4 btn-primary rounded" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
