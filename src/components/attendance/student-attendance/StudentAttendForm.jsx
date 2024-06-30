export default function StudentAttendForm({setChosenClass}) {
    return (
   <div className="space-y-2 my-4">
      <label className="">Select Class</label>
      <div className="flex gap-4">
         <select
         id=""
         name=""
         defaultValue="Select Class"
         className="bg-bgGray flex-1 rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
         onChange={(e)=> {setChosenClass(e.target.value)}}
         >
            <option value="Select Class" disabled>Select Class</option>
            <option value="Nursery Jaba">Nursery Jaba</option>
            <option value="Nursery Beli">Nursery Beli</option>
            <option value="Nursery Shapla">Nursery Shapla</option>
            <option value="Nursery Golap">Nursery Golap</option>
         </select>
         <button
            type="submit"
            className="rounded w-36 p-2 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200"
            >
            Submit
         </button>
      </div>
   </div>
    );
}