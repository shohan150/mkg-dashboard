import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import EditPForm from "./EditPForm";

export default function EditParent() {
   const parent = useLoaderData();
   const [parentData, setParentData] = useState(parent);

   function handleChange (field, data){
      setParentData({...parent, [field]:data.target.value})
   }
   
    return (
      <div className="my-4 rounded p-4 md:p-6 bg-white">
         <h3 className="text-2xl font-medium mb-4">Edit Parent</h3>

         <EditPForm parentData={parentData} handleChange={handleChange} />

         {/* form submit buttons */}
         <div className="flex justify-end items-center gap-4 mt-6 mb-2 md:mb-0">
            <button className="bg-blue w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
               Save
            </button>

            <Link to="/parent-info/parents-list">
               <button className="bg-red w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
                  Cancel
               </button>
            </Link>
         </div>
      </div>
    );
}