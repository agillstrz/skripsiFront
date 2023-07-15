import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ModalEditGuru from "../../components/modalAdmin/ModalEditGuru";
import Fetcher from "../../hooks/Fetcher";
import ModalTambahGuru from "../../components/ModalAdmin/ModalTambahGuru";

export default function Guru() {
  const [modal, setModal] = useState({
    modalTambah: false,
    modalEdit: false,
    data: {},
  });

  const { data, error, loading, setFetched, fetched } = Fetcher("guru");
  return (
    <>
      {modal.modalTambah && (
        <ModalTambahGuru
          setFetched={setFetched}
          fetched={fetched}
          setOpen={setModal}
        />
      )}
      {modal.modalEdit && (
        <ModalEditGuru
          data={modal.data}
          setFetched={setFetched}
          fetched={fetched}
          setOpen={setModal}
        />
      )}
      <div className="flex w-full justify-end mb-5">
        <button
          onClick={() => setModal({ modalTambah: !modal.modalTambah })}
          className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
        >
          Tambah Guru <IoIosAdd size={20} />
        </button>
      </div>
      <div className="overflow-x-auto justify-center flex ">
        <table className=" divide-y min-w-full divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 w-[10%] border  tracking-wider">No</th>
              <th className="py-3 px-5 w-56  border  tracking-wider">Nama</th>
              <th className="py-3 px-5 w-44 border  tracking-wider">Gender</th>
              <th className="py-3 px-5 w-56  border  tracking-wider">
                Nomor Handphone
              </th>
              <th className="py-3 px-5 border  tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading && !data ? (
              <>loading</>
            ) : (
              data?.data?.data?.map((m) => (
                <tr key={m.id} className=" text-center capitalize text-sm">
                  <td className="py-2  whitespace-nowrap">1</td>
                  <td className="py-2 whitespace-nowrap">{m.nama}</td>
                  <td className="py-2 whitespace-nowrap">{m.jenis_kelamin}</td>
                  <td className="py-2 whitespace-nowrap">{m.nomorhp}</td>
                  <td className="py-2 px-2 whitespace-nowrap flex items-center gap-x-1">
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
                    <button className="text-sm btn-primary px-2 py-[2px] rounded-lg">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}

            {/* Add more rows here */}
          </tbody>
        </table>
      </div>
    </>
  );
}
