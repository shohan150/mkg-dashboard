export default function InputFields() {
    return (
        <>
        {/* button template */}
      <button
         type="submit"
         className="rounded w-36 p-2 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200"
         >
         Submit
      </button>

       <div className="flex items-center gap-2 md:w-5/12 my-2">
          <label className="w-28 md:max-lg:w-32">Type Name</label>
          <input
            type="text"
            placeholder="Enter Item Name"
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 md:w-5/12 my-2">
          <label className="w-28 md:max-lg:w-32">Select Type</label>
          <select
            id=""
            name=""
            defaultValue="Class"
            className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
          >
            <option value="Class">Class</option>
            <option value="Subject">Subject</option>
            <option value="Section">Section</option>
            <option value="Shift">Shift</option>
            <option value="Period">Period</option>
            <option value="Session">Session</option>
          </select>
        </div>

         <div className="space-y-1">
            <label className="text-textGray" htmlFor="">Institution Logo</label>
            <input className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file"/>
         </div>


         <div className="space-y-1">
            <label className="text-textGray">Institute ID</label>
            <input
               type="text"
               placeholder="Enter Institute ID"
               className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
         
         <div className="space-y-1">
            <label className="text-textGray">Institute Gender Type</label>
            <select
               id=""
               name=""
               defaultValue="Combined"
               className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
            >
               <option value="Combined">Combined</option>
               <option value="Boys">Boys</option>
               <option value="Girls">Girls</option>
            </select>
         </div>
        </>
    );
}