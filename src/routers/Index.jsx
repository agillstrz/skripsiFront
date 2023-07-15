import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "../pages/Beranda";
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
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import Guru from "../pages/admin/Guru";
import JadwalAdmin from "../pages/admin/JadwalAdmin";
import JadwalKelas from "../pages/admin/JadwalKelas";
import KelasAdmin from "../pages/admin/KelasAdmin";
import LayoutAdmin from "../pages/admin/LayoutAdmin";
import PelajaranAdmin from "../pages/admin/PelajaranAdmin";
import NilaiKelas from "../pages/admin/NilaiKelas";
import SiswaKelas from "../pages/admin/SiswaKelas";
import Login from "../pages/auth/Login";
import Berita from "../pages/admin/Berita";
import KategoriBerita from "../pages/admin/KategoriBerita";
import JadwalKelasUjian from "../pages/admin/JadwalKelasUjian";
import NilaiUjianAdmin from "../pages/admin/NilaiUjianAdmin";
import PembayaranKelas from "../pages/admin/PembayaranKelas";
import DetailBerita from "../pages/DetailBerita";
import JadwalAkademik from "../pages/admin/JadwalAkademik";
import Auth from "../utils/Auth";
import Semester from "../pages/admin/Semester";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {Auth.isAuthorization() && (
          <Route path="kujang" element={<Layout />}>
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
        )}
        {Auth.isAuthorization() && Auth.getRoleAs() == 1} &&
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="kelas" element={<KelasAdmin />} />
          <Route path="berita-admin" element={<Berita />} />
          <Route path="kategori-berita" element={<KategoriBerita />} />
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

            <Route path="pelajaran" element={<PelajaranAdmin />} />
            <Route path="jadwal" element={<JadwalAdmin />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
