import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { RiUserSettingsFill } from "react-icons/ri";

export default function Overview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Total Students */}
      <div className="bg-white p-4 rounded-md flex items-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-green">
          <FaGoogleScholar className="w-8 h-8 text-white" />
        </div>
        <div className="border-l-2 border-red pl-3">
          <h4 className="text-textGray font-medium">Total Students</h4>
          <h4 className="text-xl font-bold">530</h4>
        </div>
      </div>

      {/* Total Teachers */}
      <div className="bg-white p-4 rounded-md flex items-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-blue">
          <FaUserTie className="w-8 h-8 text-white" />
        </div>
        <div className="border-l-2 border-red pl-3">
          <h4 className="text-textGray font-medium">Total Teachers</h4>
          <h4 className="text-xl font-bold">30</h4>
        </div>
      </div>

      {/* Total Stuffs */}
      <div className="bg-white p-4 rounded-md flex items-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-yellow">
          <RiUserSettingsFill className="w-8 h-8 text-white" />
        </div>
        <div className="border-l-2 border-red pl-3">
          <h4 className="text-textGray font-medium">Total Stuffs</h4>
          <h4 className="text-xl font-bold">10</h4>
        </div>
      </div>

      {/* Total Parents */}
      <div className="bg-white p-4 rounded-md flex items-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-red">
          <BsFillPeopleFill className="w-8 h-8 text-white" />
        </div>
        <div className="border-l-2 border-red pl-3">
          <h4 className="text-textGray font-medium">Total Parents</h4>
          <h4 className="text-xl font-bold">500</h4>
        </div>
      </div>
    </div>
  );
}
