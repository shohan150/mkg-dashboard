export default function HolidayTable({handleEdit, handleDelete}) {

   const holidays = [
      {
         name: "Independence Day",
         date: "2024-03-26",
         session : "2024"
      },
      {
         name: "Eid-ul-Fitr",
         date: "2024-04-10",
         session : "2024"
      },
      {
         name: "Eid-ul-Adha",
         date: "2024-06-16",
         session : "2024"
      },
      {
         name: "Victory Day",
         date: "2024-12-16",
         session : "2024"
      },
   ]

    return (
      <div className="border my-6 rounded shadow-md">
      <table className="w-full text-textGray text-sm leading-8">
      <thead className="border-b-2 bg-bgBlue">
        <tr>
          <th className="w-1/12">#</th>
          <th className="w-4/12">HOLIDAY NAME</th>
          <th className="w-3/12">DATE</th>
          <th className="w-4/12">ACTIONS</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium">
        {holidays.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="w-1/12">{index+1}</td>
            <td className="w-4/12">{item.name}</td>
            <td className="w-3/12 ">{item.date}</td>
            <td className="w-4/12 pb-1">
                <button
                  className="bg-blue px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={()=>handleDelete(item.name)}
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