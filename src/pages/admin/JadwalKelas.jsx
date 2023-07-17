import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ModalEditJadwal from "../../components/ModalAdmin/ModalEditJadwal";
import ModalTambahJadwal from "../../components/ModalAdmin/ModalTambahJadwal";
import Fetcher from "../../hooks/Fetcher";
import LoadingTable from "../../components/Loading/LoadingTable";
import ModalHapus from "../../components/ModalAdmin/ModalHapus";
import { useParams } from "react-router-dom";

export default function JadwalKelas() {
  const { id } = useParams();
  const [modal, setModal] = useState({
    modalTambah: false,
    modalEdit: false,
    data: {},
    modalHapus: false,
  });

  const { loading, data, fetched, setFetched } = Fetcher(
    `jadwal?kelas_id=${id}`
  );
  return (
    <>
      {modal.modalTambah && (
        <ModalTambahJadwal
          fetched={fetched}
          setFetched={setFetched}
          setOpen={setModal}
        />
      )}
      {modal.modalEdit && (
        <ModalEditJadwal
          setOpen={setModal}
          fetched={fetched}
          setFetched={setFetched}
          data={modal.data}
        />
      )}
      {modal.modalHapus && (
        <ModalHapus
          setOpen={setModal}
          fetched={fetched}
          setFetched={setFetched}
          data={modal.data}
        />
      )}

      <div className="flex w-full mb-5 justify-between">
        <h1 className="lg:text-2xl font-bold capitalize  flex items-center gap-x-1">
          Jadwal Akademik
        </h1>
        <button
          onClick={() => setModal({ modalTambah: !modal.modalTambah })}
          className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
        >
          Tambah Jadwal <IoIosAdd size={20} />
        </button>
      </div>
      <div className="overflow-x-auto  flex justify-center">
        <table className=" w-full divide-y divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 px-5 w-20  border  tracking-wider">Kelas</th>
              <th className="py-3 px-5  w-20 border  tracking-wider">Hari</th>
              <th className="py-3 px-5 w-44 border  tracking-wider">
                Mata Pelajaran
              </th>
              <th className="py-3 px-5 border w-44  tracking-wider">Guru</th>
              <th className="py-3 px-5 border w-44  tracking-wider">Waktu</th>
              <th className="py-3 px-5 border w-20  tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <>
                <LoadingTable count={[1, 2, 3, 4, 5, 6]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6]} />
              </>
            ) : (
              data?.data?.data.map((jadwal) => (
                <tr key={jadwal.id} className=" text-center capitalize text-sm">
                  <td className="py-2 whitespace-nowrap">
                    {jadwal?.kelas?.nama}
                  </td>
                  <td className="py-2 whitespace-nowrap">{jadwal.hari}</td>

                  <td className="py-2 whitespace-nowrap">
                    {jadwal?.pelajaran?.nama}
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    {jadwal?.guru?.nama}
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    {jadwal.mulai} - {jadwal.selesai}
                  </td>

                  <td className="py-2 px-2 whitespace-nowrap flex justify-center items-center gap-x-1">
                    <button
                      onClick={() =>
                        setModal({
                          modalEdit: !modal.modalEdit,
                          data: { jadwal },
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
            {/* Add more rows here */}
          </tbody>
        </table>
      </div>
    </>
  );
}
