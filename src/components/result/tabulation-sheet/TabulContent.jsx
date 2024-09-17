import TabulTable from "./TabulTable";

export default function TabulContent() {
    return (
      <div>
         <h3 className="text-2xl text-center mt-8">Final Term Exam</h3>
         <div className="flex items-center text-center my-4">
            <h3 className="w-1/2 md:w-1/4">Class: One</h3>
            <h3 className="w-1/2 md:w-1/4">Section: Jaba</h3>
            <h3 className="w-1/2 md:w-1/4">Shift: Morning</h3>
            <h3 className="w-1/2 md:w-1/4">Session: 2024</h3>
        </div>

        <TabulTable />
      </div>
    );
}