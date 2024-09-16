export default function ExamFeeHeader() {
    return (
      <form className="md:flex gap-8 items-center justify-between mb-2">
         
         <div className="flex items-center gap-2 w-full my-2">
            <label className="">Exam</label>
            <select
               id=""
               name=""
               defaultValue="1st"
               className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
            >
               <option value="1st">1st Term</option>
               <option value="final">Final Term</option>
            </select>
         </div>

         <div className="flex items-center gap-2 w-full my-2">
            <label className="">Class</label>
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


         <div className="flex items-center gap-2 w-full my-2">
            <label className="">Section</label>
            <select
               id=""
               name=""
               defaultValue="select"
               className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
            >
               <option value="select">Section</option>
               <option value="Jaba">Jaba</option>
               <option value="Golap">Golap</option>
            </select>
         </div>


         {/* create button */}
         <div className="flex items-center gap-2 justify-end my-4">
         <button
            type="submit"
            className="rounded w-28 p-3 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200"
         >
            Submit
         </button>
         </div>
      </form>
    );
}