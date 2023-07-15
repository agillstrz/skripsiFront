import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import LoadingTable from "../../components/Loading/LoadingTable";
import ModalEditKelas from "../../components/modalAdmin/ModalEditKelas";
import ModalTambahKelas from "../../components/modalAdmin/ModalTambahKelas";
import Fetcher from "../../hooks/Fetcher";
import axiosInstance from "../../configs/AxiosInstance";

export default function KelasAdmin() {
  let navigate = useNavigate();
  const [modal, setModal] = useState({
    modalTambah: false,
    modalEdit: false,
  });
  const [semester, setSemester] = useState([]);
  const { data, error, loading, setFetched, fetched } = Fetcher("kelas");

  useEffect(() => {
    axiosInstance.get("semesterSekarang").then((res) => setSemester(res.data));
  }, []);

  const handleSemester = (e) => {
    e.preventDefault();
    axiosInstance.post("semester").then(setFetched(!fetched));
  };

  return (
    <>
      {modal.modalTambah && (
        <ModalTambahKelas
          setFetched={setFetched}
          fetched={fetched}
          setOpen={setModal}
        />
      )}
      {modal.modalEdit && <ModalEditKelas setOpen={setModal} />}
      <div className="flex w-full justify-between mb-5">
        <button
          onClick={handleSemester}
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
        Semester saat ini : {semester?.id}
      </p>
      <div className="overflow-x-auto  flex justify-center">
        <table className=" divide-y min-w-full divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 w-[2%] border  tracking-wider">No</th>
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
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8]} />
              </>
            ) : (
              data?.data?.data.map((kelas) => (
                <tr key={kelas.id} className=" text-center capitalize text-sm">
                  <td className="py-2  whitespace-nowrap">1</td>
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
                      onClick={() => setModal({ modalEdit: !modal.modalEdit })}
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
