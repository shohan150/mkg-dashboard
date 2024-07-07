import { Link } from "react-router-dom";

export const staffs = [
   {
      id:"001",
      name : "Md. Hafijur Rahman",
      role: "Accountant",
      designation: "Accountant",
      jobType : "permanent",
      mobile : "01234567890",
      gender: "Male",
   },
   {
      id:"003",
      name : "Md. Hafijur Rahman",
      role: "Accountant",
      designation: "Accountant",
      jobType : "permanent",
      mobile : "01234567890",
      gender: "Male",
   },
   {
      id:"007",
      name : "Md. Hafijur Rahman",
      role: "Accountant",
      designation: "Accountant",
      jobType : "permanent",
      mobile : "01234567890",
      gender: "Male",
   },
 ]

export default function SListTable({handleDelete}) {
    return (
      <div className="overflow-x-scroll border mt-6 rounded shadow-md">
      <table className="w-full text-textGray text-sm">
      <thead className="border-b-2 bg-bgBlue leading-8">
        <tr>
          <th className="min-w-10 text-start pl-2">#</th>
          <th className="min-w-12 text-start">ID</th>
          <th className="min-w-[72px] text-start">PICTURE</th>
          <th className="min-w-36 text-start">NAME</th>
          <th className="min-w-20 text-start">ROLE</th>
          <th className="min-w-16 text-start">GENDER</th>
          <th className="min-w-28 text-start">DESIGNATION</th>
          <th className="min-w-20 text-start">JOB TYPE</th>
          <th className="min-w-20 text-start">MOBILE</th>
          <th className="min-w-40 text-center">ACTIONS</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium">
        {staffs.map((item, index) => (
          <tr key={index} className="text-start leading-8">
          <td className="min-w-10 pl-2">#</td>
          <td className="min-w-12">ID</td>
          <td className="min-w-[72px]">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0Bjks3GU1iN8K5J-D9JIcL2OR2rF4WX6mg&s"
            className="w-8 h-8 rounded-full ml-2" ></img>
         </td>
          <td className="min-w-36">{item.name}</td>
          <td className="min-w-20">{item.role}</td>
          <td className="min-w-16">{item.gender}</td>
          <td className="min-w-28">{item.designation}</td>
          <td className="min-w-20">{item.jobType}</td>
          <td className="min-w-20">{item.mobile}</td>
          <td className="min-w-40 pb-1 text-center">
             <Link to={`/staff-info/edit-parent/${item.id}`}>
                <button
                   className="bg-blue px-3 py-1 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm m-1"
                >
                   Edit
                </button>
              </Link>
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