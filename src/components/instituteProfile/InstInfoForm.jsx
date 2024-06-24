export default function InstInfoForm() {
    return (
        <div className="my-2">
         <form className="my-4" action="">
            {/* basic info form */}
            <h5 className="font-medium bg-bgBlue rounded py-1 px-2 text-xs tracking-wide inline text-blue">BASIC INFORMATION</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 mb-6">
               {/* institution logo */}
               <div className="space-y-1">
                  <label className="text-textGray" htmlFor="">Institution Logo</label>
                  <input className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file"/>
               </div>

               {/* institute id */}
               <div className="space-y-1">
                  <label className="text-textGray">Institute ID</label>
                  <input
                     type="text"
                     placeholder="Enter Institute ID"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>

               {/* institute Name */}
               <div className="space-y-1">
                  <label className="text-textGray">Institute Name</label>
                  <input
                     type="text"
                     placeholder="Enter Institute Name"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>

               {/* Gender Type */}
               <div className="space-y-1">
                  <label className="text-textGray">Institute Gender Type</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Combined"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Combined">Combined</option>
                     <option value="Boys">Boys</option>
                     <option value="Girls">Girls</option>
                  </select>
               </div>
               
               {/* Institute Email */}
               <div className="space-y-1">
                  <label className="text-textGray">Institute Email</label>
                  <input
                     type="text"
                     placeholder="Enter Institute Email"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* Status */}
               <div className="space-y-1">
                  <label className="text-textGray">Status</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Active"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Active">Active</option>
                     <option value="Deactive">Deactive</option>
                  </select>
               </div>
                              
               {/* Headmaster Name */}
               <div className="space-y-1">
                  <label className="text-textGray">Headmaster Name</label>
                  <input
                     type="text"
                     placeholder="Enter Headmaster Name"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
                              
               {/* Headmaster Mobile */}
               <div className="space-y-1">
                  <label className="text-textGray">Headmaster Mobile</label>
                  <input
                     type="text"
                     placeholder="Enter Headmaster Mobile"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
                              
               {/* Education Board */}
               <div className="space-y-1">
                  <label className="text-textGray">Education Board</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Dhaka"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Dhaka">Dhaka</option>
                     <option value="Rangpur">Rangpur</option>
                     <option value="Shylet">Shylet</option>
                     <option value="Chittagong">Chittagong</option>
                     <option value="Rajshahi">Rajshahi</option>
                     <option value="Khulna">Khulna</option>
                  </select>
               </div>
                              
               {/* Education Division */}
               <div className="space-y-1">
                  <label className="text-textGray">Education Division</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Dhaka"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Dhaka">Dhaka</option>
                     <option value="Rangpur">Rangpur</option>
                     <option value="Shylet">Shylet</option>
                     <option value="Chittagong">Chittagong</option>
                     <option value="Rajshahi">Rajshahi</option>
                     <option value="Khulna">Khulna</option>
                  </select>
               </div>
                              
               {/* Education District */}
               <div className="space-y-1">
                  <label className="text-textGray">Education District</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Dhaka"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Dhaka">Dhaka</option>
                     <option value="Gazipur">Gazipur</option>
                  </select>
               </div>
                              
               {/* Institute Upzilla/Thana */}
               <div className="space-y-1">
                  <label className="text-textGray">Institute Upzilla/Thana</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Mirpur"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Mirpur">Mirpur</option>
                     <option value="Pallabi">Pallabi</option>
                     <option value="Uttara">Uttara</option>
                     <option value="Kamalapur">Kamalapur</option>
                  </select>
               </div>
                                             
               {/* Facebook Link */}
               <div className="space-y-1">
                  <label className="text-textGray">Facebook Link</label>
                  <input
                     type="text"
                     placeholder="Enter Facebook Link"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
                                             
               {/* Youtube Link */}
               <div className="space-y-1">
                  <label className="text-textGray">Youtube Link</label>
                  <input
                     type="text"
                     placeholder="Enter Youtube Link"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
            </div>


            {/* contact info form */}
            <h5 className="font-medium bg-bgBlue rounded py-1 px-2 text-xs tracking-wide inline text-blue">CONTACT INFORMATION</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 mb-6">
               
               {/* Institute EIIN No */}
               <div className="space-y-1">
                  <label className="text-textGray">Institute EIIN No</label>
                  <input
                     type="text"
                     placeholder="Enter Institute EIIN No"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* ICT Teacher / Incharge */}
               <div className="space-y-1">
                  <label className="text-textGray">ICT Teacher / Incharge</label>
                  <input
                     type="text"
                     placeholder="Enter ICT Teacher / Incharge"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* Incharge Mobile Number */}
               <div className="space-y-1">
                  <label className="text-textGray">Incharge Mobile Number</label>
                  <input
                     type="text"
                     placeholder="Enter Incharge Mobile Number"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* Incharge Email Address */}
               <div className="space-y-1">
                  <label className="text-textGray">Incharge Email Address</label>
                  <input
                     type="text"
                     placeholder="Enter Incharge Email Address"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
            </div>
         </form>
        </div>
    );
}