import { FaUserEdit } from "react-icons/fa";
import profileImg from "/images/profile.jpg";

export default function ProfileInfo() {
  const profile = [
    {
      title: "Reg No",
      data: "1234667",
    },
    {
      title: "User Type",
      data: "Admin",
    },
    {
      title: "Designation",
      data: "Principal",
    },
    {
      title: "Mobile No",
      data: "01234567891",
    },
  ];

  return (
    <div className="bg-white col-span-1 order-1 rounded-md px-4 py-6 space-y-2 relative">
      {/* user image */}
      <div className="flex justify-center">
        <img
          src={profileImg}
          alt=""
          className="w-20 h-20 rounded-full border border-primary"
        />
      </div>

      {/* user name */}
      <h4 className="bg-primary text-white text-center rounded p-1">
        Abdur Kadir Khan
      </h4>

      {/* user data table */}
      <table className="rounded bg-bgBlue w-full font-medium text-sm">
        {profile.map((row, index) => (
          <tr key={index}>
            <td className="text-end px-2 py-[3px] border border-white text-primary ">
              {row.title}
            </td>
            <td className="text-start px-2 py-[3px] border border-white text-textGray">
              {row.data}
            </td>
          </tr>
        ))}
      </table>

      {/* edit icon */}
      <FaUserEdit className="w-8 h-8 p-1 text-[#c4c4c4] absolute top-1 right-3" />
    </div>
  );
}