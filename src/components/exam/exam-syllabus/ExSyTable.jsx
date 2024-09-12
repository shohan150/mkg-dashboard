export default function ExSyTable({handleEdit, handleDelete}) {

   const leaveRequests = [
      {
         name: "1st Term",
         session: "2024",
         class: "One",
         subject: "Math",
      },
      {
         name: "Final Term",
         session: "2024",
         class: "One",
         subject: "Math",
      },
      {
         name: "1st Term",
         session: "2024",
         class: "One",
         subject: "English",
      },
      {
         name: "1st Term",
         session: "2024",
         class: "One",
         subject: "Bangla",
      },
   ]

    return (
      <div className="border my-6 rounded shadow-md">
      <table className="w-full text-textGray text-sm leading-6 sm:leading-8">
      <thead className="border-b-2 bg-bgBlue">
        <tr>
          <th className="w-1/12">ID</th>
          <th className="w-2/12">Exam Name</th>
          <th className="w-1/12">Class</th>
          <th className="w-2/12">Subject</th>
          <th className="w-1/12">Session</th>
          <th className="w-2/12">Syllabus</th>
          <th className="w-3/12">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium">
        {leaveRequests.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="w-1/12">{index+1}</td>
            <td className="w-2/12">{item.name}</td>
            <td className="w-1/12">{item.class}</td>
            <td className="w-2/12">{item.subject}</td>
            <td className="w-1/12">{item.session}</td>
            <td className="w-2/12 text-red">Download</td>
            <td className="w-3/12 pb-1">
                <button
                  className="bg-blue px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={()=>handleDelete(`class ${item.class} ${item.subject} syllabus`)}
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