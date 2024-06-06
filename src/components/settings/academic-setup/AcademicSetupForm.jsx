export default function AcademicSetupForm() {
  return (
    <div className="bg-white rounded-md px-4 py-2 my-2 sm:my-4">
      <form className="md:flex gap-7 items-center justify-between">
        {/* select what type of data to entry */}
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
        {/* enter the value */}
        <div className="flex items-center gap-2 md:w-5/12 my-2">
          <label className="w-28 md:max-lg:w-32">Type Name</label>
          <input
            type="text"
            placeholder="Enter Item Name"
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
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
