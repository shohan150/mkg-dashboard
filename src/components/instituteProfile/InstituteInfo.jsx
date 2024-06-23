import { GoDotFill } from "react-icons/go";

export default function InstituteInfo() {
    return (
      <div className="md:w-1/2 p-6 bg-white rounded-md text-textGray">
         <h5 className="font-medium mb-2 text-lg">Institute Information</h5>
         <div className="flex items-center gap-2 leading-7">
            <GoDotFill className="text-xs"/>
            <h5 className="font-medium">Institute Id:</h5>
            <h5>562101</h5>
         </div>
         <div className="flex items-center gap-2 leading-7">
            <GoDotFill className="text-xs"/>
            <h5 className="font-medium">Institute EIIN No:</h5>
            <h5>260109</h5>
         </div>
         <div className="flex items-center gap-2 leading-7">
            <GoDotFill className="text-xs"/>
            <h5 className="font-medium">Institute Name:</h5>
            <h5>MKS International</h5>
         </div>
         <div className="flex items-center gap-2 leading-7">
            <GoDotFill className="text-xs"/>
            <h5 className="font-medium">Institute Board:</h5>
            <h5>Rangpur</h5>
         </div>
         <div className="flex items-center gap-2 leading-7">
            <GoDotFill className="text-xs"/>
            <h5 className="font-medium">Institute Division:</h5>
            <h5>Rangpur</h5>
         </div>
         <div className="flex items-center gap-2 leading-7">
            <GoDotFill className="text-xs"/>
            <h5 className="font-medium">Institute District:</h5>
            <h5>Kurigram</h5>
         </div>
         <div className="flex items-center gap-2 leading-7">
            <GoDotFill className="text-xs"/>
            <h5 className="font-medium">Institute Thana/Upazila:</h5>
            <h5>Ulipur</h5>
         </div>
         <div className="flex items-center gap-2 leading-7">
            <GoDotFill className="text-xs"/>
            <h5 className="font-medium">Institute Status:</h5>
            <h5>Active</h5>
         </div>
      </div>
    );
}