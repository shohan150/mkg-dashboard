import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetInstituteInfoQuery } from "../../redux/api/dashboardSlice.js";
import Error from "../common/Error.jsx";
import Loading from "../common/Loading.jsx";
import InstituteContact from "./InstituteContact";
import InstituteInfo from "./InstituteInfo";
import InstituteProfileHeader from "./InstituteProfileHeader";

export default function InstituteProfile() {
   const {t} = useTranslation();

   const { data, error, isLoading } = useGetInstituteInfoQuery();

   console.log(data);

   console.log(error);
   
   
   if(error) return <Error code={error.originalStatus} errorMessage={error.status}/>;

   if(isLoading) return <Loading />;
   
    return (
      <>
      {/* institute profile header */}
      <InstituteProfileHeader data={data[0]} />
      <div className="md:flex gap-4">
         <InstituteContact data={data[0]} />
         <InstituteInfo data={data[0]} />
      </div>
      <Link to="./edit-info">
         <button className="bg-primary hover:bg-buttonHover w-full py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200 my-4 tracking-wide">
            {t("general.edit")}
         </button>
      </Link>
      </>
    );
}