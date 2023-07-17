import axiosInstance from "../configs/AxiosInstance";

const UPDATE = {
  async updateProfile(data) {
    try {
      const { email, nik, nomor_hp, ibu_kandung, alamat, foto, id } = data;
      const res = await axiosInstance.put(`siswa/${id}`, {
        email,
        nik,
        nomor_hp,
        ibu_kandung,
        alamat,
        foto,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async updateNilai(id, nilai) {
    try {
      const res = await axiosInstance.put(`nilai/${id}?nilai=${nilai}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async editJadwal(data) {
    try {
      const { pelajaran_id, kelas_id, hari, guru_id, mulai, selesai, id } =
        data;
      const res = await axiosInstance.put(`jadwal/${id}`, {
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
  async updateNilaiUjian(id, nilai) {
    try {
      const res = await axiosInstance.put(`nilaiUjian/${id}?nilai=${nilai}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async updatePembayaran(data) {
    const { semester_id, tanggal_bayar, metode, jumlah, status, id } = data;
    try {
      const res = await axiosInstance.put(`pembayaran/${id}`, {
        semester_id,
        tanggal_bayar,
        metode,
        jumlah,
        status,
        id,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async editBerita(data) {
    try {
      const { judul, deskripsi, foto, id } = data;
      const res = await axiosInstance.put(`berita/${id}`, {
        judul,
        deskripsi,
        foto,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async editKategori(data) {
    try {
      const { nama, foto, id } = data;
      const res = await axiosInstance.put(`kategori/${id}`, {
        nama,
        foto,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async updateJadwalAkademik(data) {
    try {
      const { kegiatan, mulai, akhir, id } = data;
      const res = await axiosInstance.put(`jadwalAkademik/${id}`, {
        kegiatan,
        mulai,
        akhir,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export default UPDATE;
