import { FaFemale, FaMale } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";
export default function GenderWise() {
  return (
    <div className="space-y-4">
      {/* Gender Wise Student */}
      <div className="rounded-md text-sm bg-white">
        <SectionHeader title="Gender Wise Student" />
        <div className="flex items-center gap-4 p-4">
          <div className="p-4 shadow-[2px_4px_14px_0_#000000a0] rounded-md flex items-center w-1/2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-bgBlue">
              <FaMale className="text-blue w-8 h-8" />
            </div>
            <div className="border-l-2 border-red pl-3">
              <h4 className="text-textGray font-medium">Male Student</h4>
              <h4 className="text-xl font-bold text-textBlack">300</h4>
            </div>
          </div>

          <div className="p-4 shadow-[2px_4px_14px_0_#000000a0] rounded-md flex items-center w-1/2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-[#FF3E1D20]">
              <FaFemale className="text-red w-8 h-8" />
            </div>
            <div className="border-l-2 border-red pl-3">
              <h4 className="text-textGray font-medium">Female Student</h4>
              <h4 className="text-xl font-bold text-textBlack">150</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Gender Wise Teacher & Staff */}
      <div className="rounded-md text-sm bg-white">
        <SectionHeader title="Gender Wise Teacher" />
        <div className="flex items-center gap-4 p-4">
          <div className="p-4 shadow-[2px_4px_14px_0_#000000a0] rounded-md flex items-center w-1/2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-bgBlue">
              <FaMale className="text-blue w-8 h-8" />
            </div>
            <div className="border-l-2 border-red pl-3">
              <h4 className="text-textGray font-medium">Male Teacher</h4>
              <h4 className="text-xl font-bold text-textBlack">35</h4>
            </div>
          </div>

          <div className="p-4 shadow-[2px_4px_14px_0_#000000a0] rounded-md flex items-center w-1/2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-[#FF3E1D20]">
              <FaFemale className="text-red w-8 h-8" />
            </div>
            <div className="border-l-2 border-red pl-3">
              <h4 className="text-textGray font-medium">Female Teacher</h4>
              <h4 className="text-xl font-bold text-textBlack">15</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
