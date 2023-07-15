import { useEffect, useState } from "react";

export default function Fetcher(url) {
  const [data, setDatas] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    setFetched(true);
    if (url) {
      setLoading(true);
      axiosInstance
        .get(url)
        .then((res) => {
          setDatas(res.data);
        })
        .catch((error) => setError("gagal mendapatkan data..."))
        .finally(() => {
          setFetched(false);
          setLoading(false);
        });
    }
  }, []);
  return { fetched, error, loading, data, setFetched };
}
