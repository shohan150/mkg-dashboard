export default function EventTable({handleEdit, handleDelete}) {

   const data = [
      {
         name: "Sports Day",
         start:"24th May, 9:00 AM",
         end: "24th May 4:00 PM",
      },
      {
         name: "Cultural Day",
         start:"04th June, 9:00 AM",
         end: "04th June 4:00 PM",
      },
   ]

    return (
      <div className="border my-6 rounded shadow-md">
      <table className="w-full text-textGray text-sm leading-6 sm:leading-8">
      <thead className="border-b-2 bg-bgBlue">
        <tr>
          <th className="w-1/12">Serial</th>
          <th className="w-4/12">Title</th>
          <th className="w-2/12">Start</th>
          <th className="w-2/12">End</th>
          <th className="w-3/12">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium">
        {data.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="w-1/12">{index+1}</td>
            <td className="w-4/12">{item.name}</td>
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
                  onClick={()=>handleDelete(`class ${item.class} ${item.subject} syllabus`)}
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