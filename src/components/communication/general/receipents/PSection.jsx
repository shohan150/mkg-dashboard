export default function PSection() {
    return (
      <div className="space-y-2">
         <label className="w-28 md:max-lg:w-32">Select Section</label>
         <input
         type="text"
         placeholder="Enter Section"
         className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>
    );
}