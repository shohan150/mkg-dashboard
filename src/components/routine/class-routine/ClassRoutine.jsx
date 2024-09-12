import ClassRoutineTable from "./ClassRoutineTable";

export default function ClassRoutine() {
    return (
      <div className="bg-white rounded-md px-4 py-2 my-2 sm:my-4">
         <div className="flex items-center my-4 gap-2 md:gap-4">
            <label className="w-24">Select Class</label>
            <select
            id=""
            name=""
            defaultValue="Select"
            className="bg-bgGray flex-1 rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
            >
               <option value="Select" disabled>Select Class</option>
               <option value="One A">One A</option>
               <option value="One B">One B</option>
               <option value="Two A">Period</option>
            </select>

            <button className="bg-primary hover:bg-buttonHover w-20 sm:w-28 md:w-32 ml-1 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
               Submit
            </button>
         </div>

         <ClassRoutineTable />
      </div>
    );
}