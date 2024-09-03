import { AiOutlineRise } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import instituteCover from "/images/institute-cover.png";
import instituteLogo from "/images/institute-logo.png";

export default function InstituteProfileHeader() {
    return (
      <div className="my-4 shadow-lg">
      <div className="rounded-md bg-white">
         {/* cover image */}
         <img src={instituteCover} alt="Institute Cover Image" className="object-cover rounded-t-md" />
         {/* header content */}
         <div className="flex p-4 md:p-6 gap-2 md:gap-4">
            {/* logo */}
            <img src={instituteLogo} alt="" className="w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 object-contain border-4 rounded-md p-2 -mt-12 md:-mt-16" />
            {/* header info */}
            <div className="flex-1 md:flex items-end justify-between">
               <div className="space-y-2 md:space-y-4">
                  <h4 className="text-xl md:text-2xl text-primary font-medium">Urban International School</h4>
                  <div className="flex gap-4">
                     <div className="text-secondary flex items-center gap-1">
                     <IoPersonCircleOutline/>
                     <h6 className="pt-[2px]">Combined School</h6>
                     </div>
                     <div className="text-secondary flex items-center gap-1">
                     <MdOutlineLocationOn /> 
                     <h6 className="pt-[2px]">Ulipur, Kurigram</h6>
                     </div>
                  </div>
               </div>
               <button className="bg-primary hover:bg-buttonHover w-24 md:w-28 h-10 md:h-11 rounded shadow text-white hover:-translate-y-[2px] duration-200 mt-4">
                  <AiOutlineRise className="inline mr-1 md:mr-2"/>
                  Active
               </button>
            </div>
         </div>
      </div>

     </div>
    );
}