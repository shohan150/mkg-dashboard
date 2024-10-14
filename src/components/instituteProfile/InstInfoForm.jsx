import { useTranslation } from "react-i18next";

export default function InstInfoForm() {
   const { t } = useTranslation();
    return (
        <div className="my-2">
         <form className="my-4" action="">
            {/* basic info form */}
            <h5 className="font-medium bg-bgBlue rounded py-1 px-2 text-xs tracking-wide inline text-blue">{t("module.instituteInfo.basic")} {t("general.information")}</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 mb-6">
               {/* institution logo */}
               <div className="space-y-1">
                  <label className="text-textGray" htmlFor="">{t("module.instituteInfo.logo")}</label>
                  <input className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file"/>
               </div>

               {/* institute id */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("general.institute")} {t("general.id")}</label>
                  <input
                     type="text"
                     placeholder="Enter Institute ID"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>

               {/* institute Name */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("general.institute")} {t("general.name")}</label>
                  <input
                     type="text"
                     placeholder="Enter Institute Name"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>

               {/* Gender Type */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("general.institute")} {t("module.instituteInfo.genderType")}</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Combined"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Combined">{t("general.combined")}</option>
                     <option value="Boys">{t("general.boys")}</option>
                     <option value="Girls">{t("general.girls")}</option>
                  </select>
               </div>
               
               {/* Institute Email */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("general.institute")} {t("general.email")}</label>
                  <input
                     type="text"
                     placeholder="Enter Institute Email"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* Status */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("general.status")}</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Active"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Active">{t("general.active")}</option>
                     <option value="Deactive">{t("general.deactive")}</option>
                  </select>
               </div>
                              
               {/* Headmaster Name */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.principal")}</label>
                  <input
                     type="text"
                     placeholder="Enter Headmaster Name"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
                              
               {/* Headmaster Mobile */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.principal")} {t("general.mobile")}</label>
                  <input
                     type="text"
                     placeholder="Enter Headmaster Mobile"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
                              
               {/* Education Board */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("general.education")} {t("module.instituteInfo.board")}</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Dhaka"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Dhaka">Dhaka</option>
                     <option value="Rangpur">Rangpur</option>
                     <option value="Shylet">Shylet</option>
                     <option value="Chittagong">Chittagong</option>
                     <option value="Rajshahi">Rajshahi</option>
                     <option value="Khulna">Khulna</option>
                  </select>
               </div>
                              
               {/* Education Division */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.division")}</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Dhaka"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Dhaka">Dhaka</option>
                     <option value="Rangpur">Rangpur</option>
                     <option value="Shylet">Shylet</option>
                     <option value="Chittagong">Chittagong</option>
                     <option value="Rajshahi">Rajshahi</option>
                     <option value="Khulna">Khulna</option>
                  </select>
               </div>
                              
               {/* Education District */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.district")}</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Dhaka"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Dhaka">Dhaka</option>
                     <option value="Gazipur">Gazipur</option>
                  </select>
               </div>
                              
               {/* Institute Upzilla/Thana */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.thana")}</label>
                  <select
                     id=""
                     name=""
                     defaultValue="Mirpur"
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="Mirpur">Mirpur</option>
                     <option value="Pallabi">Pallabi</option>
                     <option value="Uttara">Uttara</option>
                     <option value="Kamalapur">Kamalapur</option>
                  </select>
               </div>
                                             
               {/* Facebook Link */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.facebook")} {t("general.link")}</label>
                  <input
                     type="text"
                     placeholder="Enter Facebook Link"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
                                             
               {/* Youtube Link */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.youtube")} {t("general.link")}</label>
                  <input
                     type="text"
                     placeholder="Enter Youtube Link"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
            </div>


            {/* contact info form */}
            <h5 className="font-medium bg-bgBlue rounded py-1 px-2 text-xs tracking-wide inline text-blue">{t("general.contact02")} {t("general.information")}</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 mb-6">
               
               {/* Institute EIIN No */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("general.institute")} {t("module.instituteInfo.eiin")}</label>
                  <input
                     type="text"
                     placeholder="Enter Institute EIIN No"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* ICT Teacher / Incharge */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.ict")} {t("module.instituteInfo.incharge")}</label>
                  <input
                     type="text"
                     placeholder="Enter ICT Incharge"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* Incharge Mobile Number */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.incharge")} {t("general.mobile")}</label>
                  <input
                     type="text"
                     placeholder="Enter Incharge Mobile Number"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* Incharge Email Address */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.incharge")} {t("general.email")}</label>
                  <input
                     type="text"
                     placeholder="Enter Incharge Email Address"
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
            </div>
         </form>
        </div>
    );
}