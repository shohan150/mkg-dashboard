import TodayDate from "../../common/TodayDate";
import TeacherAttendTable from "./TeacherAttendTable";

export default function TeacherAttendance() {
    return (
      <div className="bg-white rounded-md p-4 md:p-6  my-4">
         <div className="flex justify-between items-end">

            <h3 className="font-medium text-xl text-primary">Teacher Attendance</h3>
         
            <TodayDate />

         </div>

         <TeacherAttendTable />
         
      </div>
    );
}