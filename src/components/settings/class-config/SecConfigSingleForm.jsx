export default function SecConfigSingleForm({section}) {
    return (
      <div className="sm:flex items-center justify-between gap-4">
      <div className="sm:flex gap-4 flex-1">
         <div className="flex items-center gap-2 md:gap-4 my-2 w-full sm:w-52 md:w-60">
            <label>Section</label>
            <select
               id=""
               name=""
               value={section.name}
               defaultValue="select"
               className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
            >
               <option value="select">Section</option>
               <option value="jabe">Jaba</option>
               <option value="golap">Golap</option>
               <option value="kobori">Kobori</option>
            </select>
         </div>

         <div className="flex items-center gap-2 md:gap-4 my-2 w-full sm:w-52 md:w-60">
         <label>Group</label>
         <select
            id=""
            name=""
            value={section.group}
            defaultValue="select"
            className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
         >
            <option value="select">Group</option>
            <option value="science">Science</option>
            <option value="arts">Arts</option>
            <option value="general">General</option>
         </select>
         </div>
      </div>

      <div className="flex items-center 
      justify-end">
         <button
            type="submit"
            className="rounded w-28 p-2 bg-red text-white shadow-md  hover:-translate-y-[2px] duration-200"
         >
            Delete
         </button>
      </div>
   </div>
    );
}