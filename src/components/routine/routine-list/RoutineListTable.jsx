import { Link } from "react-router-dom";

export default function RoutineListTable() {
   const routineList = [
      {
         class: "One",
         shift: "Morning",
         section: "Jaba"
      },
      {
         class: "One",
         shift: "Morning",
         section: "Jaba"
      },
      {
         class: "One",
         shift: "Morning",
         section: "Jaba"
      },
      {
         class: "One",
         shift: "Morning",
         section: "Jaba"
      },
   ]
   
    return (
      <table className="w-full text-textGray leading-10 mb-4">
         <thead className="bg-bgBlue">
            <tr>
            <th className="w-1/12">ID</th>
            <th className="w-2/12">Class</th>
            <th className="w-2/12">Shift</th>
            <th className="w-3/12">Section</th>
            <th className="w-4/12">Action</th>
            </tr>
         </thead>
         <tbody>
         {routineList.map((row, index) => (
         <tr key={row.id} className="text-center border-b-2 even:bg-slate-200">
            <td className="w-1/12">{index}</td>
            <td className="w-2/12">{row.class}</td>
            <td className="w-2/12">{row.shift}</td>
            <td className="w-3/12">{row.section}</td>
            <td className="w-4/12 min-w-40">
            <Link to={`../create-routine`}>
               <button
                  className="bg-primary px-2 sm:px-3 py-1 sm:py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm my-1 sm:my-[6px]"
               >
                  Add Routine
               </button>
            </Link>
            </td>
         </tr>
      ))}
         </tbody>
      </table>
    );
}