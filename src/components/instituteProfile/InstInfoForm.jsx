export default function InstInfoForm() {
    return (
        <div className="my-2">
         {/* basic info form */}
         <h5 className="font-medium bg-bgBlue rounded py-1 px-2 text-xs tracking-wide inline text-blue">BASIC INFORMATION</h5>
         <form className="my-6" action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* institute id */}
               <div className="space-y-1">
                  <label className="text-textGray">Institute ID</label>
                  <input
                     type="text"
                     placeholder="Enter Item Name"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               {/* {dummy select */}
               <div className="space-y-1">
                  <label className="text-textGray">Select Type</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Class"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
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
                  <label className="text-textGray" htmlFor="">Upload file</label>
                  <input className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file"/>
               </div>

            </div>
         </form>
        </div>
    );
}