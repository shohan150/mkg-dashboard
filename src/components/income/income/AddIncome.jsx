import { Link } from "react-router-dom";

export default function AddIncome() {
  return (
   <div className="my-4 bg-white rounded-md p-4 md:p-6">
      <h3 className="text-2xl font-medium">Add / Edit Income Entry</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
         <div className="space-y-1">
            <label className="text-textGray">Id  :</label>
            <input
               type="text"
               placeholder="Enter Name"
               className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
         
         <div className="space-y-1">
            <label className="text-textGray">Name :</label>
            <input
               type="text"
               placeholder="Enter Name"
               className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-1">
            <label className="text-textGray">Amount :</label>
            <input
               type="number"
               placeholder="Enter Amount"
               className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="text-textGray">Income Head :</label>
            <select
            id=""
            name=""
            className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
            >
               <option value="Tution Fee">Tution Fee</option>
               <option value="Maintenance Fee">Maintenance Fee</option>
               <option value="Cultural Fee">Cultural Fee</option>
               <option value="Other">Other</option>
            </select>
         </div>
         
         <div className="space-y-1">
            <label className="text-textGray">Date :</label>
            <input
               type="date"
               className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-1">
            <label className="text-textGray">Invoice No :</label>
            <input
               type="number"
               placeholder="Enter Invoice"
               className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-1">
            <label className="text-textGray" htmlFor="">Document :</label>
            <input className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" 
            placeholder="Upload Document" aria-describedby="" id="" type="file"/>
         </div>
      </div>

      <div className="space-y-1">
      <label className="text-textGray" htmlFor="">Description :</label>
      <textarea className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none" rows="3" placeholder="Enter Description"></textarea>
      </div>

      <div className="flex justify-end items-center gap-4 my-4">
         <button className="bg-blue w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
            Save
         </button>

         <Link to="/income/income">
            <button className="bg-red w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
               Close
            </button>
         </Link>
      </div>
   </div>
  )
}
