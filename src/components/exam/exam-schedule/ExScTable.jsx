import { Link } from "react-router-dom";

export default function ExScTable() {
   const data = [
      {
         class : "One",
         shift : "Morning",
         section: "jaba"
      },
      {
         class : "One",
         shift : "Day",
         section: "jaba"
      },
      {
         class : "Two",
         shift : "Morning",
         section: "jaba"
      },
   ]
    return (
      <table className="w-full text-textGray leading-10 mb-4">
         <thead className="bg-bgBlue">
            <tr>
            <th className="w-2/12">ID</th>
            <th className="w-2/12">Class</th>
            <th className="w-2/12">Section</th>
            <th className="w-2/12">Shift</th>
            <th className="w-4/12">Action</th>
            </tr>
         </thead>
         <tbody>
         {data.map((row, index) => (
         <tr key={row.id} className="text-center border-b-2 even:bg-slate-200">
            <td className="w-2/12">{index+1}</td>
            <td className="w-2/12">{row.class}</td>
            <td className="w-2/12">{row.section}</td>
            <td className="w-2/12">{row.shift}</td>
            <td className="w-4/12 min-w-40">
            <Link to={`../add-exam-routine/${index}`}>
            <button
               className="bg-primary px-2 sm:px-3 py-1 sm:py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm my-1 sm:my-[6px]"
            >
               Add Exam Routine
            </button>
            </Link>
            </td>
         </tr>
      ))}
         </tbody>
      </table>
    );
}