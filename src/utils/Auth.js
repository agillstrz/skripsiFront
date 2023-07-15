import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("token") || Cookies.get("role")) return true;
    return null;
  },
  getAccesToken() {
    return Cookies.get("token");
  },
  getRoleAs() {
    return Cookies.get("role");
  },
  getId() {
    return Cookies.get("id");
  },
  getName() {
    return Cookies.get("name");
  },
  getKelas() {
    return Cookies.get("kelas_id");
  },
  signOut(navigate) {
    navigate("/");
    Cookies.remove("token");
    Cookies.remove("role");
    Cookies.remove("name");
    Cookies.remove("id");
    Cookies.remove("kelas_id");
  },
  storeInfoCookie(data) {
    if (!data) return null;

    Cookies.set("token", data.token);
    Cookies.set("role", data.data.role);
    Cookies.set("name", data.data.name);
    Cookies.set("id", data.data.siswa.id);
    Cookies.set("kelas_id", data.data.siswa.kelas_id);
    return data;
  },
};

export default Auth;
