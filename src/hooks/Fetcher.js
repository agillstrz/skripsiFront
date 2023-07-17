import { useEffect, useState } from "react";
import axiosInstance from "../configs/AxiosInstance";

export default function Fetcher(url) {
  const [data, setDatas] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (url) {
      setLoading(true);
      axiosInstance
        .get(url)
        .then((res) => {
          setDatas(res.data);
        })
        .catch((error) => setError("gagal mendapatkan data..."))
        .finally(() => {
          setLoading(false);
          setFetched(false);
        });
    }
  }, [fetched]);
  return { error, loading, data, fetched, setFetched };
}
