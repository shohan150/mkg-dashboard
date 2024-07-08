
export default function EditTForm({teacherData, handleChange}) {
    return (
<>
   <h5 className="text-textGray font-medium mt-6 mb-2">Personal Information</h5>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
      {/* Avatar */}
      <div className="space-y-1">
         <label className="text-textGray" htmlFor="">Avatar :</label>
         <input 
         value={teacherData.avatar}
         onChange={(event)=> {handleChange("avatar", event)}}
         className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file"/>
      </div>

      {/* Name */}
      <div className="space-y-1">
         <label className="text-textGray">Name :</label>
         <input
            type="text"
            placeholder="Enter Name"
            value={teacherData.name}
            onChange={(event)=> {handleChange("name", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>
      
      <div className="space-y-2">
         <label className="text-textGray">Gender</label>
         <select
         id=""
         name=""
         value={teacherData.gender}
         onChange={(event)=> {handleChange("gender", event)}}
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
         value={teacherData.bloodGroup}
         onChange={(event)=> {handleChange("bloodGroup", event)}}
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
         >
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
            value={teacherData.mobile}
            onChange={(event)=> {handleChange("mobile", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Email */}
      <div className="space-y-1">
         <label className="text-textGray">Email :</label>
         <input
            type="text"
            placeholder="Enter Email"
            value={teacherData.email}
            onChange={(event)=> {handleChange("email", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* NID */}
      <div className="space-y-1">
         <label className="text-textGray">NID :</label>
         <input
            type="text"
            placeholder="Enter NID"
            value={teacherData.NID}
            onChange={(event)=> {handleChange("NID", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Date of Birth */}
      <div className="space-y-1">
         <label className="text-textGray">Date of Birth :</label>
         <input
            type="date"
            value={teacherData.birthDate}
            onChange={(event)=> {handleChange("birthDate", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* RFID */}
      <div className="space-y-1">
         <label className="text-textGray">RFID :</label>
         <input
            type="text"
            placeholder="Enter RFID"
            value={teacherData.id}
            onChange={(event)=> {handleChange("id", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      <div className="space-y-2">
         <label className="text-textGray">Religion</label>
         <select
         id=""
         name=""
         defaultValue="Islam"
         value={teacherData.religion}
         onChange={(event)=> {handleChange("religion", event)}}
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
            value={teacherData.fathersName}
            onChange={(event)=> {handleChange("fathersName", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* MChristian's Name */}
      <div className="space-y-1">
         <label className="text-textGray">Mother's Name :</label>
         <input
            type="text"
            placeholder="Enter Mother's Name"
            value={teacherData.mothersName}
            onChange={(event)=> {handleChange("mothersName", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      
      <div className="space-y-2">
         <label className="text-textGray">Marital Status</label>
         <select
         id=""
         name=""
         value={teacherData.maritalStatus}
         onChange={(event)=> {handleChange("maritalStatus", event)}}
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
   (teacherData.maritalStatus === "Married" || teacherData.maritalStatus === "Widowed") &&
   <>
         {/* Spouse Name */}
         <div className="space-y-1">
         <label className="text-textGray">Spouse Name :</label>
         <input
            type="text"
            placeholder="Enter Spouse Name"
            value={teacherData.spouseName}
            onChange={(event)=> {handleChange("spouseName", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Spouse Phone Number */}
      <div className="space-y-1">
         <label className="text-textGray">Spouse Phone Number :</label>
         <input
            type="text"
            placeholder="Enter Spouse Phone Number"
            value={teacherData.spouseMobile}
            onChange={(event)=> {handleChange("spouseMobile", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Spouse Phone Number */}
      <div className="space-y-1">
         <label className="text-textGray">Spouse Phone Number :</label>
         <input
            type="text"
            placeholder="Enter Spouse Phone Number"
            value={teacherData.children}
            onChange={(event)=> {handleChange("children", event)}}
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
            value={teacherData.id}
            onChange={(event)=> {handleChange("id", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Joining Date */}
      <div className="space-y-1">
         <label className="text-textGray">Joining Date :</label>
         <input
            type="date"
            value={teacherData.joiningDate}
            onChange={(event)=> {handleChange("joiningDate", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      <div className="space-y-2">
         <label className="text-textGray">Qualification</label>
         <select
         id=""
         name=""
         defaultValue="SSC"
         value={teacherData.qualification}
         onChange={(event)=> {handleChange("qualification", event)}}
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
         value={teacherData.jobType}
         onChange={(event)=> {handleChange("jobType", event)}}
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
            value={teacherData.role}
            onChange={(event)=> {handleChange("role", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

      {/* Designation */}
      <div className="space-y-1">
         <label className="text-textGray">Designation :</label>
         <input
            type="text"
            placeholder="Enter Designation"
            value={teacherData.designation}
            onChange={(event)=> {handleChange("designation", event)}}
            className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
         />
      </div>

   </div>

   <h5 className="text-textGray font-medium mt-6 mb-2">Contact Information</h5>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
      <div className="space-y-2">
         <label className="text-textGray">Permanent Address</label>
         <textarea
         rows="3"
         placeholder="Enter Your Permanent Address"
         value={teacherData.permanentAddress}
         onChange={(event)=> {handleChange("permanentAddress", event)}}
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none" />
      </div>
            
      <div className="space-y-2">
         <label className="text-textGray">Present Address</label>
         <textarea
         rows="3"
         placeholder="Enter Your Present Address"
         value={teacherData.presentAddress}
         onChange={(event)=> {handleChange("presentAddress", event)}}
         className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none" />
      </div>
   </div>

</>
    );
}