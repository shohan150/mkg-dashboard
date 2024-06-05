import SectionHeader from "../common/SectionHeader";
import generalSMS from "/icons/general-sms.png";
import leaveStudent from "/icons/leave-student.png";
import leaveTeacher from "/icons/leave-teachers.png";
import maskingSMS from "/icons/masking-sms.png";

export default function LeaveAndSmsInfo() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {/* Leave Information */}
      <div className="rounded-md text-sm bg-white">
        <SectionHeader title="Leave Information" />
        <div className="sm:flex items-center gap-3 p-3 space-y-4 sm:space-y-0">
          {/* leave student */}
          <div className="p-3 shadow-[2px_4px_14px_0_#000000a0] rounded-md flex items-center sm:w-1/2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-bgBlue">
              <img src={leaveStudent} alt="" className="w-8 h-8" />
            </div>
            <div className="border-l-2 border-red pl-3">
              <h4 className="text-textGray text-[16px] font-medium">
                Leave Students
              </h4>
              <h4 className="text-xl font-bold text-red">5</h4>
              <h4 className="text-xs font-medium text-green">
                Total Students: 530
              </h4>
            </div>
          </div>

          {/* leave teacher */}
          <div className="p-3 shadow-[2px_4px_14px_0_#000000a0] rounded-md flex items-center sm:w-1/2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-bgBlue">
              <img src={leaveTeacher} alt="" className="w-8 h-8" />
            </div>
            <div className="border-l-2 border-red pl-3">
              <h4 className="text-textGray text-[16px] font-medium">
                Leave Teachers
              </h4>
              <h4 className="text-xl font-bold text-red">1</h4>
              <h4 className="text-xs font-medium text-green">
                Total Teachers: 30
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* SMS Information */}
      <div className="rounded-md text-sm bg-white">
        <SectionHeader title="SMS Information" />
        <div className="sm:flex items-center gap-3 p-3 space-y-4 sm:space-y-0">
          {/* General SMS */}
          <div className="p-3 shadow-[2px_4px_14px_0_#000000a0] rounded-md flex items-center sm:w-1/2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-bgBlue">
              <img src={generalSMS} alt="" className="w-8 h-8" />
            </div>
            <div className="border-l-2 border-red pl-3">
              <h4 className="text-textGray text-[16px]  font-medium">
                General SMS
              </h4>
              <h4 className="text-xl font-bold text-textBlack">4339</h4>
              <h4 className="text-[12px] font-medium text-red">
                Expiry Date: 12.04.2025
              </h4>
            </div>
          </div>

          {/* Masking SMS */}
          <div className="p-3 shadow-[2px_4px_14px_0_#000000a0] rounded-md flex items-center sm:w-1/2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-bgBlue">
              <img src={maskingSMS} alt="" className="w-8 h-8" />
            </div>
            <div className="border-l-2 border-red pl-3">
              <h4 className="text-textGray text-[16px] font-medium">
                Masking SMS
              </h4>
              <h4 className="text-xl font-bold  text-textBlack">17339</h4>
              <h4 className="text-xs font-medium text-red">
                Expiry Date: 12.04.2025
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
