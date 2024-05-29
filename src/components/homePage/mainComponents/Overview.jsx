import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { RiUserSettingsFill } from "react-icons/ri";
import SingleOverview from "../cards/SingleOverview";

export default function Overview() {
  const overview = [
    {
      id: "1",
      title: "Total Students",
      number: "530",
      icon: <FaGoogleScholar className="w-8 h-8 text-white" />,
      iconBg: "green",
    },
    {
      id: "2",
      title: "Total Teachers",
      number: "60",
      icon: <FaUserTie className="w-8 h-8 text-white" />,
      iconBg: "blue",
    },
    {
      id: "3",
      title: "Total Stuffs",
      number: "10",
      icon: <RiUserSettingsFill className="w-8 h-8 text-white" />,
      iconBg: "yellow",
    },
    {
      id: "4",
      title: "Total Parents",
      number: "500",
      icon: <BsFillPeopleFill className="w-8 h-8 text-white" />,
      iconBg: "red",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {overview.map((single) => (
        <SingleOverview key={single.id} data={single} />
      ))}
    </div>
  );
}
