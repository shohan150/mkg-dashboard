
export default function FeeTable() {
   const dummyData = [
      {
         date: "2024-01-01",
         name: "John Doe",
         roll: "1",
         class: "10",
         totalPaid: "1000",
         status: "Paid",
      },
      {
         date: "2024-01-02",
         name: "Jane Doe",
         roll: "2",
         class: "10",
         totalPaid: "1000",
         status: "Partial",
      },
      {
         date: "2024-01-03",
         name: "John Smith",
         roll: "3",
         class: "10",
         totalPaid: "1000",
         status: "Due",
      },
   ]

  return (
   <div className="border my-6 rounded shadow-md overflow-x-scroll">
      <table className="w-full text-textGray text-center leading-6 sm:leading-8">
         <thead className="bg-bgBlue border-b-2 border-bgGray leading-10">
         <tr>
            <th className="w-1/12">#</th>
            <th className="w-2/12">Date</th>
            <th className="w-3/12 min-w-32">Name</th>
            <th className="w-1/12">Roll</th>
            <th className="w-1/12">Class</th>
            <th className="w-2/12 min-w-20">Total Paid</th>
            <th className="w-2/12 min-w-20">Status</th>
         </tr>
         </thead>
         <tbody className="divide-y font-medium">
         {dummyData.map((row, index) => (
            <tr key={index} className="text-center">
               <td className="w-1/12">{index + 1}</td>
               <td className="w-2/12">{row.date}</td>
               <td className="w-3/12">{row.name}</td>
               <td className="w-1/12">{row.roll}</td>
               <td className="w-1/12">{row.class}</td>
               <td className="w-2/12">{row.totalPaid}</td>
               <td className="w-2/12">{row.status}</td>
            </tr>
         ))}
         </tbody>
    </table>
   </div>
  )
}
