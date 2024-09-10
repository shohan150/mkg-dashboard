import { Link } from "react-router-dom";
import academicSetupList from "../../../data/academicSetupList";
export default function MarkConfTable() {
    return (
      <table className="w-full text-textGray leading-10 mb-4">
         <thead className="bg-bgBlue">
            <tr>
            <th className="w-2/12">ID</th>
            <th className="w-6/12">Class</th>
            <th className="w-4/12">Action</th>
            </tr>
         </thead>
         <tbody>
         {academicSetupList[0].content.map(row => (
          <tr key={row.id} className="text-center border-b-2 even:bg-slate-200">
            <td className="w-2/12">{row.id}</td>
            <td className="w-6/12">{row.info}</td>
            <td className="w-4/12 min-w-40">
              <Link to={`../class-mark-config/${row.id}`}>
              <button
                className="bg-primary px-2 sm:px-3 py-1 sm:py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm my-1 sm:my-[6px]"
              >
                Add Class Mark Config
              </button>
              </Link>
            </td>
          </tr>
        ))}
         </tbody>
      </table>
    );
}