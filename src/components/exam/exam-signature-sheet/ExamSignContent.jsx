import ExamSignTable from "./ExamSignTable";

export default function ExamSignContent() {
    return (
      <div className="text-center mt-6">
         <h3 className="text-2xl text-center">Urban High School & College</h3>
         <h4 className="underline text-lg">Exam Signature Sheet</h4>
         <h4>Final Term Exam</h4>
         <div className="flex justify-center gap-4">
            <h3>Class: One</h3>
            <h3>Section: Jaba</h3>
         </div>

         <ExamSignTable />
      </div>
    );
}