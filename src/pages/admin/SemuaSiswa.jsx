import React, { useEffect, useState } from "react";
import Fetcher from "../../hooks/Fetcher";
import LoadingTable from "../../components/Loading/LoadingTable";
import axiosInstance from "../../configs/AxiosInstance";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ModalUpdatePembayaran from "../../components/ModalAdmin/ModalUpdatePembayaran";

export default function SemuaSiswa() {
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState("");
  const [modal, setModal] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axiosInstance(
        `semuaSiswa?page=${page}&keyword=${searching}`
      );
      const { data } = response.data;
      setData(data);
      setTotalPages(response.data.data.total);
      setFetched(!fetched);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(currentPage);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <>
      <div className="flex w-full items-center justify-between mb-5">
        <h1 className="lg:text-2xl font-bold capitalize  flex items-center gap-x-1">
          Semua Siswa SMP Pupuk Kujang
        </h1>
        <form action="" className="mb-2 gap-x-1 flex" onSubmit={handleSearch}>
          <input
            type="text"
            onChange={(e) => setSearching(e.target.value)}
            placeholder="Cari Siswa"
            className="py-1 px-2 rounded-md  outline-none"
          />
          <button type="submit" className="btn-primary  py-1 px-2 rounded-md">
            <BsSearch />
          </button>
        </form>
      </div>

      <div className="overflow-x-auto flex justify-center">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead>
            <tr className="text-sm font-medium text-center text-gray-500  capitalize">
              <th className="py-3 px-5  border  tracking-wider">Email</th>
              <th className="py-3 px-5  border  tracking-wider">Nama</th>
              <th className="py-3 px-5  border  tracking-wider">NIM</th>
              <th className="py-3 px-5  border  tracking-wider">Nomor Hp</th>
              <th className="py-3 px-5  border tracking-wider">Kelas</th>
              {/* <th className="py-3 px-5 border  tracking-wider">Pembayaran 2</th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <>
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
                <LoadingTable count={[1, 2, 3, 4, 5]} />
              </>
            ) : (
              data?.data.map((m) => (
                <tr key={m.id} className=" text-left capitalize text-sm">
                  <td className="py-2 px-2 text-left whitespace-nowrap">
                    {m.email}
                  </td>
                  <td className="py-2 px-2 text-left whitespace-nowrap">
                    {m.nama}
                  </td>
                  <td className="py-2 px-2 whitespace-nowrap">{m.nim}</td>

                  <td className="py-2 px-2 whitespace-nowrap">{m?.nomor_hp}</td>
                  <td className="py-2 px-2 text-center uppercase whitespace-nowrap">
                    <button
                      onClick={() =>
                        navigate(
                          `/admin/kelas/siswa-kelas/${m?.kelas.nama}/${m?.kelas.id}`
                        )
                      }
                      className="text-sm btn-primary w-1/2 px-2 py-[2px] rounded-lg"
                    >
                      {m.kelas.nama}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="w-full flex gap-x-2 mt-2 justify-end">
        <button
          onClick={goToPreviousPage}
          className="px-2 py-1 border font-semibold text-neutral transition-all duration-150 ease-out hover:text-primary"
        >
          Prev
        </button>
        <button
          onClick={goToNextPage}
          className="px-2 py-1 border font-semibold text-neutral transition-all duration-150 ease-out hover:text-primary"
        >
          Next
        </button>
      </div>
    </>
  );
}
