import { FaAngleDown } from "react-icons/fa6";

export default function InfoAction() {
    return (
        <div className="flex justify-between">
         <div className="rounded flex">
            <h3 className="text-white bg-primary px-4 py-2 rounded-l">Add New Record</h3>
            <div className="flex items-center gap-1 bg-secondary px-4 py-2 rounded-r text-white">
               <h3 className="">Export</h3>
               <FaAngleDown />
            </div>
         </div>

         <div className="flex">
            <input
            type="text"
            placeholder="Enter Item Name"
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
            <div className="flex">
               show checkbox entries
            </div>
         </div>
        </div>
    );
}