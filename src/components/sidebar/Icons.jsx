import { CgCommunity } from "react-icons/cg";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { LiaSmsSolid } from "react-icons/lia";
import { LuFileText } from "react-icons/lu";
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiChalkboardTeacherFill, PiExamBold, PiShapesFill, PiStudentBold } from "react-icons/pi";
import { RiDashboardHorizontalFill, RiParentFill } from "react-icons/ri";


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

    default:
      return <PiShapesFill />
  }
}
