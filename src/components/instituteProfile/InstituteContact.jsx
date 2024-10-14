import { useTranslation } from "react-i18next";
import { FaRegEnvelope, FaRegStar } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function InstituteContact() {
   const {t} = useTranslation();

    return (
      <div className="md:w-1/2 p-6 bg-white rounded-md text-textGray mb-4 md:mb-0">
         <h5 className="font-medium mb-2 text-lg">{t("general.contact02")} {t("general.information")}</h5>
         <div className="flex items-center gap-2 leading-9">
            <IoPerson />
            <h5 className="font-medium">{t("module.instituteInfo.principal")}:</h5>
            <h5>{t("module.instituteInfo.principalName")}</h5>
         </div>
         <div className="flex items-center gap-2 leading-9">
            <MdOutlineLocalPhone />
            <h5 className="font-medium">{t("module.instituteInfo.principal")} {t("general.mobile")}:</h5>
            <h5>{t("module.instituteInfo.principalMobile")}</h5>
         </div>
         <div className="flex items-center gap-2 leading-9">
            <FaRegStar />
            <h5 className="font-medium">
               {t("module.instituteInfo.incharge")}:</h5>
            <h5>{t("module.instituteInfo.inchargeName")}</h5>
         </div>
         <div className="flex items-center gap-2 leading-9">
            <MdOutlineLocalPhone />
            <h5 className="font-medium">{t("module.instituteInfo.incharge")} {t("general.mobile")}:</h5>
            <h5>{t("module.instituteInfo.inchargeMobile")}</h5>
         </div>
         <div className="flex items-center gap-2 leading-9">
            <FaRegEnvelope />
            <h5 className="font-medium">{t("module.instituteInfo.incharge")} {t("general.email")}:</h5>
            <h5>incharge22@gmail.com</h5>
         </div>
         <div className="flex items-center gap-2 leading-9">
            <FaRegEnvelope />
            <h5 className="font-medium">{t("module.instituteInfo.incharge")} {t("general.email")}:</h5>
            <h5>urbanschool@gmail.com</h5>
         </div>
      </div>
    );
}