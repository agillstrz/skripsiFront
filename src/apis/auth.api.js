import axios from "axios";
import { CONSTANT } from "../utils/Constant";
import Auth from "../utils/Auth";
import { useContext } from "react";
import { UserContext } from "../App";

const AUTH = {
  async Login({ email, password }) {
    try {
      const res = await axios.post(`${CONSTANT.BASEURL}auth/login`, {
        email,
        password,
      });
      Auth.storeInfoCookie(res.data);
      return res;
    } catch (error) {
      const { message } = error;
      throw message;
    }
  },
};
export default AUTH;
