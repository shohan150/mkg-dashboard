export default function TypeTable({handleEdit, handleDelete}) {
   const dummyDate= [
    {
      title: "Video 1",
      subTitle: "Video 1 Subtitle",
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Video 2",
      subTitle: "Video 2 Subtitle",
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Video 3",
      subTitle: "Video 3 Subtitle",
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Video 4",
      subTitle: "Video 4 Subtitle",
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    }
   ];
   
    return (
      <div className="border my-6 rounded shadow-md overflow-x-scroll">
      <table className="w-full text-textGray text-sm">
      <thead className="border-b-2 bg-bgBlue leading-10">
        <tr>
          <th className="w-1/12">#</th>
          <th className="w-2/12 min-w-40">Video Title</th>
          <th className="w-2/12 min-w-40">Sub-Title</th>
          <th className="w-1/12 min-w-20">Image</th>
          <th className="w-2/12 min-w-40">Youtube Link</th>
          <th className="w-1/12">Status</th>
          <th className="w-3/12 min-w-40">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium leading-5">
        {dummyDate.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="w-1/12">{index + 1}</td>
            <td className="w-2/12">{item.title}</td> 
            <td className="w-2/12">{item.subTitle}</td> 
            <td className="w-1/12"></td>
            <td className="w-2/12">{item.youtubeLink}</td>
            <td className="w-1/12">Active</td>
            <td className="w-3/12">
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