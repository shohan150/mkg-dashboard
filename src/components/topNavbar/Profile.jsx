import { GoTriangleDown } from "react-icons/go";
import profileImage from "/images/profile.jpg";
export default function Profile() {
  return (
    <div className="flex items-center gap-1 pl-3">
      <img src={profileImage} className="w-10 h-10 rounded-full" />
      <GoTriangleDown className="text-white w-5 h-5" />
    </div>
  );
}
