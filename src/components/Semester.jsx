import React, { useEffect, useState } from "react";

export default function Semester() {
  const [semester, setSemester] = useState(1);
  useEffect(() => {
    axiosInstance.get("semesterSekarang").then((res) => setSemester(res.data));
  }, [semester]);

  const handleSemester = (e) => {
    e.preventDefault();
    axiosInstance.post("semester").then(setFetched(!fetched));
  };
  return <div>Semester</div>;
}
