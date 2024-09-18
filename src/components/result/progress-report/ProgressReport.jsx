import ProRepForm from "./ProRepForm";
import ReportCard from "./ReportCard";

export default function ProgressReport() {
    return (
      <div className="bg-white rounded-md px-4 py-2 my-2 sm:my-4">
         <ProRepForm />

         <ReportCard />
      </div>
    );
}