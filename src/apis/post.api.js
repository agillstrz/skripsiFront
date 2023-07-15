import axiosInstance from "../configs/AxiosInstance";

const POST = {
  async tambahKelas(data) {
    try {
      const { nama, jenjang_id } = data;
      const res = await axiosInstance.post("kelas", {
        nama,
        jenjang_id,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async tambahJadwalAkademik(data) {
    try {
      const { kegiatan, mulai, akhir } = data;
      const res = await axiosInstance.post("jadwalAkademik", {
        kegiatan,
        mulai,
        akhir,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async tambahGuru(data) {
    try {
      const { nama, jenis_kelamin, nomorhp } = data;
      const res = await axiosInstance.post("guru", {
        nama,
        jenis_kelamin,
        nomorhp,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async tambahPelajaran(data) {
    try {
      const { nama, kkm } = data;
      const res = await axiosInstance.post("pelajaran", {
        nama,
        kkm,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  async tambahNilai(id, kelas) {
    try {
      const res = await axiosInstance.post("createNilai", {
        semester_id: id,
        kelas_id: kelas,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async tambahJadwal(data) {
    try {
      const { pelajaran_id, kelas_id, hari, guru_id, mulai, selesai } = data;
      const res = await axiosInstance.post("jadwal", {
        pelajaran_id,
        kelas_id,
        guru_id,
        mulai,
        selesai,
        hari,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async tambahSiswa(data) {
    try {
      const { name, kelas_id, nim, email, password } = data;
      const res = await axiosInstance.post("auth/register", {
        name,
        kelas_id,
        nim,
        email,
        password,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async tambahBerita(data) {
    try {
      const { judul, kategori, deskripsi, foto } = data;
      const res = await axiosInstance.post("berita", {
        judul,
        kategori,
        deskripsi,
        foto,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async tambahKategori(data) {
    try {
      const { nama, foto } = data;
      const res = await axiosInstance.post("kategori", {
        nama,
        foto,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async tambahUjian(data) {
    try {
      const {
        pelajaran_id,
        kelas_id,
        hari,
        tanggal,
        mulai,
        selesai,
        pengawas,
      } = data;
      const res = await axiosInstance.post("jadwalUjian", {
        pelajaran_id,
        kelas_id,
        hari,
        tanggal,
        mulai,
        selesai,
        pengawas,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export default POST;
