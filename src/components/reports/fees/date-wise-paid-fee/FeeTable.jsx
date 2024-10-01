
export default function FeeTable() {
   const dummyData = [
      {
         date: "2024-01-01",
         totalStudents: "100",
         totalPaidFees: "10000",
         totalPartialFees: "5000",
         totalAmount: "15000",
      },
      {
         date: "2024-01-02",
         totalStudents: "100",
         totalPaidFees: "10000",
         totalPartialFees: "5000",
         totalAmount: "15000",
      },
   ]

  return (
   <div className="border my-6 rounded shadow-md overflow-x-scroll">
      <table className="w-full text-textGray text-center leading-6 sm:leading-8">
         <thead className="bg-bgBlue border-b-2 border-bgGray leading-10">
         <tr>
            <th className="w-1/12">#</th>
            <th className="w-3/12">Date</th>
            <th className="w-2/12 min-w-32">Total Students</th>
            <th className="w-2/12">Total Paid Fees</th>
            <th className="w-2/12 min-w-16">Total Partial Fees</th>
            <th className="w-2/12 min-w-20">Total Amount</th>
         </tr>
         </thead>
         <tbody className="divide-y font-medium">
         {dummyData.map((row, index) => (
            <tr key={index} className="text-center">
               <td className="w-1/12">{index + 1}</td>
               <td className="w-3/12">{row.date}</td>
               <td className="w-2/12">{row.totalStudents}</td>
               <td className="w-2/12">{row.totalPaidFees}</td>
               <td className="w-2/12">{row.totalPartialFees}</td>
               <td className="w-2/12">{row.totalAmount}</td>
            </tr>
         ))}
         </tbody>
    </table>
   </div>
  )
}
