export default function EditPForm({parentData, handleChange}) {
    return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
            value={parentData.parentName}
            onChange={(event)=> {handleChange("parentName", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Phone Number */}
      <div className="space-y-1">
         <label className="text-textGray">Phone Number :</label>
         <input
            type="text"
            placeholder="Enter Phone Number"
            value={parentData.parentMobile}
            onChange={(event)=> {handleChange("parentMobile", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Occupation */}
      <div className="space-y-1">
         <label className="text-textGray">Occupation :</label>
         <input
            type="text"
            placeholder="Enter Occupation"
            value={parentData.occupation}
            onChange={(event)=> {handleChange("occupation", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* NID */}
      <div className="space-y-1">
         <label className="text-textGray">NID :</label>
         <input
            type="text"
            placeholder="Enter NID"
            value={parentData.parentNID}
            onChange={(event)=> {handleChange("parentNID", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Relation */}
      <div className="space-y-1">
         <label className="text-textGray">Relation :</label>
         <input
            type="text"
            placeholder="Enter Relation"
            value={parentData.relation}
            onChange={(event)=> {handleChange("relation", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Father Name */}
      <div className="space-y-1">
         <label className="text-textGray">Father Name :</label>
         <input
            type="text"
            placeholder="Enter Father Name"
            value={parentData.parentName}
            onChange={(event)=> {handleChange("parentName", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Father Phone No */}
      <div className="space-y-1">
         <label className="text-textGray">Father Phone No :</label>
         <input
            type="text"
            placeholder="Enter Father Phone No"
            value={parentData.parentMobile}
            onChange={(event)=> {handleChange("parentMobile", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Mother Name */}
      <div className="space-y-1">
         <label className="text-textGray">Mother Name :</label>
         <input
            type="text"
            placeholder="Enter Mother Name"
            value={parentData.motherName}
            onChange={(event)=> {handleChange("motherName", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Mother Phone No */}
      <div className="space-y-1">
         <label className="text-textGray">Mother Phone No :</label>
         <input
            type="text"
            placeholder="Enter Mother Phone No"
            value={parentData.motherMobile}
            onChange={(event)=> {handleChange("motherMobile", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      </div>
    );
}