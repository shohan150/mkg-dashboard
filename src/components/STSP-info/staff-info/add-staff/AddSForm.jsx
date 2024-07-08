import { useState } from "react";

export default function AddSForm() {
   const [maritalStatus, setMaritalStatus] = useState("Single");

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
         value={maritalStatus}
         onChange={(e)=> setMaritalStatus(e.target.value)}
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
         >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
            <option value="Widowed">Widowed</option>
            <option value="Separated">Separated</option>
            <option value="Divorced">Divorced</option>
         </select>
      </div>

{
   (maritalStatus === "Married" || maritalStatus === "Widowed") &&
   <>
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
   </>
}

   </div>

   <h5 className="text-textGray font-medium mt-6 mb-2">Employee Information</h5>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
      
      {/* Staff ID Number */}
      <div className="space-y-1">
         <label className="text-textGray">Staff ID Number :</label>
         <input
            type="number"
            placeholder="Enter Staff ID Number"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Joining Date */}
      <div className="space-y-1">
         <label className="text-textGray">Joining Date :</label>
         <input
            type="date"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      <div className="space-y-2">
         <label className="text-textGray">Qualification</label>
         <select
         id=""
         name=""
         defaultValue="SSC"
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
         >
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="HON'S+">HON'S+</option>
            <option value="Masters">Masters</option>
            <option value="BSC">BSC</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
            <option value="MSC">MSC</option>
            <option value="PHD">PHD</option>
         </select>
      </div>

      <div className="space-y-2">
         <label className="text-textGray">Employee Type</label>
         <select
         id=""
         name=""
         defaultValue="Permanent"
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
         >
            <option value="Permanent">Permanent</option>
            <option value="Temporary">Temporary</option>
            <option value="Contractual">Contractual</option>
         </select>
      </div>

      {/* Role */}
      <div className="space-y-1">
         <label className="text-textGray">Role :</label>
         <input
            type="text"
            placeholder="Enter Role"
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

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
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-2">
            
      <div className="space-y-2">
         <label className="text-textGray">Permanent Address</label>
         <textarea
         rows="3"
         placeholder="Enter Your Permanent Address"
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none" />
      </div>
            
      <div className="space-y-2">
         <label className="text-textGray">Present Address</label>
         <textarea
         rows="3"
         placeholder="Enter Your Present Address"
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none" />
      </div>
   </div>

   <div className="flex justify-end mt-4 mb-2 md:mb-0">
      <button
         type="submit"
         className="rounded w-40 p-3 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200"
         >
         Submit
      </button>
   </div>
</>
    );
}