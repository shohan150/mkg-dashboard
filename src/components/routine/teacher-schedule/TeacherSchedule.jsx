import TeacherScheduleTable from "./TeacherScheduleTable";

export default function TeacherSchedule() {
    return (
      <div className="bg-white rounded-md px-4 py-2 my-2 sm:my-4">
         <div className="flex items-center my-4 gap-2 md:gap-4">
            <label className="w-24=8">Select Teacher</label>
            <select
            id=""
            name=""
            defaultValue="Select"
            className="bg-bgGray flex-1 rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
            >
               <option value="Select" disabled>Select Teacher</option>
               <option value="Jalil Ahmed">Jalil Ahmed</option>
               <option value="Kadir Khan">Kadir Khan</option>
               <option value="Ahmed Hasan">Ahmed Hasan</option>
            </select>

            <button className="bg-primary hover:bg-buttonHover w-20 sm:w-28 md:w-32 ml-1 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
               Submit
            </button>
         </div>

         <TeacherScheduleTable />
      </div>
    );
}