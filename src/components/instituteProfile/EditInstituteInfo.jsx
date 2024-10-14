import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import InstInfoForm from "./InstInfoForm";

export default function EditInstituteInfo() {
   const { t } = useTranslation();
    return (
        <div className="bg-white p-6 md:py-7 md:px-10 rounded-md my-4">
         <h5 className=" text-textGray font-medium text-xl">{t("general.institute")} {t("general.information")}</h5>

         {/* main form */}
         <InstInfoForm />

         {/* action buttons */}
         <div className="flex justify-end items-center gap-4">
            <Link to="/institute-profile">
               <button className="bg-blue w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
                  {t("general.save")}
                </button>
            </Link>

            <Link to="/institute-profile">
               <button className="bg-red w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
                  {t("general.cancel")}
               </button>
            </Link>
         </div>
        </div>
    );
}