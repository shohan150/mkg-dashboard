export default function TypeTable({handleEdit, handleDelete}) {
   const dummyDate= [
    {
      date: "2024-01-01",
      title: "lorem ipsum dolor",
      description: "lorem ipsum dolor",
      expireDate: "2024-01-01",
    },
    {
      date: "2024-01-01",
      title: "lorem ipsum dolor",
      description: "lorem ipsum dolor",
      expireDate: "2024-01-01",
    },
    {
      date: "2024-01-01",
      title: "lorem ipsum dolor",
      description: "lorem ipsum dolor",
      expireDate: "2024-01-01",
    }
   ];
   
    return (
      <div className="border my-6 rounded shadow-md overflow-x-scroll">
      <table className="w-full text-textGray text-sm">
      <thead className="border-b-2 bg-bgBlue leading-10">
        <tr>
          <th className="w-1/12 min-w-8">#</th>
          <th className="w-1/12 min-w-20">Date</th>
          <th className="w-3/12 min-w-40">Notice Title</th>
          <th className="w-3/12 min-w-40">Notice Description</th>
          <th className="w-1/12 min-w-20">Expire Date</th>
          <th className="w-1/12 min-w-24">File Attached</th>
          <th className="w-2/12 min-w-40">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium leading-5">
        {dummyDate.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="w-1/12">{index + 1}</td>
            <td className="w-1/12">{item.date}</td>
            <td className="w-3/12">{item.title}</td> 
            <td className="w-3/12">{item.description}</td>
            <td className="w-1/12">{item.expireDate}</td>
            <td className="w-1/12"></td>
            <td className="w-1/12">
                <button
                  className="bg-blue px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={()=>handleDelete(item.mainHeading)}
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