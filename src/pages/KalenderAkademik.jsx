import React from "react";
import Fetcher from "../hooks/Fetcher";
import LoadingTable from "../components/Loading/LoadingTable";

export default function KalenderAkademik() {
  const {
    data: kegiatan,
    loading,
    fetched,
    setFetched,
  } = Fetcher("jadwalAkademik");
  return (
    <>
      <div className="mb-5 h-8  flex justify-center items-center ">
        <p className="text-3xl capitalize font-bold">Kalender Akademik</p>
      </div>
      <div className="flex justify-center">
        <div className="border  w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border">
              <thead>
                <tr className="text-sm text-center text-white font-medium capitalize">
                  <th className=" py-3  lg:w-[60%] border-r  bg-primary tracking-wider">
                    Kegiatan
                  </th>
                  <th className=" py-3  border-r w-[20%] bg-primary tracking-wider">
                    Tanggal Mulai
                  </th>
                  <th className=" py-3  border-r w-[20%] bg-primary tracking-wider">
                    Tanggal Berakhir
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading && (
                  <>
                    <LoadingTable count={[1, 2, 3]} />
                    <LoadingTable count={[1, 2, 3]} />
                    <LoadingTable count={[1, 2, 3]} />
                    <LoadingTable count={[1, 2, 3]} />
                  </>
                )}
                {kegiatan &&
                  kegiatan?.map((m, index) => (
                    <tr key={m.id} className="font-medium text-sm ">
                      <td className=" py-2 whitespace-wrap px-2 border-r lg:w-[50%]">
                        <p>{m.kegiatan}</p>
                      </td>
                      <td className="  py-2 text-center border-r whitespace-wrap">
                        {m.mulai}
                      </td>
                      <td className=" py-2 text-center whitespace-wrap">
                        {m.akhir}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
