export default function PackageTable({data, handleEdit, handleDelete}) {

  return (
    <div className="border my-6 rounded shadow-md">
      <table className="w-full text-textGray text-sm leading-6 sm:leading-8">
        <thead className="border-b-2 bg-bgBlue">
          <tr>
            <th className="w-2/12">Serial</th>
            <th className="w-4/12">Package Name</th>
            <th className="w-2/12">Amount</th>
            <th className="w-4/12">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 font-medium">
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="w-2/12">{index + 1}</td>
              <td className="w-4/12">{item.name}</td>
              <td className="w-2/12">{item.amount}</td>
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