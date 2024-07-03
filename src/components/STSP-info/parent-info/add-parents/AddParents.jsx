import AddPForm from "./AddPForm";

export default function AddParents() {
    return (
      <div className="my-4 bg-white rounded-md p-4 md:p-6">
         <div className="flex justify-between items-end">
            <h3 className="text-xl font-medium">Parent Registration</h3>
            <button
            type="submit"
            className="rounded w-36 p-2 bg-yellow text-white shadow-md  hover:-translate-y-[2px] duration-200"
            >
            Submit
            </button>
         </div>

         <AddPForm />

         <div className="flex justify-end items-center gap-4 my-4">
            <button className="bg-blue w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
               Save
               </button>

            <button className="bg-red w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
               Close
            </button>
         </div>
      </div>
    );
}