export default function AcademicSetupTable({ title, content, handleEdit }) {
  function handleDelete() {
    confirm("Do you want to delete?");
  }
  return (
    <div className="bg-white col-span-1 order-3 sm:order-2 lg:order-3 rounded-md relative pb-2">
      {/* section heading */}
      <h3 className="bg-primary text-white text-xl text-center p-4 leading-[33px] rounded-t-md shadow-md">
        {title} List
      </h3>

      {/* section content */}
      <table className="w-full text-textGray text-lg leading-10 mt-2">
        <thead className="border-b-2">
          <th className="w-2/12">ID</th>
          <th className="w-7/12">{title} Name</th>
          <th className="w-3/12">Actions</th>
        </thead>
        <tbody className="divide-y-2">
          {content.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="w-1/12">{row.id}</td>
              <td className="w-8/12">{row.info}</td>
              <td className="w-3/12">
                <button
                  className="bg-blue px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={() => handleEdit(row, title)}
                >
                  Edit
                </button>
                <button
                  className="bg-red px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={handleDelete}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
