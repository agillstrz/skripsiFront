import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ModalTambahSiswa from "../../components/ModalAdmin/ModalTambahSiswa";
import Fetcher from "../../hooks/Fetcher";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ModalUpdatePembayaran from "../../components/ModalAdmin/ModalUpdatePembayaran";
import POST from "../../apis/post.api";
import LoadingTable from "../../components/Loading/LoadingTable";
import { useEffect } from "react";
import axiosInstance from "../../configs/AxiosInstance";
import ModalAccept from "../../components/ModalAdmin/ModalAccept";
import { Toaster, toast } from "react-hot-toast";
import ModalDetailSiswa from "../../components/ModalAdmin/ModalDetailSiswa";
import ModalTambahSiswaBaru from "../../components/ModalAdmin/ModalTambahSiswaBaru";
import ModalHapus from "../../components/ModalAdmin/ModalHapus";

export default function SiswaKelas() {
  const { id, kelas } = useParams();
  let navigate = useNavigate();
  const [modal, setModal] = useState({
    modalTambah: false,
    modalPembayaran: false,
    modalEdit: false,
    modalAcc: false,
    modalDetail: false,
    modalTambahSiswaBaru: false,
    modalHapus: false,
    data: {},
  });
  const [message, setMessage] = useState("");
  const { data, loading, fetched, setFetched } = Fetcher(`siswa/${id}`);
  const [sem, setSem] = useState(null);
  useEffect(() => {
    axiosInstance.get("semesterSekarang").then((res) => setSem(res.data));
  }, []);
  useEffect(() => {
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      <Toaster />
      {modal.modalTambahSiswaBaru && (
        <ModalTambahSiswaBaru
          setFetched={setFetched}
          fetched={fetched}
          setOpen={setModal}
          kelas={id}
          data={modal.data}
          setMessage={setMessage}
        />
      )}
      {modal.modalTambah && (
        <ModalTambahSiswa
          setFetched={setFetched}
          fetched={fetched}
          setOpen={setModal}
          kelas={id}
          setMessage={setMessage}
        />
      )}
      {modal.modalPembayaran && (
        <ModalUpdatePembayaran
          setFetched={setFetched}
          setOpen={setModal}
          fetched={fetched}
          data={modal.data}
        />
      )}
      {modal.modalAcc && (
        <ModalAccept
          setOpen={setModal}
          data={modal.data}
          setMessage={setMessage}
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
      {modal.modalDetail && (
        <ModalDetailSiswa setOpen={setModal} data={modal.data} />
      )}
      <div className="flex w-full items-center justify-between mb-5">
        <h1 className="lg:text-2xl font-bold capitalize  flex items-center gap-x-1">
          Kelas {kelas}
        </h1>
        <div className="flex gap-x-2">
          {sem && (
            <button
              onClick={() =>
                setModal({
                  modalTambahSiswaBaru: !modal.modalTambahSiswaBaru,
                  data: sem?.id,
                })
              }
              className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
            >
              Tambah Siswa Pindahan <IoIosAdd size={20} />
            </button>
          )}
          <button
            onClick={() => setModal({ modalTambah: !modal.modalTambah })}
            className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
          >
            Tambah Siswa <IoIosAdd size={20} />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto flex justify-center">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 px-5 w-5  border tracking-wider">No</th>
              <th className="py-3 px-5 w-12  border tracking-wider">Kelas</th>
              <th className="py-3 px-5  border  tracking-wider">NIS</th>
              <th className="py-3 px-5  border  tracking-wider">Email</th>
              <th className="py-3 px-5  border  tracking-wider">Nama</th>
              <th className="py-3 px-5  border  tracking-wider">Nomor Hp</th>

              <th className="py-3 px-5  border  tracking-wider">
                nilai akademik
              </th>
              <th className="py-3 px-5 border  tracking-wider">Nilai Ujian</th>
              <th className="py-3 px-5 border  tracking-wider">Detail</th>
              <th className="py-3 px-5 border  tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <>
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                <LoadingTable count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
              </>
            ) : (
              data?.data?.map((m, index) => (
                <tr key={m.id} className=" text-center capitalize text-sm">
                  <td className="py-2 whitespace-nowrap uppercase">
                    {++index}
                  </td>
                  <td className="py-2 whitespace-nowrap uppercase">
                    {m.kelas?.nama}
                  </td>
                  <td className="py-2 whitespace-nowrap">{m.nim}</td>
                  <td className="py-2 px-2 text-left whitespace-nowrap">
                    {m.email}
                  </td>
                  <td className="py-2 px-2 text-left whitespace-nowrap">
                    {m.nama}
                  </td>
                  <td className="py-2 whitespace-nowrap">{m?.nomor_hp}</td>

                  <td className="py-2 whitespace-nowrap">
                    <button
                      onClick={() =>
                        navigate(`/admin/kelas/nilai-kelas`, {
                          state: { data: m, sem: sem },
                        })
                      }
                      className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                    >
                      Lihat
                    </button>
                  </td>

                  <td className="py-2 whitespace-nowrap">
                    <button
                      onClick={() =>
                        navigate(`/admin/kelas/nilai-ujian`, { state: m })
                      }
                      className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                    >
                      Lihat
                    </button>
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    <button
                      onClick={() =>
                        setModal({ modalDetail: !modal.modalDetail, data: m })
                      }
                      className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                    >
                      Detail
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        setModal({
                          modalHapus: !modal.modalHapus,
                          data: { id: m.id, del: "siswa" },
                        })
                      }
                      className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
            {sem && (
              <tr className="text-center capitalize text-sm">
                <td colSpan={5} className="py-2">
                  <button
                    onClick={() =>
                      setModal({
                        modalAcc: !modal.modalAcc,
                        data: { id: sem.id, kelas: Number(id), nama: kelas },
                      })
                    }
                    className="btn-primary px-2 py-1 w-1/2 rounded-lg"
                  >
                    Publish data Semester {sem.nama}
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
