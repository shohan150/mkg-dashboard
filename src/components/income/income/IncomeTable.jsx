import { Link } from "react-router-dom";

export default function IncomeTable({studentsData, amountToShow, index, handleDelete}) {

  const showItems = studentsData.slice(index*Math.floor(amountToShow), index*Math.floor(amountToShow) + Math.floor(amountToShow));
  

    return (
      <div className="overflow-x-scroll border mt-6 rounded shadow-md">
      <table className="w-full text-textGray">
      <thead className="border-b-2 bg-bgBlue leading-10">
        <tr>
          <th className="min-w-12">ID</th>
          <th className="min-w-[72px]">Image</th>  
          <th className="min-w-36">NAME</th>
          <th className="min-w-12">Roll</th>
          <th className="min-w-12">Amount</th>
          <th className="min-w-28">Income Head</th>
          <th className="min-w-32">Description</th>
          <th className="min-w-20">Document</th>
          <th className="min-w-24">Invoice No</th>
          <th className="min-w-24">Created By</th>
          <th className="min-w-24">Updated By</th>
          <th className="min-w-40 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium text-sm">
        {showItems.map((item, index) => (
          <tr key={index} className="text-center leading-8 even:bg-slate-200">
            <td className="min-w-12">{item.id}</td>
            <td className="min-w-[72px]">
              <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0Bjks3GU1iN8K5J-D9JIcL2OR2rF4WX6mg&s"
              className="w-8 h-8 rounded-full m-auto" ></img>
            </td>
            <td className="min-w-36">{item.name}</td>
            <td className="min-w-12">{item.rfid}</td>
            <td className="min-w-12">12,000</td>
            <td className="min-w-12">Tution Fee</td>
            <td className="min-w-32">Tution fee paid</td>
            <td className="min-w-20"><button className="text-red leading-5 p-1 rounded hover:bg-red hover:text-white duration-200">Download</button></td>
            <td className="min-w-20">1234567</td>
            <td className="min-w-20">Admin</td>
            <td className="min-w-20">Admin</td>
            <td className="min-w-40 pb-1 text-center">
              <Link to="/income/add-income">
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