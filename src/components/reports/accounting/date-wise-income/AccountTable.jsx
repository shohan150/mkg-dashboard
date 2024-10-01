
export default function AccountTable() {
   const dummyData = [
      {
         name: "Md. Hasan Ali",
         amount: 10000,
         incomeHead: "Maintenance",
         date: "2024-01-01",
         description: "Income from sales",
         invoiceNo: "INV/2024/001",
      },
      {
         name: "Md. Hasan Ali",
         amount: 10000,
         incomeHead: "Bonus",
         date: "2024-01-01",
         description: "Income from sales",
         invoiceNo: "INV/2024/001",
      },
      {
         name: "Md. Hasan Ali",
         amount: 10000,
         incomeHead: "Salary",
         date: "2024-01-01",
         description: "Income from sales",
         invoiceNo: "INV/2024/001",
      }
   ]

  return (
   <div className="border my-6 rounded shadow-md overflow-x-scroll">
      <table className="w-full text-textGray text-center leading-6 sm:leading-8">
         <thead className="bg-bgBlue border-b-2 border-bgGray leading-10">
         <tr>
            <th className="w-1/12">#</th>
            <th className="w-2/12 min-w-32">Name</th>
            <th className="w-1/12 min-w-20">Amount</th>
            <th className="w-1/12 min-w-28">Income Head</th>
            <th className="w-2/12 min-w-24">Date</th>
            <th className="w-2/12 min-w-40">Description</th>
            <th className="w-1/12 min-w-24">Document</th>
            <th className="w-1/12 min-w-24">Created By</th>
            <th className="w-1/12 min-w-24">Updated By</th>
         </tr>
         </thead>
         <tbody className="divide-y font-medium">
         {dummyData.map((row, index) => (
            <tr key={index} className="text-center">
               <td className="w-1/12">{index + 1}</td>
               <td className="w-2/12">{row.name}</td>
               <td className="w-1/12">{row.amount}</td>
               <td className="w-1/12">{row.incomeHead}</td>
               <td className="w-2/12">{row.date}</td>
               <td className="w-2/12">{row.description}</td>
               <td className="w-1/12">{row.document}</td>
               <td className="w-1/12">Admin</td>
               <td className="w-1/12">Admin</td>
            </tr>
         ))}
         </tbody>
    </table>
   </div>
  )
}
