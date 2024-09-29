export default function LTypeTable({handleEdit, handleDelete}) {

  const withdraws = [
    {
      note: "Note 1",
      withdrawnAmount: 1000,
      receivedBy: "John Doe",
      date: "2021-01-01",
    },
    {
      note: "Note 2",
      withdrawnAmount: 2000,
      receivedBy: "Jane Doe",
      date: "2021-01-02",
    },
    {
      note: "Note 3",
      withdrawnAmount: 3000,
      receivedBy: "John Smith",
      date: "2021-01-03",
    }
  ];
    return (
      <div className="border my-6 rounded shadow-md overflow-x-scroll">
      <table className="w-full text-textGray text-sm leading-8 ">
      <thead className="border-b-2 bg-bgBlue">
        <tr>
          <th className="w-1/12">#</th>
          <th className="w-1/12 px-1">Amount</th>
          <th className="w-2/12  min-w-32">Received By</th>
          <th className="w-1/12 min-w-20">Date</th>
          <th className="w-3/12 min-w-32">Note</th>
          <th className="w-1/12 min-w-20">Created By</th>
          <th className="w-1/12 min-w-20">Updated By</th>
          <th className="w-2/12 min-w-36">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium">
        {withdraws.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="w-1/12">{index + 1}</td>
            <td className="w-1/12">{item.withdrawnAmount}</td>
            <td className="w-2/12">{item.receivedBy}</td>
            <td className="w-1/12">{item.date}</td>
            <td className="w-3/12">{item.note}</td>
            <td className="w-1/12">Admin</td>
            <td className="w-1/12">Admin</td>
            <td className="w-2/12 pb-1">
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