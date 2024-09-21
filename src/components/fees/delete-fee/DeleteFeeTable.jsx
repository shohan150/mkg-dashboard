export default function DeleteFeeTable({  handleDelete }) {
    const data = [
      {
        fee_name: "September Month Fee",
        amount: 500,
        discount: 100,
        status: "paid",
      },
      {
        fee_name: "September Month Fee",
        amount: 500,
        discount: 100,
        status: "unpaid",
      },
    ];
  
    return (
      <div className="border my-6 rounded shadow-md">
        <table className="w-full text-textGray text-sm leading-6 sm:leading-8">
          <thead className="border-b-2 bg-bgBlue">
            <tr>
              <th className="w-1/12">Serial</th>
              <th className="w-2/12">Fee Name</th>
              <th className="w-2/12">Amount</th>
              <th className="w-2/12">Discount</th>
              <th className="w-2/12">Final Amount</th>
              <th className="w-1/12">Status</th>
              <th className="w-2/12">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 font-medium">
            {data.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="w-1/12">{index + 1}</td>
                <td className="w-2/12">{item.fee_name}</td>
                <td className="w-2/12">{item.amount}</td>
                <td className="w-2/12">{item.discount}</td>
                <td className="w-2/12">{item.amount - item.discount}</td>
                <td className="w-1/12">{item.status}</td>
                <td className="w-2/12 pb-1">
                  
                  <button
                    className="bg-red px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                    onClick={() => handleDelete(item.fee_name)}
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
  