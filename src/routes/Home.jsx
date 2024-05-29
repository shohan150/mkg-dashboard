import AttendanceInfo from "../components/homePage/mainComponents/AttendanceInfo";
import Notices from "../components/homePage/mainComponents/Notices";
import Overview from "../components/homePage/mainComponents/Overview";
import ProfileInfo from "../components/homePage/mainComponents/ProfileInfo";

export default function Home() {
  return (
    <div className="space-y-5 mt-4">
      <Overview />
      {/* profile info, attendace info, notices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProfileInfo />
        <AttendanceInfo />
        <Notices />
      </div>
    </div>
  );
}
