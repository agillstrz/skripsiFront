import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ModalTambahSiswa from "../../components/ModalAdmin/ModalTambahSiswa";
import Fetcher from "../../hooks/Fetcher";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ModalUpdatePembayaran from "../../components/ModalAdmin/ModalUpdatePembayaran";
import POST from "../../apis/post.api";

export default function SiswaKelas() {
  const { id, kelas } = useParams();
  let navigate = useNavigate();
  const [modal, setModal] = useState({
    modalTambah: false,
    modalPembayaran: false,
    modalEdit: false,
    data: {},
  });
  const { data, loading, fetched, setFetched } = Fetcher(`siswa/${id}`);
  const { data: sem, loading: load } = Fetcher(`semester`);

  const tambahNilai = (e, semester_id) => {
    e.preventDefault();
    POST.tambahNilai(semester_id, Number(id)).then((res) => console.log(res));
  };

  return (
    <>
      {modal.modalTambah && (
        <ModalTambahSiswa
          setFetched={setFetched}
          fetched={fetched}
          setOpen={setModal}
          kelas={id}
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
      <div className="flex w-full items-center justify-between mb-5">
        <h1 className="lg:text-2xl font-bold capitalize  flex items-center gap-x-1">
          Kelas {kelas}
        </h1>
        <button
          onClick={() => setModal({ modalTambah: !modal.modalTambah })}
          className="py-1 px-2 font-medium text-sm flex items-center rounded-md btn-primary"
        >
          Tambah Siswa <IoIosAdd size={20} />
        </button>
      </div>
      <div className="overflow-x-auto flex justify-center">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 w-[5%] border  tracking-wider">No</th>
              <th className="py-3 px-5 w-12  border tracking-wider">Kelas</th>
              <th className="py-3 px-5  border  tracking-wider">NIM</th>
              <th className="py-3 px-5  border  tracking-wider">Nama</th>
              <th className="py-3 px-5  border  tracking-wider">Nomor Hp</th>

              <th className="py-3 px-5  border  tracking-wider">
                nilai akademik
              </th>
              <th className="py-3 px-5 border  tracking-wider">Nilai Ujian</th>
              <th className="py-3 px-5 border  tracking-wider">Pembayaran</th>
              {/* <th className="py-3 px-5 border  tracking-wider">Pembayaran 2</th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading && !data ? (
              <>loading</>
            ) : (
              data?.data?.map((m) => (
                <tr key={m.id} className=" text-center capitalize text-sm">
                  <td className="py-2  whitespace-nowrap">1</td>
                  <td className="py-2 whitespace-nowrap">{m.kelas?.nama}</td>
                  <td className="py-2 whitespace-nowrap">{m.nim}</td>
                  <td className="py-2 whitespace-nowrap">{m.nama}</td>
                  <td className="py-2 whitespace-nowrap">{m?.nomor_hp}</td>

                  <td className="py-2 whitespace-nowrap">
                    <button
                      onClick={() =>
                        navigate(`/admin/kelas/nilai-kelas`, { state: m })
                      }
                      className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                    >
                      Lihat
                    </button>
                  </td>

                  <td className="py-2 whitespace-nowrap">
                    <button
                      onClick={() =>
                        navigate(`/admin/kelas/nilai-ujian`, {
                          state: [m.id, m.nama],
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
                        navigate(`/admin/kelas/pembayaran-kelas/${id}`, {
                          state: m.id,
                        })
                      }
                      className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                    >
                      Lihat
                    </button>
                  </td>

                  {/* <td className="py-2 whitespace-nowrap">
                    <button
                      onClick={() =>
                        setModal({
                          modalPembayaran: !modal.modalPembayaran,
                          data: m.pembayaran[0],
                        })
                      }
                      className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                    >
                      {`${
                        m.pembayaran[0]?.status == 0 ? "Belum Lunas" : "lunas"
                      }`}
                    </button>
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    <button
                      onClick={() =>
                        setModal({
                          modalPembayaran: !modal.modalPembayaran,
                          data: m.pembayaran[1],
                        })
                      }
                      className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                    >
                      {`${
                        m.pembayaran[1]?.status == 0 ? "Belum Lunas" : "lunas"
                      }`}
                    </button>
                  </td> */}
                </tr>
              ))
            )}
            {sem &&
              sem?.map((m) => (
                <tr key={m.id} className="text-center capitalize text-sm">
                  <td colSpan={5} className="py-2">
                    <button
                      onClick={(e) => tambahNilai(e, m.id)}
                      className="btn-primary px-2 py-1 w-1/2 rounded-lg"
                    >
                      Nilai Semester {m.id}
                    </button>
                  </td>
                </tr>
              ))}

            {/* Add more rows here */}
          </tbody>
        </table>
      </div>
    </>
  );
}
