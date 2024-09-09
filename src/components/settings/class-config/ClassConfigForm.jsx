export default function ClassConfigForm() {
    return (
      <form className="md:flex gap-7 items-center justify-between mb-2">
      <div className="flex items-center gap-2 md:w-5/12 my-2">
        <label className="w-32">Select Class</label>
        <select
          id=""
          name=""
          defaultValue="Class"
          className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
        >
          <option value="Nursery">Nursery</option>
          <option value="One">One</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
          <option value="Four">Four</option>
          <option value="Five">Five</option>
        </select>
      </div>


      <div className="flex items-center gap-2 md:w-5/12 my-2">
        <label className="w-32">Select Shift</label>
        <select
          id=""
          name=""
          defaultValue="Class"
          className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
        >
          <option value="Morning">Morning</option>
          <option value="Day">Day</option>
          <option value="Evening">Evening</option>
        </select>
      </div>


      {/* create button */}
      <div className="flex items-center gap-2 md:w-2/12 justify-end my-4">
        <button
          type="submit"
          className="rounded w-full p-3 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200"
        >
          Create
        </button>
      </div>
    </form>
    );
}