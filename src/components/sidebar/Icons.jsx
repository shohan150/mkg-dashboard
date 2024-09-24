import { CgCommunity } from "react-icons/cg";
import { CiDollar } from "react-icons/ci";
import { FaCloudDownloadAlt, FaMoneyCheckAlt, FaRegCheckSquare } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrTableAdd } from "react-icons/gr";
import { HiOutlineBuildingStorefront, HiOutlineTableCells } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { LiaSmsSolid } from "react-icons/lia";
import { LuFileText } from "react-icons/lu";
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiChalkboardTeacherFill, PiExamBold, PiShapesFill, PiStudentBold } from "react-icons/pi";
import { RiDashboardHorizontalFill, RiParentFill, RiServiceLine } from "react-icons/ri";


export default function Icons({ name }) {
  switch (name) {
    case "RiDashboardHorizontalFill":
      return <RiDashboardHorizontalFill />;

    case "HiOutlineBuildingStorefront":
      return <HiOutlineBuildingStorefront />;

    case "MdOutlineEventAvailable":
      return <MdOutlineEventAvailable />;

    case "CgCommunity":
      return <CgCommunity />;

    case "IoMdSettings":
      return <IoMdSettings />;

    case "LiaSmsSolid":
      return <LiaSmsSolid />

    case "FaRegCheckSquare":
      return <FaRegCheckSquare />

    case "RiParentFill":
      return <RiParentFill />

    case "FaPeopleGroup":
      return <FaPeopleGroup />

    case "PiChalkboardTeacherFill":
      return <PiChalkboardTeacherFill />

    case "PiStudentBold":
      return <PiStudentBold />

    case "LuFileText":
      return <LuFileText />

    case "PiExamBold":
      return <PiExamBold />

    case "GrTableAdd":
      return <GrTableAdd />

    case "HiOutlineTableCells":
      return <HiOutlineTableCells />

    case "FaCloudDownloadAlt":
      return <FaCloudDownloadAlt />

    case "CiDollar":
      return <CiDollar />

    case "FaMoneyCheckAlt":
      return <FaMoneyCheckAlt />

    case "RiServiceLine":
      return <RiServiceLine />

    default:
      return <PiShapesFill />
  }
}
