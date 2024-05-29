import { FaSchool } from "react-icons/fa";
export default function SchoolName() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-white w-9 h-9 p-[6px] rounded-full flex items-center justify-center">
        <FaSchool className="w-7 h-7" />
      </div>
      <h3 className="text-white text-lg">
        MKG International School and College
      </h3>
    </div>
  );
}
