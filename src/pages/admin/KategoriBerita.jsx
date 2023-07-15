import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ModalTambahBerita from "../../components/ModalAdmin/ModalTambahBerita";
import Fetcher from "../../hooks/Fetcher";
import ModalEditBerita from "../../components/ModalAdmin/ModalEditBerita";
import ModalTambahKategori from "../../components/ModalAdmin/ModalTambahKategori";
import ModalEditKategori from "../../components/ModalAdmin/ModalEditKategori";

export default function KategoriBerita() {
  const [modal, setModal] = useState({
    modalEdit: false,
    modalKategori: false,
    data: {},
  });
  const { data, fetched, setFetched, loading } = Fetcher("kategori");

  return (
    <>
      {modal.modalKategori && (
        <ModalTambahKategori
          setOpen={setModal}
          fetched={fetched}
          setFetched={setFetched}
        />
      )}

      {modal.modalEdit && (
        <ModalEditKategori
          setOpen={setModal}
          edit={modal.data}
          fetched={fetched}
          setFetched={setFetched}
        />
      )}
      <div className="flex w-full justify-between mb-5">
        <button
          onClick={() => setModal({ modalKategori: true })}
          className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
        >
          Tambah Kategori <IoIosAdd size={20} />
        </button>
      </div>
      <div className="overflow-x-auto  flex ">
        <table className="  divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-2 px-5 w-44 border  tracking-wider">
                nama kategori
              </th>
              <th className="py-2 px-5 w-56  border tracking-wider">foto</th>
              <th className="py-2 px-5 border  tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white  divide-gray-200">
            {loading && !data ? (
              <>loading</>
            ) : (
              data?.data?.map((m) => (
                <tr
                  key={m.id}
                  className=" border text-center capitalize text-sm"
                >
                  <td className="py-1 whitespace-nowrap">{m.nama}</td>
                  <td className="py-1 items-center h-14 flex justify-center">
                    <img className="h-full" src={m.foto} alt="" />
                  </td>
                  <td className="px-2 py-1  gap-x-1">
                    <div className="flex gap-x-1 justify-center">
                      <button
                        onClick={() =>
                          setModal({ modalEdit: !modal.modalEdit, data: m })
                        }
                        className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                      >
                        Edit
                      </button>
                      <button className="text-sm btn-primary px-2 py-[2px] rounded-lg">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
