import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import ProfileMenu from "./ProfileMenu";
import profileImage from "/images/profile.jpg";
export default function Profile() {
  const[isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-1 pl-2 sm:pl-3 relative">
      <img
        src={profileImage}
        className="w-8 sm:w-9 h-8 sm:h-9 rounded-full"
        onClick={()=> setIsOpen(!isOpen)}
      />
      <GoTriangleDown className="text-white w-4 sm:w-5 h-4 sm:h-5" onClick={()=> setIsOpen(!isOpen)}/>

      {isOpen && <ProfileMenu />}

    </div>
  );
}
