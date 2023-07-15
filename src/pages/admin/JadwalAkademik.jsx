import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ModalAkademik from "../../components/ModalAdmin/ModalAkademik";
import Fetcher from "../../hooks/Fetcher";
import ModalAkademikEdit from "../../components/ModalAdmin/ModalAkademikEdit";
import ModalHapus from "../../components/ModalAdmin/ModalHapus";

export default function JadwalAkademik() {
  const [modal, setModal] = useState({
    modalTambah: false,
    modalEdit: false,
    data: {},
    modalHapus: false,
  });
  const { data, loading, fetched, setFetched } = Fetcher("jadwalAkademik");
  return (
    <>
      {modal.modalTambah && (
        <ModalAkademik
          fetched={fetched}
          setFetched={setFetched}
          setOpen={setModal}
        />
      )}
      {modal.modalEdit && (
        <ModalAkademikEdit
          fetched={fetched}
          setFetched={setFetched}
          setOpen={setModal}
          data={modal.data}
        />
      )}
      {modal.modalHapus && (
        <ModalHapus
          fetched={fetched}
          setFetched={setFetched}
          setOpen={setModal}
          data={modal.data}
        />
      )}
      <div className="mb-5 h-8  flex justify-between items-center ">
        <p className="text-3xl capitalize font-bold">Kalender Akademik Genap</p>
        <button
          onClick={() => setModal({ modalTambah: !modal.modalTambah })}
          className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
        >
          Tambah Jadwal <IoIosAdd size={20} />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="border  w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border">
              <thead>
                <tr className="text-sm text-center text-white font-medium capitalize">
                  <th className=" py-3  lg:w-[60%] border-r  bg-primary tracking-wider">
                    Kegiatan
                  </th>
                  <th className=" py-3  border-r  bg-primary tracking-wider">
                    Tanggal Mulai
                  </th>
                  <th className=" py-3  border-r  bg-primary tracking-wider">
                    Tanggal Berakhir
                  </th>
                  <th className=" py-3  border-r  bg-primary tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data &&
                  data?.map((m, index) => (
                    <tr key={m.id} className="font-medium text-sm ">
                      <td className=" py-2 whitespace-wrap px-2 border-r lg:w-[50%]">
                        <p>{m.kegiatan}</p>
                      </td>
                      <td className="  py-2 text-center border-r whitespace-wrap">
                        {m.mulai}
                      </td>
                      <td className=" py-2 text-center whitespace-wrap">
                        {m.akhir}
                      </td>

                      <td className="py-2 px-2 whitespace-nowrap flex justify-center items-center gap-x-1">
                        <button
                          onClick={() =>
                            setModal({
                              modalEdit: !modal.modalEdit,
                              data: m,
                            })
                          }
                          className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            setModal({
                              modalHapus: !modal.modalHapus,
                              data: { id: m.id, del: "jadwalAkademik" },
                            })
                          }
                          className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
