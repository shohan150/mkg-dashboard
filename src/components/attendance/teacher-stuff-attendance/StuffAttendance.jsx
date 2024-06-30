import TodayDate from "../../common/TodayDate";
import TeacherAttendTable from "./TeacherAttendTable";

export default function StuffAttendance() {
    return (
      <div className="bg-white rounded-md p-4 md:p-6  my-4">
         <div className="flex justify-between items-end">

            <h3 className="font-medium text-xl text-primary">Stuff Attendance</h3>
         
            <TodayDate />

         </div>

         <TeacherAttendTable />
         
      </div>
    );
}