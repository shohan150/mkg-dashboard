import { FaRegFilePdf } from "react-icons/fa6";
import { MdLocalPrintshop } from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";

export default function TableDataFeatures() {
    return (
      <div className="flex items-end gap-2">
         <button
         className="flex items-center gap-1 md:gap-2 rounded px-4 py-2 bg-blue text-white shadow-md hover:-translate-y-[2px] duration-200"
         >
            <MdLocalPrintshop className="text-xl" /> Print
         </button>
         
         <button
         className="flex items-center gap-1 md:gap-2 rounded px-4 py-2 bg-green text-white shadow-md hover:-translate-y-[2px] duration-200"
         >
            <FaRegFilePdf className="text-lg" /> PDF
         </button>
         
         <button
         className="flex items-center gap-1 md:gap-2 rounded px-4 py-2 bg-yellow text-white shadow-md hover:-translate-y-[2px] duration-200"
         >
            <SiMicrosoftexcel className="text-lg" /> Excel
         </button>
         
      </div>
    );
}