import { Link } from "react-router-dom";

export default function AExRHeader() {
    return (
      <div className="flex gap-4 items-center justify-between bg-bgGreen px-2 py-3 my-2 rounded">
         <div className="sm:flex gap-2 text-primary font-bold divide-x-2 divide-primary">
            <h3 className="">Class : One</h3>
            <h3 className="pl-2">Section : Jaba</h3>
            <h3 className="pl-2">Shift : Morning</h3>
         </div>
         <div className="flex items-center gap-2 justify-end">
            <Link to="../exam-schedule">
               <button
                  type="submit"
                  className="rounded w-full px-4 py-2 bg-yellow text-white shadow-md  hover:-translate-y-[2px] duration-200"
               >
                  Exam Schedule List
               </button>
            </Link>
         </div>
      </div>
    );
}