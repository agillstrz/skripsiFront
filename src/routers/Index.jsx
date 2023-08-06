import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "../pages/Beranda";
import DetailBerita from "../pages/DetailBerita";
import Home from "../pages/Home";
import JadwalPelajaran from "../pages/JadwalPelajaran";
import JadwalUjian from "../pages/JadwalUjian";
import KalenderAkademik from "../pages/KalenderAkademik";
import Layout from "../pages/Layout";
import Nilai from "../pages/Nilai";
import NilaiUjian from "../pages/NilaiUjian";
import Pembayaran from "../pages/Pembayaran";
import Profil from "../pages/Profil";
import Akademik from "../pages/admin/Akademik";
import Berita from "../pages/admin/Berita";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import Guru from "../pages/admin/Guru";
import JadwalAdmin from "../pages/admin/JadwalAdmin";
import JadwalAkademik from "../pages/admin/JadwalAkademik";
import JadwalKelas from "../pages/admin/JadwalKelas";
import JadwalKelasUjian from "../pages/admin/JadwalKelasUjian";
import KelasAdmin from "../pages/admin/KelasAdmin";
import LayoutAdmin from "../pages/admin/LayoutAdmin";
import NilaiKelas from "../pages/admin/NilaiKelas";
import NilaiUjianAdmin from "../pages/admin/NilaiUjianAdmin";
import PelajaranAdmin from "../pages/admin/PelajaranAdmin";
import PembayaranKelas from "../pages/admin/PembayaranKelas";
import SiswaKelas from "../pages/admin/SiswaKelas";
import Auth from "../utils/Auth";
import PrivateAdmin from "./PrivateAdmin";
import PrivateUser from "./PrivateUser";
import SemuaSiswa from "../pages/admin/SemuaSiswa";
import Semester from "../pages/admin/Semester";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kujang" element={<PrivateUser />}>
          <Route index element={<Beranda />} />
          <Route path="pembayaran" element={<Pembayaran />} />
          <Route path="nilai" element={<Nilai />} />
          <Route path="profile" element={<Profil />} />
          <Route path="jadwal-pelajaran" element={<JadwalPelajaran />} />
          <Route path="berita/:id" element={<DetailBerita />} />
          <Route path="kalender" element={<KalenderAkademik />} />
          <Route path="jadwal-ujian" element={<JadwalUjian />} />
          <Route path="nilai-ujian" element={<NilaiUjian />} />
        </Route>
        <Route path="/admin" element={<PrivateAdmin />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="kelas" element={<KelasAdmin />} />
          <Route path="berita-admin" element={<Berita />} />
          <Route path="semua-siswa" element={<SemuaSiswa />} />
          <Route path="jadwal-akademik" element={<JadwalAkademik />} />
          <Route path="kelas/jadwal-kelas/:id" element={<JadwalKelas />} />
          <Route path="kelas/jadwal-ujian/:id" element={<JadwalKelasUjian />} />
          <Route
            path="kelas/pembayaran-kelas/:id"
            element={<PembayaranKelas />}
          />
          <Route path="kelas/nilai-kelas" element={<NilaiKelas />} />
          <Route path="kelas/nilai-ujian" element={<NilaiUjianAdmin />} />
          <Route path="kelas/siswa-kelas/:kelas/:id" element={<SiswaKelas />} />
          <Route path="akademik" element={<Akademik />}>
            <Route path="jadwal" element={<JadwalAdmin />} />
            <Route path="guru" element={<Guru />} />
            <Route path="semester" element={<Semester />} />

            <Route path="pelajaran" element={<PelajaranAdmin />} />
            <Route path="jadwal" element={<JadwalAdmin />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
