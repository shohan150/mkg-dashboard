import AdmitHeader from "./AdmitHeader";
import AllAdmitCards from "./AllAdmitCards";

export default function AdmitCard() {
   return (
     <div className="bg-white rounded-md px-4 py-2 my-2 sm:my-4">
      <AdmitHeader />
      
      <AllAdmitCards />
     </div>
   );
}