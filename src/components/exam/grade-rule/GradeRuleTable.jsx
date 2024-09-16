export default function GradeRuleTable({handleEdit, handleDelete}) {

   const grades = [
      {
         name: "A+",
         gpa: "5.00",
         min: "80",
         max: "100",
      },
      {
         name: "A",
         gpa: "4.00",
         min: "70",
         max: "79",
      },
      {
         name: "A-",
         gpa: "3.50",
         min: "60",
         max: "69",
      },
   ]

    return (
        <div className="border my-6 rounded shadow-md">
          <table className="w-full text-textGray text-sm leading-6 sm:leading-8">
          <thead className="border-b-2 bg-bgBlue">
            <tr>
              <th className="w-1/12">ID</th>
              <th className="w-2/12">Grade</th>
              <th className="w-2/12">GPA</th>
              <th className="w-2/12">Minimum Mark</th>
              <th className="w-2/12">Maximum Mark</th>
              <th className="w-3/12">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 font-medium">
            {grades.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="w-1/12">{index+1}</td>
                <td className="w-2/12">{item.name}</td>
                <td className="w-2/12">{item.gpa}</td>
                <td className="w-2/12">{item.min}</td>
                <td className="w-2/12">{item.max}</td>
                <td className="w-3/12 pb-1">
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