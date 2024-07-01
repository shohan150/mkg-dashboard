import SectionHeader from "../../common/SectionHeader";

export default function AcademicSetupTable({ title, content, handleEdit, handleDelete }) {

  return (
    <SectionHeader title={`${title} List`} headerStyle="text-center">
      {/* section content */}
      <table className="w-full text-textGray text-lg leading-10 mt-2">
        <thead className="border-b-2">
          <tr>
            <th className="w-2/12">ID</th>
            <th className="w-6/12">{title} Name</th>
            <th className="w-4/12">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y-2">
          {content.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="w-2/12">{row.id}</td>
              <td className="w-6/12">{row.info}</td>
              <td className="w-4/12 pb-1">
                <button
                  className="bg-blue px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={() => handleEdit(row, title)}
                >
                  Edit
                </button>
                <button
                  className="bg-red px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={()=>handleDelete(title)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionHeader>
  );
}
