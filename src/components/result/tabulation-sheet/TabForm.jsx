export default function TabForm() {
   return (
  <form className="sm:flex space-y-2 gap-2 sm:gap-3 md:gap-5 lg:gap-7 items-end mt-2 sm:mt-0 mb-2">

     {/* select exam */}
     <div className="space-y-1 w-full sm:w-1/4">
        <label className="">Select Exam</label>
        <select
        id=""
        name=""
        defaultValue="Select Exam"
        className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
        >
        <option value="Select Exam" disabled>Select Exam</option>
        <option value="First Term">First Term</option>
        <option value="Second Term">Second Term</option>
        </select>
     </div>

     {/* select class */}
     <div className="space-y-1 w-full sm:w-1/4">
        <label className="">Select Class</label>
        <select
        id=""
        name=""
        defaultValue="Select Class"
        className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
        >
        <option value="Select Class" disabled>Select Class</option>
        <option value="Nursery Jaba">Nursery Jaba</option>
        <option value="Nursery Golap">Nursery Golap</option>
        <option value="Class One Dalim">Class One Dalim</option>
        </select>
     </div>

     {/* select subject*/}
     <div className="space-y-1 w-full sm:w-1/4 pb-2 sm:pb-0">
        <label className="">Select Section</label>
        <select
        id=""
        name=""
        defaultValue="Select Section"
        className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
        >
        <option value="Select Section" disabled>Select Subject</option>
        <option value="Jaba">Jaba</option>
        <option value="Kodom">Kodom</option>
        <option value="Golap">Golap</option>
        </select>
     </div>


     {/* load marks button */}
     <button
     type="submit"
     className="rounded w-full sm:w-1/4 p-2 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200"
     >
        Load Marks
     </button>
  </form>
   );
}