import { useState } from "react";
import DynamicFields from "./DynamicFields";

export default function TesSettings() {

    const [tesFormat, setTesFormat] = useState({
        header : "Testimonial",
        body: "I testify that he is a good student",
        subBody: "He is a good boy",
        footer: "He is elgible for the application",
        signature: "Headmaster"
     })
     
    function handleChange(val, property) {
        setTesFormat({...tesFormat, [property]: val});
    }

    return (
    <div className="my-4 bg-white rounded-md p-4 md:p-6 space-y-3">
        <img src="/images/testmonialsample.jpg" alt="Testimonial Structure" className="w-full sm:w-2/3 m-auto mb-5" />
        
        <DynamicFields />

        
        <div className="space-y-1">
            <label className="text-lg leading-8">Header :</label>
            <input
            type="text"
            placeholder="Enter Document Header"
            value={tesFormat.header}
            onChange={(e) => handleChange(e.target.value, "header")}
            className="bg-bgGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
            />
        </div>

        <div className="space-y-1">
            <label className="text-lg leading-8">Body :</label>
            <textarea
            placeholder="Enter Document Body"
            rows="5"
            value={tesFormat.body}
            onChange={(e) => handleChange(e.target.value, "body")}
            className="bg-bgGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"></textarea>
        </div>
        
        <div className="space-y-1">
            <label className="text-lg leading-8">Subbody :</label>
            <textarea
            placeholder="Enter Document Subbody"
            value={tesFormat.subBody}
            onChange={(e) => handleChange(e.target.value, "subBody")}
            className="bg-bgGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"></textarea>
        </div>

        <div className="space-y-1">
            <label className="text-lg leading-8">Footer :</label>
            <textarea
            placeholder="Enter Document Footer"
            value={tesFormat.footer}
            onChange={(e) => handleChange(e.target.value, "footer")}
            className="bg-bgGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"></textarea>
        </div>

        <div className="space-y-1">
         <label className="text-lg">Status</label>
         <select
         id=""
         name=""
         className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
         >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
         </select>
      </div>

      
      <div className="space-y-1">
            <label className="text-lg leading-8">Signature Name:</label>
            <textarea
            placeholder="Enter Document Signature"
            value={tesFormat.signature}
            onChange={(e) => handleChange(e.target.value, "signature")}
            className="bg-bgGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"></textarea>
        </div>

        <div className="space-y-1">
         <label className="text-lg" htmlFor="">Signature</label>
         <input className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file" />
      </div>


        {/* action buttons */}
        <div className="flex justify-end items-center space-x-2 xl:space-x-3 pt-4">
            <button
            className="bg-blue px-4 py-2 lg:px-6 lg:text-lg rounded shadow text-white hover:-translate-y-[2px] duration-200"
            >
                Submit
            </button>
            <button
            className="bg-red px-4 py-2 lg:px-6 lg:text-lg rounded shadow text-white hover:-translate-y-[2px] duration-200"
            >
                Cancel
            </button>
        </div>
    </div>

    );
}