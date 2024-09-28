import TodayDate from "../../common/TodayDate";

export default function IncomeEDForm() {
  return (
    <div className="md:flex justify-between items-center">
         <div className="flex items-center md:w-2/3 lg:w-1/2 my-4 gap-2 md:gap-4">
            <label className="w-36">Select Date</label>
               <input
                  type="date"
                  className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
               />

            <button className="bg-primary hover:bg-buttonHover w-24 sm:w-32 md:w-40 ml-1 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
               Submit
            </button>
         </div>

         <TodayDate />
    </div>
  )
}
