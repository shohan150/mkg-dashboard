export default function AddPForm() {
    return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
      {/* Avatar */}
      <div className="space-y-1">
         <label className="text-textGray" htmlFor="">Avatar :</label>
         <input className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file"/>
      </div>

      {/* Parent Name */}
      <div className="space-y-1">
         <label className="text-textGray">Parent Name :</label>
         <input
            type="text"
            placeholder="Enter Parent Name"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Phone Number */}
      <div className="space-y-1">
         <label className="text-textGray">Phone Number :</label>
         <input
            type="text"
            placeholder="Enter Phone Number"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Occupation */}
      <div className="space-y-1">
         <label className="text-textGray">Occupation :</label>
         <input
            type="text"
            placeholder="Enter Occupation"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* NID */}
      <div className="space-y-1">
         <label className="text-textGray">NID :</label>
         <input
            type="text"
            placeholder="Enter NID"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Relation */}
      <div className="space-y-1">
         <label className="text-textGray">Relation :</label>
         <input
            type="text"
            placeholder="Enter Relation"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Father Name */}
      <div className="space-y-1">
         <label className="text-textGray">Father Name :</label>
         <input
            type="text"
            placeholder="Enter Father Name"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Father Phone No */}
      <div className="space-y-1">
         <label className="text-textGray">Father Phone No :</label>
         <input
            type="text"
            placeholder="Enter Father Phone No"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Mother Name */}
      <div className="space-y-1">
         <label className="text-textGray">Mother Name :</label>
         <input
            type="text"
            placeholder="Enter Mother Name"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Mother Phone No */}
      <div className="space-y-1">
         <label className="text-textGray">Mother Phone No :</label>
         <input
            type="text"
            placeholder="Enter Mother Phone No"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

   </div>
    );
}