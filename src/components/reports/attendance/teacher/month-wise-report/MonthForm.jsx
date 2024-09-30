export default function MonthForm() {
    return (
      <form className="md:flex gap-7 items-center justify-between mb-2">

        <div className="flex items-center gap-2 md:w-5/12 my-2">
          <label className="w-32">Select Month</label>
          <input
            type="month"
            className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
        </div>


        {/* create button */}
        <div className="flex items-center gap-2 md:w-2/12 justify-end my-4">
          <button
            type="submit"
            className="rounded w-full p-3 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    );
}