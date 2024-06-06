import { CgCommunity } from "react-icons/cg";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineEventAvailable } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";

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
  }
}
