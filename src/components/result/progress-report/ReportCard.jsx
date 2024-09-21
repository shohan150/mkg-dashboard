import GradeChart from "./GradeChart";
import ObtainedMarks from "./ObtainedMarks";
import StudentInfo from "./StudentInfo";

export default function ReportCard({result}) {
    return (
      <div className="p-4 border border-primary rounded">
         <h3 className="text-center text-2xl font-medium">Urban High School and College</h3>
         <div className="flex items-center gap-3 my-4">
            <div className="flex-1 bg-bgGreen w-full h-5 block rounded"></div>
            <h3 className="text-center text-xl">Progress Report</h3>
         </div>

         <div className="flex items-start justify-between gap-2">
            <StudentInfo result={result} />
            <GradeChart />
         </div>

         <ObtainedMarks />
      </div>
    );
}