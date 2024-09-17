import { studentsData } from "../../../data/studentList";

export default function MeritTable() {
    return (
   <div className="border border-black my-6 rounded shadow-md">
      <table className="w-full text-textGray leading-6 sm:leading-8 rounded-md">
      <thead className="text-lg leading-9 border-b-2 border-bgGray bg-bgGreen">
        <tr className="divide-x-2 divide-bgGray">
          <th className="w-1/12">Merit</th>
          <th className="w-3/12">Name</th>
          <th className="w-2/12">Roll</th>
          <th className="w-2/12">Total Marks</th>
          <th className="w-2/12">GPA</th>
          <th className="w-2/12">Grade</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-bgGRay font-medium">
        {studentsData.map((item, index) => (
          <tr key={index} className="text-center divide-x-2 divide-bgGray">
            <td className="w-1/12">{index+1}</td>
            <td className="w-3/12">{item.name}</td>
            <td className="w-2/12">{item.id}</td>
            <td className="w-2/12">800</td>
            <td className="w-2/12">5.00</td>
            <td className="w-2/12">A</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    );
}