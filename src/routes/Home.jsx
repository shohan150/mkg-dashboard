import AttendanceInfo from "../components/homePage/mainComponents/AttendanceInfo";
import FeeInfo from "../components/homePage/mainComponents/FeeInfo";
import Notices from "../components/homePage/mainComponents/Notices";
import Overview from "../components/homePage/mainComponents/Overview";
import PaymentStat from "../components/homePage/mainComponents/PaymentStat";
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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <FeeInfo />
        <PaymentStat />
      </div>
    </div>
  );
}
