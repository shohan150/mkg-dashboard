import RoutineListTable from "./RoutineListTable";

export default function RoutineList() {
    return (
      <div className="bg-white rounded-md px-4 py-2 my-2 sm:my-4">
         <h3 className="text-2xl font-bold mt-4 mb-8">Routine List</h3>

         <RoutineListTable />
      </div>
    );
}