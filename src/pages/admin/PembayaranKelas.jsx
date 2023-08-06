import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ModalTambahSiswa from "../../components/ModalAdmin/ModalTambahSiswa";
import Fetcher from "../../hooks/Fetcher";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ModalUpdatePembayaran from "../../components/ModalAdmin/ModalUpdatePembayaran";
import POST from "../../apis/post.api";
import axiosInstance from "../../configs/AxiosInstance";
import { GiTakeMyMoney } from "react-icons/gi";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function PembayaranKelas() {
  const { state } = useLocation();
  const { id } = useParams();
  let navigate = useNavigate();
  const [sem, setSem] = useState([]);
  const [semester, setSemester] = useState(1);
  const [modal, setModal] = useState({
    modalTambah: false,
    modalPembayaran: false,
    modalEdit: false,
    data: {},
  });
  const { data, loading, fetched, setFetched } = Fetcher(
    `pembayaran?kelas_id=${id}&semester=${semester}`
  );

  useEffect(() => {
    axiosInstance.get("semester").then((res) => setSem(res.data));
  }, []);

  const handleOnchange = (e) => {
    e.preventDefault();
    setSemester(Number(e.target.value));
    setFetched(!fetched);
  };

  return (
    <>
      {modal.modalPembayaran && (
        <ModalUpdatePembayaran
          setFetched={setFetched}
          setOpen={setModal}
          fetched={fetched}
          data={modal.data}
        />
      )}
      <div className="flex justify-between mb-5">
        <h1 className="lg:text-2xl font-bold capitalize flex items-center gap-x-1">
          <GiTakeMyMoney /> Pembayaran
        </h1>
        <select onChange={handleOnchange} name="" id="">
          {sem &&
            sem.map((m) => (
              <option key={m.id} value={m.id}>
                Semester {m.id}
              </option>
            ))}
        </select>
      </div>
      <div className="overflow-x-auto flex justify-center">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              {/* <th className="py-3 w-[5%] border  tracking-wider">No</th> */}
              <th className="py-3 px-5  border  tracking-wider">semester</th>
              <th className="py-3 px-5  border  tracking-wider">NIM</th>
              <th className="py-3 px-5  border  tracking-wider">Nama</th>
              <th className="py-3 px-5 border  tracking-wider">Jumlah</th>
              <th className="py-3 px-5 border  tracking-wider">
                tanggal bayar
              </th>
              <th className="py-3 px-5 border  tracking-wider">Metode</th>
              <th className="py-3 px-5 border  tracking-wider">Status</th>
              {/* <th className="py-3 px-5 border  tracking-wider">Pembayaran 2</th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading && !data ? (
              <>loading</>
            ) : (
              data?.map((m) => (
                <tr key={m.id} className=" text-center capitalize text-sm">
                  <td className="py-2 whitespace-nowrap">{m?.semester?.id}</td>
                  <td className="py-2 whitespace-nowrap">{m?.siswa?.nim}</td>
                  <td className="py-2 whitespace-nowrap">{m?.siswa?.nama}</td>
                  <td className="py-2 whitespace-nowrap">
                    <FormatRupiah value={m?.jumlah} />
                  </td>
                  <td className="py-2 whitespace-nowrap">{m?.tanggal_bayar}</td>
                  <td className="py-2 whitespace-nowrap">{m?.metode}</td>
                  <td className="py-2 whitespace-nowrap">
                    <button
                      onClick={() =>
                        setModal({
                          modalPembayaran: !modal.modalPembayaran,
                          data: m,
                        })
                      }
                      className="text-sm btn-primary px-2 py-[2px] rounded-lg"
                    >
                      {`${m?.status == 0 ? "Belum Lunas" : "lunas"}`}
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
