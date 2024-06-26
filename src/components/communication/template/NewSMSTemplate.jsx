import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewSMSTemplate() {

  const [characterCount, setCharacterCount] = useState(0);

    return (
      <div className="bg-white rounded-md p-4 md:p-6 my-4 space-y-2 text-textGray">
        <h3 className="font-medium text-lg md:text-xl">Add SMS Template</h3>

        <div className="space-y-2 py-2">
          <label className="">SMS Title</label>
          <input
            type="text"
            placeholder="Enter SMS Title"
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="">SMS Body</label>
          <textarea 
          rows="4"
          placeholder="Enter The SMS Content"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          onChange={(e)=>{setCharacterCount(e.target.value.length)}}></textarea>
        </div>

        
        <h3 className="text-end text-sm ">বি: দ্র: ইংরেজিতে ১৬০ Character এ একটি SMS এবং বাংলায় ৭০ Character এ একটি SMS ।</h3>

        <div className="flex justify-between pt-6">
         <h5>Character Count: {characterCount}</h5>
         <h5>Number of SMS: 0</h5>
        </div>

        <div className="flex justify-start items-center gap-4">
            <Link to="/communication/sms-template">
               <button className="bg-blue w-28 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
                  Save
                </button>
            </Link>

            <Link to="/communication/sms-template">
               <button className="bg-red w-28 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
                  Close
               </button>
            </Link>
         </div>

      </div>
    );
}