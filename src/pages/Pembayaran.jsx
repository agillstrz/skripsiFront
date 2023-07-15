import React, { useState } from "react";
import ModalDetailPembayaran from "../components/modal/ModalDetailPembayaran";
import { FormatRupiah } from "@arismun/format-rupiah";
import { GiTakeMyMoney } from "react-icons/gi";
import Fetcher from "../hooks/Fetcher";
import Auth from "../utils/Auth";
import LoadingTable from "../components/Loading/LoadingTable";

export default function Pembayaran() {
  const [isOpen, setOpen] = useState(false);
  const { data, loading, errror } = Fetcher(
    `pembayaranSiswa?siswa_id=${Auth.getId()}`
  );
  console.log(data);
  return (
    <>
      {isOpen && <ModalDetailPembayaran setOpen={setOpen} />}
      <h1 className="lg:text-2xl font-bold capitalize lg:mb-8 flex items-center gap-x-1">
        <GiTakeMyMoney /> Pembayaran
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead>
              <tr className="text-sm font-medium text-center text-gray-500 capitalize">
                <th className=" py-3   tracking-wider">Tahun-SMT</th>
                <th className=" py-3   tracking-wider">tanggal</th>
                <th className=" py-3   tracking-wider">jumlah</th>
                <th className=" py-3   tracking-wider">Metode</th>
                <th className=" py-3   tracking-wider">status</th>
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
                data?.map((pembayaran) => (
                  <tr
                    key={pembayaran.id}
                    className="text-center capitalize text-sm"
                  >
                    <td className="py-2 text-center whitespace-nowrap">
                      2023-{pembayaran?.semester_id}
                    </td>
                    <td className="py-2 text-center whitespace-nowrap">
                      {pembayaran?.tanggal_bayar}
                    </td>
                    <td className="py-2 whitespace-nowrap">
                      <FormatRupiah value={pembayaran?.jumlah} />
                    </td>
                    <td className="py-2 whitespace-nowrap">
                      {pembayaran?.metode}
                    </td>
                    <td className="py-2 whitespace-nowrap">
                      {pembayaran?.status == 1 ? "Lunas" : "belum dibayarkan"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
