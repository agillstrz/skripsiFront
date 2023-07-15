import jsPDF from "jspdf";
import React, { useContext } from "react";
import { BsCalendarWeek } from "react-icons/bs";
import { MdFileDownload } from "react-icons/md";
import LoadingTable from "../components/Loading/LoadingTable";
import Fetcher from "../hooks/Fetcher";
import Auth from "../utils/Auth";
import ExportPdf from "./ExportPdf";
import { UserContext } from "../App";

export default function JadwalUjian() {
  const handlePrint = () => {
    window.print();
  };

  const jadwal = [
    {
      ruangan: "4A",
      hari: "Senin",
      mapel: "matematika",
      waktu: "09.00-10.00",
      pengawas: "Budi",
    },
    {
      ruangan: "4A",
      hari: "Selasa",
      mapel: "Ipa",
      waktu: "09.00-10.00",
      pengawas: "Budi",
    },
    {
      ruangan: "4A",
      hari: "Rabu",
      mapel: "Agama",
      waktu: "09.00-10.00",
      pengawas: "Budi",
    },
    {
      ruangan: "4A",
      hari: "Kamis",
      mapel: "Bahasa inggris",
      waktu: "09.00-10.00",
      pengawas: "Budi",
    },
  ];
  const { data, loading, error } = Fetcher(
    `jadwalUjianSiswa?kelas_id=${Auth.getKelas()}`
  );
  const { user } = useContext(UserContext);
  const exportPdf = async () => {
    const doc = new jsPDF({ orientation: "portrait" });
    doc.text("Kartu Ujian Sekolah Kujang", 10, 10);
    const fontSize = 12;
    const x = 10; // X-coordinate
    let y = 20; // Initial Y-coordinate
    doc.setFontSize(fontSize);
    doc.text(`Name: ${user?.nama}`, x, y);
    y += 8; // Increase Y-coordinate for the next line
    doc.text(`Email: ${user?.email}`, x, y);
    y += 8; // Increase Y-coordinate for the next line
    doc.text(`Kelas: ${user?.kelas.nama}`, x, y);

    doc.autoTable({
      startY: 45,
      html: "#my-table",
    });

    doc.save("kartu_ujian.pdf");
  };
  return (
    <div>
      <div className="w-full flex justify-between items-end mb-5">
        <h1 className="lg:text-2xl font-bold capitalize lg:mb-8 flex items-center gap-x-1">
          <BsCalendarWeek /> Jadwal Ujian
        </h1>
        {user && (
          <button
            onClick={exportPdf}
            className="py-1 px-2 font-medium text-sm flex items-center gap-x-1 rounded-md btn-primary"
          >
            Cetak Kartu Ujian <MdFileDownload />
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table
          className="min-w-full divide-y divide-gray-200 border"
          id="my-table"
        >
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3   tracking-wider">Hari</th>
              <th className="py-3   tracking-wider">tanggal</th>
              <th className="py-3   tracking-wider">Nama Pelajaran</th>
              <th className="py-3   tracking-wider">Waktu</th>
              <th className="py-3   tracking-wider">Pengawas</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <>
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
              </>
            ) : (
              data?.map((jadwal) => (
                <tr key={jadwal.id} className="text-center capitalize text-sm">
                  <td className="py-2  whitespace-nowrap">{jadwal?.hari}</td>
                  <td className="py-2  whitespace-nowrap">{jadwal?.tanggal}</td>
                  <td className="py-2  whitespace-nowrap">
                    {jadwal?.pelajaran?.nama}
                  </td>

                  <td className="py-2 whitespace-nowrap">
                    {jadwal?.mulai} - {jadwal?.selesai}
                  </td>
                  <td className="py-2 whitespace-nowrap">{jadwal?.pengawas}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
