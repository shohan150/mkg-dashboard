import MeritTable from "./MeritTable";

export default function MeritContent() {
    return (
      <div>
         <h3 className="text-2xl text-center mt-10">Final Term Exam</h3>
         <h3 className="text-xl text-center my-3 underline">Merit List</h3>
         <div className="text-lg flex items-center text-center my-4">
            <h3 className="w-1/2 md:w-1/4">Class: One</h3>
            <h3 className="w-1/2 md:w-1/4">Section: Jaba</h3>
            <h3 className="w-1/2 md:w-1/4">Shift: Morning</h3>
            <h3 className="w-1/2 md:w-1/4">Session: 2024</h3>
        </div>

        <MeritTable />
      </div>
    );
}