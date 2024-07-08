import { useState } from "react";
import ClassOrSection from "./ClassOrSection";

export default function SelectClassSection() {
   const [classOrSection, setClassOrSection] = useState("Select Class/Section")
    return (
   <>
      <div className="space-y-2">
         <label className="w-28 md:max-lg:w-32">Select Class/Section </label>
         <select
         id=""
         name=""
         value={classOrSection}
         onChange={(e)=>setClassOrSection(e.target.value)}
         className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
         >
         <option value="Select Class/Section" disabled>Select Class/Section</option>
         <option value="Class">Class</option>
         <option value="Section">Section</option>
         <option value="All">All</option>
         </select>
      </div>

      <ClassOrSection classOrSection={classOrSection} />

    </>
    );
}