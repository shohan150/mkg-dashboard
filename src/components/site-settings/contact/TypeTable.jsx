export default function TypeTable({handleEdit, handleDelete}) {
   const dummyDate= [
    {
      text: "lorem ipsum dolor",
      officeAddress: "lorem ipsum dolor",
      mobile: "9876543210",
      email: "lorem@ipsum.org",
    },
    {
      text: "lorem ipsum dolor",
      officeAddress: "lorem ipsum dolor",
      mobile: "9876543210",
      email: "lorem@ipsum.org",
    }
   ];
   
    return (
      <div className="border my-6 rounded shadow-md overflow-x-scroll">
      <table className="w-full text-textGray text-sm">
      <thead className="border-b-2 bg-bgBlue leading-10">
        <tr>
          <th className="w-1/12 min-w-8">#</th>
          <th className="w-1/12 min-w-40">Text</th>
          <th className="w-2/12 min-w-40">Office Address</th>
          <th className="w-1/12 min-w-40">Mobile</th>
          <th className="w-2/12 min-w-40">Email</th>
          <th className="w-2/12 min-w-40">Google Map</th>
          <th className="w-1/12">Status</th>
          <th className="w-2/12 min-w-40">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium leading-5">
        {dummyDate.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="w-1/12">{index + 1}</td>
            <td className="w-1/12">{item.text}</td>
            <td className="w-2/12">{item.officeAddress}</td> 
            <td className="w-1/12">{item.mobile}</td>
            <td className="w-2/12">{item.email}</td>
            <td className="w-2/12"></td>
            <td className="w-1/12">Active</td>
            <td className="w-2/12">
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