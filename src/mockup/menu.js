import { BiHomeAlt } from "react-icons/bi";
import { BsCalendarWeek, BsJournalBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrDocumentTime } from "react-icons/gr";
export const sidebar = [
  {
    name: "Beranda",
    path: "",
    icon: <BiHomeAlt />,
  },
  {
    name: "Profil",
    path: "",
    icon: <CgProfile />,
  },
  {
    name: "pembayaran",
    path: "",
    icon: <GiTakeMyMoney />,
  },
  {
    name: "jadwal pelajaran",
    path: "",
    icon: <GrDocumentTime />,
  },
  {
    name: "nilai akademik",
    path: "",
    icon: <BsJournalBookmark />,
  },
  {
    name: "kalender akademik ",
    path: "",
    icon: <BsCalendarWeek />,
  },
];
