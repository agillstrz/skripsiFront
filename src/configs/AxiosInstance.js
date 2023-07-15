import axios from "axios";
import { CONSTANT } from "../utils/Constant";
import Auth from "../utils/Auth";

const axiosInstance = axios.create({
  baseURL: CONSTANT.BASEURL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${Auth.getAccesToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
