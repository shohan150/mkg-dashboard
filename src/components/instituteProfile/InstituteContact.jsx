import { FaRegEnvelope, FaRegStar } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function InstituteContact() {
    return (
      <div className="md:w-1/2 p-6 bg-white rounded-md text-textGray mb-4 md:mb-0">
         <h5 className="font-medium mb-2 text-lg">Contact Information</h5>
         <div className="flex items-center gap-2 leading-9">
            <IoPerson />
            <h5 className="font-medium">Head Master:</h5>
            <h5>মেহেদি হাসান মুরাদ</h5>
         </div>
         <div className="flex items-center gap-2 leading-9">
            <MdOutlineLocalPhone />
            <h5 className="font-medium">Head Master Mobile No:</h5>
            <h5>01881211222</h5>
         </div>
         <div className="flex items-center gap-2 leading-9">
            <FaRegStar />
            <h5 className="font-medium">
            ICT Teacher / Incharge:</h5>
            <h5>None</h5>
         </div>
         <div className="flex items-center gap-2 leading-9">
            <MdOutlineLocalPhone />
            <h5 className="font-medium">Incharge Mobile:</h5>
            <h5>None</h5>
         </div>
         <div className="flex items-center gap-2 leading-9">
            <FaRegEnvelope />
            <h5 className="font-medium">Incharge Email:</h5>
            <h5>None</h5>
         </div>
         <div className="flex items-center gap-2 leading-9">
            <FaRegEnvelope />
            <h5 className="font-medium">Institute Email:</h5>
            <h5>mks@gmail.com</h5>
         </div>
      </div>
    );
}