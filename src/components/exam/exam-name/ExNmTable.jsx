export default function ExNmTable({handleEdit, handleDelete}) {

   const leaveRequests = [
      {
         name: "1st Term",
         session: "2024",
         start: "2024-07-06",
         end: "2024-07-08",
      },
      {
         name: "Final Term",
         session: "2024",
         start: "2024-07-06",
         end: "2024-07-19",
      },
      {
         name: "Mid Term",
         session: "2024",
         start: "2024-07-06",
         end: "2024-07-06",
      },
   ]

    return (
      <div className="border my-6 rounded shadow-md">
      <table className="w-full text-textGray text-sm leading-8">
      <thead className="border-b-2 bg-bgBlue">
        <tr>
          <th className="w-1/12">ID</th>
          <th className="w-2/12">Exam Name</th>
          <th className="w-2/12">Session</th>
          <th className="w-2/12">Start Date</th>
          <th className="w-2/12">End Date</th>
          <th className="w-3/12">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium">
        {leaveRequests.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="w-1/12">{index+1}</td>
            <td className="w-2/12">{item.name}</td>
            <td className="w-2/12">{item.session}</td>
            <td className="w-2/12">{item.start}</td>
            <td className="w-2/12">{item.end}</td>
            <td className="w-3/12 pb-1">
                <button
                  className="bg-blue px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={()=>handleDelete(item.type)}
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