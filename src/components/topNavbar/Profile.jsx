import { GoTriangleDown } from "react-icons/go";
import profileImage from "/images/profile.jpg";
export default function Profile() {
  return (
    <div className="flex items-center gap-1 pl-2 sm:pl-3">
      <img
        src={profileImage}
        className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
      />
      <GoTriangleDown className="text-white w-4 sm:w-5 h-4 sm:h-5" />
    </div>
  );
}
