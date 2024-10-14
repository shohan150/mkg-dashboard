import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import InstituteContact from "./InstituteContact";
import InstituteInfo from "./InstituteInfo";
import InstituteProfileHeader from "./InstituteProfileHeader";

export default function InstituteProfile() {
   const {t} = useTranslation();
   
    return (
      <>
      {/* institute profile header */}
      <InstituteProfileHeader />
      <div className="md:flex gap-4">
         <InstituteContact />
         <InstituteInfo />
      </div>
      <Link to="./edit-info">
         <button className="bg-primary hover:bg-buttonHover w-full py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200 my-4 tracking-wide">
            {t("general.edit")}
         </button>
      </Link>
      </>
    );
}