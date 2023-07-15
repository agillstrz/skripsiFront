import jsPDF from "jspdf";
import "jspdf-autotable";
import React from "react";
export default function ExportPdf({ data }) {
  const studentData = [
    {
      id: 1,
      name: "Neeraj",
      email: "neeraj@gmail.com",
      year: 2015,
      fee: 167000,
    },
    {
      id: 2,
      name: "Vikas",
      email: "vikas@gmail.com",
      year: 2013,
      fee: 785462,
    },

    {
      id: 3,
      name: "Rahul",
      email: "rahul@gmail.com",
      year: 2020,
      fee: 784596,
    },
  ];

  const columns = [
    { title: "Mata Pelajaran", field: "pelajaran.id", type: "object" },
    { title: "Hari", field: "hari" },
    { title: "Tanggal", field: "tanggal", type: "numeric" },
    { title: "Mulai", field: "mulai", type: "numeric" },
    { title: "selesai", field: "selesai", type: "numeric" },
    { title: "Pengawas", field: "pengawas" },
  ];

  const downloadPdf = () => {
    // console.log(data[0].pelajaran.nama);
    const doc = new jsPDF();
    doc.text("Kartu Ujian Sekolah Kujang", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: data,
    });
    doc.save("table.pdf");
  };

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align="center">Export Data to Pdf in Material Table</h4>

      <button onClick={() => downloadPdf()}>KLIK BOS</button>
    </div>
  );
}
