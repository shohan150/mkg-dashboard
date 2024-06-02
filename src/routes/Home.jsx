import AttendanceInfo from "../components/homePage/mainComponents/AttendanceInfo";
import ClassRoutine from "../components/homePage/mainComponents/ClassRoutine";
import Events from "../components/homePage/mainComponents/Events";
import FeeInfo from "../components/homePage/mainComponents/FeeInfo";
import GenderWise from "../components/homePage/mainComponents/GenderWise";
import LeaveAndSmsInfo from "../components/homePage/mainComponents/LeaveAndSmsInfo";
import Notices from "../components/homePage/mainComponents/Notices";
import Overview from "../components/homePage/mainComponents/Overview";
import PaymentStat from "../components/homePage/mainComponents/PaymentStat";
import ProfileInfo from "../components/homePage/mainComponents/ProfileInfo";
import SearchPayslip from "../components/homePage/mainComponents/SearchPayslip";

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

      {/* Fees Info and Payment Statistics */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <FeeInfo />
        <PaymentStat />
      </div>

      {/* Leave Info and SMS Info */}
      <LeaveAndSmsInfo />

      {/* payslip and routine */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <SearchPayslip />
        <ClassRoutine />
      </div>

      {/* Events and gender wise teacher and student info */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Events />
        <GenderWise />
      </div>
    </div>
  );
}
