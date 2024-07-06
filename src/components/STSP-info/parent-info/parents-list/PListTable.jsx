export default function PListTable({handleEdit, handleDelete}) {
   const parents = [
      {
         parentName : "Ayman Hasin Sikdar",
         parentMobile : "01234567890",
         gender: "Male",
         relation: "Father",
         motherName : "Mrs. Halima Khatun",
         motherMobile: "01234567890",
      },
      {
         parentName : "Salman Khan",
         parentMobile : "01234567890",
         gender: "Male",
         relation: "Father",
         motherName : "Salma Jahan",
         motherMobile: "01234567890",
      },
   ]
    return (
        <div className="overflow-x-scroll border mt-6 rounded shadow-md">
        <table className="w-full text-textGray text-sm">
        <thead className="border-b-2 bg-bgBlue leading-8">
          <tr>
            <th className="min-w-10 text-start pl-2">#</th>
            <th className="min-w-36 text-start">PARENT NAME</th>
            <th className="min-w-28 text-start">MOBILE</th>
            <th className="min-w-16 text-start">GENDER</th>
            <th className="min-w-20 text-start">RELATION</th>
            <th className="min-w-36 text-start">FATHER NAME</th>
            <th className="min-w-[115px] text-start">FATHER MOBILE</th>
            <th className="min-w-36 text-start">MOTHER NAME</th>
            <th className="min-w-[115px] text-start">MOTHER MOBILE</th>
            <th className="min-w-40 text-center">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 font-medium">
          {parents.map((item, index) => (
            <tr key={index} className="text-start leading-8">
            <td className="min-w-10 pl-2">{index+1}</td>
            <td className="min-w-36">{item.parentName}</td>
            <td className="min-w-28">{item.parentMobile}</td>
            <td className="min-w-16">{item.gender}</td>
            <td className="min-w-20">{item.relation}</td>
            <td className="min-w-36">{item.parentName}</td>
            <td className="min-w-[115px]">{item.parentMobile}</td>
            <td className="min-w-36">{item.motherName}</td>
            <td className="min-w-[115px]">{item.motherMobile}</td>
            <td className="min-w-40 pb-1 text-center">
               <button
                  className="bg-blue px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                  onClick={()=>handleDelete(item.parentName)}
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