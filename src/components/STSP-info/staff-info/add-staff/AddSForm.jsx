export default function AddSForm() {
    return (
<>
   <h5 className="text-textGray font-medium mt-6 mb-2">Personal Information</h5>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
      {/* Avatar */}
      <div className="space-y-1">
         <label className="text-textGray" htmlFor="">Avatar :</label>
         <input className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file"/>
      </div>

      {/* Name */}
      <div className="space-y-1">
         <label className="text-textGray">Name :</label>
         <input
            type="text"
            placeholder="Enter Name"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>
      
      <div className="space-y-2">
         <label className="text-textGray">Gender</label>
         <select
         id=""
         name=""
         defaultValue="Male"
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
         >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
         </select>
      </div>

      <div className="space-y-2">
         <label className="text-textGray">Blood Group</label>
         <select
         id=""
         name=""
         defaultValue="Select Blood Group"
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
         >
            <option value="Select Blood Group" disabled >Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
         </select>
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

      {/* Email */}
      <div className="space-y-1">
         <label className="text-textGray">Email :</label>
         <input
            type="text"
            placeholder="Enter Email"
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

      {/* Date of Birth */}
      <div className="space-y-1">
         <label className="text-textGray">Date of Birth :</label>
         <input
            type="date"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* RFID */}
      <div className="space-y-1">
         <label className="text-textGray">RFID :</label>
         <input
            type="text"
            placeholder="Enter RFID"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      <div className="space-y-2">
         <label className="text-textGray">Religion</label>
         <select
         id=""
         name=""
         defaultValue="Islam"
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
         >
            <option value="Islam">Islam</option>
            <option value="Hindu">Hindu</option>
            <option value="Christian">Christian</option>
            <option value="Buddha">Buddha</option>
            <option value="Other">Other</option>
         </select>
      </div>

      {/* Father's Name */}
      <div className="space-y-1">
         <label className="text-textGray">Father's Name :</label>
         <input
            type="text"
            placeholder="Enter Father's Name"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* MChristian's Name */}
      <div className="space-y-1">
         <label className="text-textGray">Mother's Name :</label>
         <input
            type="text"
            placeholder="Enter Mother's Name"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      
      <div className="space-y-2">
         <label className="text-textGray">Marital Status</label>
         <select
         id=""
         name=""
         defaultValue="Islam"
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
         >
            <option value="Islam">Islam</option>
            <option value="Hindu">Hindu</option>
            <option value="Christian">Christian</option>
            <option value="Buddha">Buddha</option>
            <option value="Other">Other</option>
         </select>
      </div>

      {/* Spouse Name */}
      <div className="space-y-1">
         <label className="text-textGray">Spouse Name :</label>
         <input
            type="text"
            placeholder="Enter Spouse Name"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Spouse Phone Number */}
      <div className="space-y-1">
         <label className="text-textGray">Spouse Phone Number :</label>
         <input
            type="text"
            placeholder="Enter Spouse Phone Number"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>
   </div>

   <h5 className="text-textGray font-medium mt-6 mb-2">Employee Information</h5>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
      {/* Designation */}
      <div className="space-y-1">
         <label className="text-textGray">Designation :</label>
         <input
            type="text"
            placeholder="Enter Designation"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>
   </div>

   <h5 className="text-textGray font-medium mt-6 mb-2">Contact Information</h5>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">

   </div>
</>
    );
}