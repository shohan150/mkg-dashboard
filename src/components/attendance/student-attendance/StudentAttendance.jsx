import { useState } from "react";
import TodayDate from "../../common/TodayDate";
import StudentAttendForm from "./StudentAttendForm";
import StudentAttendTable from "./StudentAttendTable";

export default function StudentAttendance() {
   const [chosenClass, setChosenClass] = useState("");
    return (
      <div className="bg-white rounded-md p-4 md:p-6  my-4">
         <TodayDate />

         <StudentAttendForm setChosenClass={setChosenClass} />
         
         {
            chosenClass && <StudentAttendTable />
         }
      </div>
    );
}