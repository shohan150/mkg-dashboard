import { useState } from "react";

export default function AllocationTable({title, data:propData}) {

   const [data, setData] = useState(propData);

   const handleChange = (event, id) => {
      const updatedData = data.map(item => {
         if(item.id === id) {
            item.package = event.target.value;
         }
         return item;
      })
      setData(updatedData);
   }

  return (
   <>
      <div className="border my-6 rounded shadow-md">
         <table className="w-full text-sm md:text-base text-textGray leading-6 sm:leading-8">
            <thead className="border-b-2 bg-bgBlue">
            <tr>
               <th className="w-2/12 p-2">ID</th>
               <th className="w-3/12">Student Name</th>
               <th className="w-2/12">Roll</th>
               <th className="w-5/12">{title} Package</th>
            </tr>
            </thead>
            <tbody className="divide-y-2 font-medium">
            {data.map(item => (
               <tr key={item.id} className="text-center">
                  <td className="w-2/12">{item.id}</td>
                  <td className="w-3/12">{item.name}</td>
                  <td className="w-2/12">{item.roll}</td>
                  <td className="w-5/12 p-1 pr-2">
                     <select
                     id=""
                     name=""
                     value={item.package}
                     onChange={(event) => handleChange(event, item.id)}
                     className="bg-bgGray w-full rounded px-1 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                     >
                        <option value="Package 1 - 1000">Package 1 - 1000</option>
                        <option value="Package 2 - 2000">Package 2 - 2000</option>
                        <option value="Package 3 - 3000">Package 3 - 3000</option>
                     </select>
                  </td>
               </tr>
            ))}
            </tbody>
         </table>

      </div>

      {/* Save and cancel buttons */}
      <div className="flex justify-end items-center gap-4 my-4">
         <button className="bg-blue w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
            Save
         </button>

         <button className="bg-red w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
            Cancel
         </button>
      </div>
   </>
  )
}
