import { Link } from "react-router-dom";
import InstituteContact from "./InstituteContact";
import InstituteInfo from "./InstituteInfo";
import InstituteProfileHeader from "./InstituteProfileHeader";

export default function InstituteProfile() {
    return (
      <>
      {/* institute profile header */}
      <InstituteProfileHeader />
      <div className="md:flex gap-4">
         <InstituteContact />
         <InstituteInfo />
      </div>
      <Link to="./edit_info">
         <button className="bg-primary hover:bg-buttonHover w-full py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200 my-4 tracking-wide">
            EDIT
         </button>
      </Link>
      </>
    );
}