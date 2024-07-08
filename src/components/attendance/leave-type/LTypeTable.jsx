export default function LTypeTable({handleEdit, handleDelete}) {

   const leaveTypes= ["Sick Leave", "Emergency Leave", "Special Leave"];
   
    return (
      <div className="border my-6 rounded shadow-md">
      <table className="w-full text-textGray text-sm leading-8 ">
      <thead className="border-b-2 bg-bgBlue">
        <tr>
          <th className="w-1/12">#</th>
          <th className="w-7/12">LEAVE TYPE NAME</th>
          <th className="w-4/12">ACTIONS</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium">
        {leaveTypes.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="w-1/12">{index}</td>
            <td className="w-7/12">{item}</td>
            <td className="w-4/12 pb-1">
                <button
                  className="bg-blue px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={()=>handleDelete(item)}
                >
                  Delete
                </button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    );
}