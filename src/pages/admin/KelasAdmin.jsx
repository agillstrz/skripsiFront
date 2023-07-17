import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import LoadingTable from "../../components/Loading/LoadingTable";
import ModalEditKelas from "../../components/modalAdmin/ModalEditKelas";
import ModalTambahKelas from "../../components/modalAdmin/ModalTambahKelas";
import Fetcher from "../../hooks/Fetcher";
import axiosInstance from "../../configs/AxiosInstance";
import ModalTambahSemester from "../../components/ModalAdmin/ModalTambahSemester";
import { Toaster, toast } from "react-hot-toast";

export default function KelasAdmin() {
  let navigate = useNavigate();
  const [modal, setModal] = useState({
    modalTambah: false,
    modalEdit: false,
    modalSemester: false,
    data: {},
  });
  const [message, setMessage] = useState("");
  const [semester, setSemester] = useState(1);

  const { data, error, loading, setFetched, fetched } = Fetcher("kelas");

  useEffect(() => {
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
    axiosInstance.get("semesterSekarang").then((res) => setSemester(res.data));
  }, [message]);

  return (
    <>
      <Toaster />
      {modal.modalSemester && (
        <ModalTambahSemester setOpen={setModal} setMessage={setMessage} />
      )}
      {modal.modalTambah && (
        <ModalTambahKelas
          setFetched={setFetched}
          fetched={fetched}
          setOpen={setModal}
        />
      )}
      {modal.modalEdit && (
        <ModalEditKelas
          setFetched={setFetched}
          fetched={fetched}
          data={modal.data}
          setOpen={setModal}
        />
      )}
      <div className="flex w-full justify-between mb-5">
        <button
          onClick={() =>
            setModal({
              modalSemester: !modal.modalSemester,
            })
          }
          className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
        >
          Tambah Semester <IoIosAdd size={20} />
        </button>

        <button
          onClick={() => setModal({ modalTambah: !modal.modalTambah })}
          className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
        >
          Tambah Kelas <IoIosAdd size={20} />
        </button>
      </div>
      <p className="font-medium text-sm mb-2">
        Semester saat ini : {semester && semester?.id}
      </p>
      <div className="overflow-x-auto  flex justify-center">
        <table className=" divide-y min-w-full divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 px-5 w-40  border  tracking-wider">Kelas</th>
              <th className="py-3 px-5  border  tracking-wider">Jenjang</th>
              <th className="py-3 px-5  border  tracking-wider">Jadwal</th>
              <th className="py-3 px-5 w-40  border  tracking-wider">Siswa</th>
              <th className="py-3 px-5  border  tracking-wider">
                Jadwal Ujian
              </th>
              <th className="py-3 px-5  border  tracking-wider">Pembayaran</th>
              <th className="py-3 px-5 w-40 border  tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <>
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7]} />
              </>
            ) : (
              data?.data?.data.map((kelas) => (
                <tr key={kelas.id} className=" text-center capitalize text-sm">
                  <td className="py-2 whitespace-nowrap">{kelas.nama}</td>
                  <td className="py-2 whitespace-nowrap">SMP</td>
                  <td className="py-2 whitespace-nowrap">
                    <Link
                      to={`jadwal-kelas/${kelas.id}`}
                      className="py-[1px] font-semibold px-2 btn-primary rounded"
                    >
                      Lihat
                    </Link>
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    <Link
                      to={`siswa-kelas/${kelas.nama}/${kelas.id}`}
                      className="py-[1px] font-semibold px-2 btn-primary rounded"
                    >
                      Lihat
                    </Link>
                  </td>

                  <td className="py-2 whitespace-nowrap">
                    <Link
                      to={`jadwal-ujian/${kelas.id}`}
                      className="py-[1px] font-semibold px-2 btn-primary rounded"
                    >
                      Lihat
                    </Link>
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    <Link
                      to={`pembayaran-kelas/${kelas.id}`}
                      className="py-[1px] font-semibold px-2 btn-primary rounded"
                    >
                      Lihat
                    </Link>
                  </td>
                  <td className="py-2 px-2 whitespace-nowrap flex justify-center items-center gap-x-1">
                    <button
                      onClick={() =>
                        setModal({
                          modalEdit: !modal.modalEdit,
                          data: { kelas: kelas.nama, id: kelas.id },
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
