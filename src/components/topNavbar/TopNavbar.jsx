import { FaBars } from "react-icons/fa6";
import Mail from "./Mail";
import Notifications from "./Notifications";
import Profile from "./Profile";
import SchoolName from "./SchoolName";

export default function TopNavbar({ setShowSidebar }) {
  return (
    <div className="flex items-center justify-between bg-primary rounded-md p-3 sm:p-4">
      {/* school name */}
      <div className="flex gap-3 sm:gap-4 items-center ">
        <FaBars
          className="text-white border border-white rounded w-6 sm:w-8 h-6 sm:h-8 p-1 xl:hidden"
          onClick={() => setShowSidebar((state) => !state)}
        />
        <SchoolName />
      </div>
      {/* actions */}
      <div className="flex items-center">
        <Mail />
        <Notifications />
        <Profile />
      </div>
    </div>
  );
}
