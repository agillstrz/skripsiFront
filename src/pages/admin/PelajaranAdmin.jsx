import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ModalEditPelajaran from "../../components/ModalAdmin/ModalEditPelajaran";
import ModalTambahPelajaran from "../../components/ModalAdmin/ModalTambahPelajaran";
import Fetcher from "../../hooks/Fetcher";
import LoadingTable from "../../components/Loading/LoadingTable";

export default function PelajaranAdmin() {
  const [modal, setModal] = useState({
    modalTambah: false,
    modalEdit: false,
    data: {},
  });

  const { data, error, loading, setFetched, fetched } = Fetcher("pelajaran");
  return (
    <>
      {modal.modalTambah && (
        <ModalTambahPelajaran
          setFetched={setFetched}
          fetched={fetched}
          setOpen={setModal}
        />
      )}
      {modal.modalEdit && (
        <ModalEditPelajaran
          setOpen={setModal}
          data={modal.data}
          setFetched={setFetched}
          fetched={fetched}
        />
      )}
      <div className="flex w-full justify-end mb-5">
        <button
          onClick={() => setModal({ modalTambah: !modal.modalTambah })}
          className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
        >
          Tambah Pelajaran <IoIosAdd size={20} />
        </button>
      </div>
      <div className="overflow-x-auto justify-center  flex ">
        <table className=" divide-y min-w-full divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 px-5 w-56  border  tracking-wider">
                Mata Pelajaran
              </th>
              <th className="py-3 px-5 w-44 border  tracking-wider">KKM</th>
              <th className="py-3 px-5 border  tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <>
                <LoadingTable count={[1, 2, 3]} />
                <LoadingTable count={[1, 2, 3]} />
                <LoadingTable count={[1, 2, 3]} />
                <LoadingTable count={[1, 2, 3]} />
                <LoadingTable count={[1, 2, 3]} />
                <LoadingTable count={[1, 2, 3]} />
                <LoadingTable count={[1, 2, 3]} />
                <LoadingTable count={[1, 2, 3]} />
                <LoadingTable count={[1, 2, 3]} />
              </>
            ) : (
              data?.data?.map((m) => (
                <tr key={m.id} className=" text-center capitalize text-sm">
                  <td className="py-2 px-2 text-left whitespace-nowrap">
                    {m.nama}
                  </td>
                  <td className="py-2 whitespace-nowrap">{m.kkm}</td>
                  <td className="py-2 px-2 whitespace-nowrap flex justify-center items-center gap-x-1">
                    <button
                      onClick={() =>
                        setModal({ modalEdit: !modal.modalEdit, data: m })
                      }
                      className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                    >
                      Edit
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
