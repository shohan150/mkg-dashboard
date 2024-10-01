export default function TypeTable({handleEdit, handleDelete}) {
   const dummyDate= [
    {
      pageName: "Home",
      heading: "Welcome to our website",
      subHeading: "Welcome to our website",
      content: "Welcome to our website",
    },
    {
      pageName: "About",
      heading: "Welcome to our website",
      subHeading: "Welcome to our website",
      content: "Welcome to our website",
    }
   ];
   
    return (
      <div className="border my-6 rounded shadow-md overflow-x-scroll">
      <table className="w-full text-textGray text-sm">
      <thead className="border-b-2 bg-bgBlue leading-10">
        <tr>
          <th className="w-1/12">#</th>
          <th className="w-1/12 min-w-20">Page Name</th>
          <th className="w-2/12 min-w-40">Heading</th>
          <th className="w-2/12 min-w-40">Sub-Heading</th>
          <th className="w-1/12 min-w-40">Image</th>
          <th className="w-3/12 min-w-40">Content</th>
          <th className="w-1/12">Status</th>
          <th className="w-1/12 min-w-40">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium leading-5">
        {dummyDate.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="w-1/12">{index + 1}</td>
            <td className="w-1/12">{item.pageName}</td>
            <td className="w-2/12">{item.heading}</td> 
            <td className="w-2/12">{item.subHeading}</td>
            <td className="w-1/12">{item.imageName}</td>
            <td className="w-3/12">{item.content}</td>
            <td className="w-1/12">Active</td>
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