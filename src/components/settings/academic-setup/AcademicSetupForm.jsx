export default function AcademicSetupForm() {
  return (
    <div className="bg-white rounded-md px-4 py-2 my-2 sm:my-4">
      <form className="md:flex gap-7 items-center justify-between">
        {/* select what type of data to entry */}
        {/* previous select field */}
        {/* <div className="flex items-center gap-2 md:w-5/12 my-2">
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
        </div> */}

        {/* new select field */}
        <div className="relative md:w-5/12 my-2">
          <select
            name="type name"
            className="peer bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none placeholder-transparent"
          >
            <option value="Class" disabled>
              Class
            </option>
            <option value="Subject">Subject</option>
            <option value="Section">Section</option>
            <option value="Shift">Shift</option>
            <option value="Period">Period</option>
            <option value="Session">Session</option>
          </select>
          <label
            htmlFor="type name"
            className="absolute left-2 -top-3 text-sm transition-all duration-200 bg-white px-1 peer-focus:-top-3 peer-focus:bg-white peer-focus:text-sm
            peer-placeholder-shown:text-base peer-placeholder-shown:top-[10px] peer-placeholder-shown:bg-transparent"
          >
            Type Name
          </label>
        </div>

        {/* enter the value */}
        {/* previous form with static label and input field.  */}
        {/* <div className="flex items-center gap-2 md:w-5/12 my-2">
          <label className="w-28 md:max-lg:w-32">Type Name</label>
          <input
            type="text"
            placeholder="Enter Item Name"
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div> */}

        {/* New input field with floating label*/}
        <div className="relative md:w-5/12 my-4">
          <input
            type="text"
            name="type name"
            className="peer bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none placeholder-transparent"
            placeholder="Type Name"
          />
          <label
            htmlFor="type name"
            className="absolute left-2 -top-3 text-sm transition-all duration-200 bg-white px-1 peer-focus:-top-3 peer-focus:bg-white peer-focus:text-sm
            peer-placeholder-shown:text-base peer-placeholder-shown:top-[10px] peer-placeholder-shown:bg-transparent"
          >
            Type Name
          </label>
        </div>

        {/* create button */}
        <div className="flex items-center gap-2 md:w-2/12 justify-end my-4">
          <button
            type="submit"
            className="rounded w-full p-3 bg-primary text-white shadow-md hover:bg- hover:-translate-y-[2px] duration-200"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
