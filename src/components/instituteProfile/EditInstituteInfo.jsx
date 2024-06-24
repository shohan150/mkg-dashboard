import { Link } from "react-router-dom";
import InstInfoForm from "./InstInfoForm";

export default function EditInstituteInfo() {
    return (
        <div className="bg-white p-6 md:py-7 md:px-10 rounded-md my-4">
         <h5 className=" text-textGray font-medium text-xl">Institute Information</h5>

         {/* main form */}
         <InstInfoForm />

         {/* action buttons */}
         <div className="flex justify-end items-center gap-4">
            <Link to="/institute_profile">
               <button className="bg-blue w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
                  Save
                </button>
            </Link>

            <Link to="/institute_profile">
               <button className="bg-red w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
                  Close
               </button>
            </Link>
         </div>
        </div>
    );
}