import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ExportPdfCsv from "./ExportPdfCsv";

export default function InfoAction({amountToShow, handleAmountToShow}) {
   const [isExport, setIsExport] = useState(false);
   function handleOutsideClick (){
      setIsExport(false);
   }
    return (
        <div className="md:flex justify-between">
         {/* left side buttons */}
         <div className="rounded flex items-center mb-4 md:mb-0">
            <Link to="/parent-info/add-parent">
               <button className="text-white bg-primary px-4 md:px-5 py-2 rounded-l">Add New Record</button>
            </Link>
            <div className="flex items-center gap-1 bg-secondary px-4 md:px-5 py-2 rounded-r text-white relative" onClick={()=> {setIsExport(state=>!state)}}>
               <button className="">Export</button>
               <FaAngleDown />
               {isExport && <ExportPdfCsv handleOutsideClick={handleOutsideClick} />}
            </div>
         </div>

         {/* search box and selection */}
         <div className="flex items-center justify-between gap-6">
            <input
            type="text"
            placeholder="Enter Search Term"
            className="bg-bgGray w-full md:w-64 rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
            <div className="flex items-center gap-2">
               <h3>Show</h3>
               <select
               id=""
               name=""
               value={amountToShow}
               onChange={(e)=>handleAmountToShow(e.target.value)}
               className="bg-bgGray w-16 rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
               >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
               </select>
               <h3>Entries</h3>
            </div>
         </div>
        </div>
    );
}