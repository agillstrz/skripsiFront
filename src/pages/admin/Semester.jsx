import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ModalEditGuru from "../../components/modalAdmin/ModalEditGuru";
import Fetcher from "../../hooks/Fetcher";
import ModalTambahGuru from "../../components/ModalAdmin/ModalTambahGuru";
import ModalTambahSemester from "../../components/ModalAdmin/ModalTambahSemester";
import { Toaster, toast } from "react-hot-toast";
import ModalEditSemester from "../../components/ModalAdmin/ModalEditSemester";

export default function Semester() {
  const [modal, setModal] = useState({
    modalTambah: false,
    modalEdit: false,
    data: {},
  });
  const [message, setMessage] = useState("");

  const { data, error, loading, setFetched, fetched } = Fetcher("semester");

  useEffect(() => {
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      <Toaster />
      {modal.modalTambah && (
        <ModalTambahSemester
          setFetched={setFetched}
          fetched={fetched}
          setOpen={setModal}
          setMessage={setMessage}
        />
      )}
      {modal.modalEdit && (
        <ModalEditSemester
          data={modal.data}
          setFetched={setFetched}
          fetched={fetched}
          setOpen={setModal}
          setMessage={setMessage}
        />
      )}
      <div className="flex w-full justify-end mb-5">
        <button
          onClick={() => setModal({ modalTambah: !modal.modalTambah })}
          className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
        >
          Tambah Semester <IoIosAdd size={20} />
        </button>
      </div>
      <div className="overflow-x-auto justify-center flex ">
        <table className=" divide-y w-1/2 divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 px-5   border  tracking-wider">Nama</th>
              <th className="py-3 px-5 border  tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading && !data ? (
              <>loading</>
            ) : (
              data?.map((m) => (
                <tr key={m.id} className=" text-center capitalize text-sm">
                  <td className="py-2 whitespace-nowrap">{m.nama}</td>
                  <td className="py-2 px-2 whitespace-nowrap justify-center flex items-center gap-x-1">
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
