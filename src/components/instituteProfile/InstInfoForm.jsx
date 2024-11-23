import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEditInstituteInfoMutation, useGetInstituteInfoQuery } from "../../redux/api/dashboardSlice";
import Error from "../common/Error";
import Loading from "../common/Loading";

export default function InstInfoForm() {
   const { t } = useTranslation();
   const [formData, setFormData] = useState({});
   const { data, error, isLoading } = useGetInstituteInfoQuery();
   const [editInstituteInfo, { isLoading: editLoading, error: editError }] = useEditInstituteInfoMutation();


   useEffect(() => {
      if(data) setFormData(data[0]);
   }, [data]);

   function handleChange(data, field) {
      setFormData({ ...formData, [field]: data.target.value });
   }

   function handleSubmit(e) {
      console.log(formData);
      
      e.preventDefault();
      editInstituteInfo(formData);
   }

    editError && console.error("eeee", editError.originalStatus, editError.status);

   if (isLoading) return <Loading />

   if (error) return <Error errorMessage={error.data} />

    return (
        <div className="my-2">
         <form className="my-4" action="" onSubmit={(e) => handleSubmit(e)}>
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
                     value={formData?.institute_id}
                     onChange={(e) => handleChange(e, "institute_id")}
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>

               {/* institute Name */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("general.institute")} {t("general.name")}</label>
                  <input
                     type="text"
                     placeholder="Enter Institute Name"
                     value={formData?.institute_name}
                     onChange={(e) => handleChange(e, "institute_name")}
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>

               {/* Gender Type */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("general.institute")} {t("module.instituteInfo.genderType")}</label>
                  <select
                     id=""
                     name=""
                     value={formData?.institute_gender_type}
                     onChange={(e) => handleChange(e, "institute_gender_type")}
                     className="bg-bgGray w-full rounded px-1 py-2 border-2 text-textGray border-transparent focus:border-primary focus:outline-none"
                  >
                     <option value="">{t("choose_gender")}</option>
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
                     value={formData?.institute_email_address}
                     onChange={(e) => handleChange(e, "institute_email_address")}
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
                     value={formData?.status}
                     onChange={(e) => handleChange(e, "status")}
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
                     value={formData?.headmaster_name}
                     onChange={(e) => handleChange(e, "headmaster_name")}
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
                              
               {/* Headmaster Mobile */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.principal")} {t("general.mobile")}</label>
                  <input
                     type="text"
                     placeholder="Enter Headmaster Mobile"
                     value={formData?.headmaster_mobile}
                     onChange={(e) => handleChange(e, "headmaster_mobile")}
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
                     value={formData?.education_board_id}
                     onChange={(e) => handleChange(e, "education_board_id")}
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
                     value={formData?.education_division_id}
                     onChange={(e) => handleChange(e, "education_division_id")}
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
                     value={formData?.education_district_id}
                     onChange={(e) => handleChange(e, "education_district_id")}
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
                     value={formData?.education_thana_id}
                     onChange={(e) => handleChange(e, "education_thana_id")}
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
                     value={formData?.institute_fb}
                     onChange={(e) => handleChange(e, "institute_fb")}
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
                                             
               {/* Youtube Link */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.youtube")} {t("general.link")}</label>
                  <input
                     type="text"
                     placeholder="Enter Youtube Link"
                     value={formData?.institute_youtube}
                     onChange={(e) => handleChange(e, "institute_youtube")}
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
                     value={formData?.institute_eiin_no}
                     onChange={(e) => handleChange(e, "institute_eiin_no")}
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* ICT Teacher / Incharge */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.ict")} {t("module.instituteInfo.incharge")}</label>
                  <input
                     type="text"
                     placeholder="Enter ICT Incharge"
                     value={formData?.ict_teacher}
                     onChange={(e) => handleChange(e, "ict_teacher")}
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* Incharge Mobile Number */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.incharge")} {t("general.mobile")}</label>
                  <input
                     type="text"
                     placeholder="Enter Incharge Mobile Number"
                     value={formData?.ict_teacher_mobile}
                     onChange={(e) => handleChange(e, "ict_teacher_mobile")}
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
               
               {/* Incharge Email Address */}
               <div className="space-y-1">
                  <label className="text-textGray">{t("module.instituteInfo.incharge")} {t("general.email")}</label>
                  <input
                     type="text"
                     placeholder="Enter Incharge Email Address"
                     value={formData?.ict_teacher_email}
                     onChange={(e) => handleChange(e, "ict_teacher_email")}
                     className="bg-bgGray text-textGray w-full rounded px-2 py-[6px] border-2 border-transparent focus:border-primary focus:outline-none"
                  />
               </div>
            </div>

            {/* action buttons */}
            <div className="flex justify-end items-center gap-4">
               <button type="submit" className="bg-blue w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
                  {editLoading ? 'Saving...' : t("general.save")}
               </button>

               <Link to="/institute-profile">
                  <button className="bg-red w-24 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
                     {t("general.cancel")}
                  </button>
               </Link>
            </div>

            {/* {editError && <p>Error: {editError.message}</p>} */}

         </form>
        </div>
    );
}