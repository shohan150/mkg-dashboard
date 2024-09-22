import TesForm from "./TesForm";
import TesTable from "./TesTable";

export default function Testimonial() {
   
    return (
      <div className="my-4 bg-white rounded-md p-4 md:p-6">
         <TesForm />

         <TesTable />
      </div>
    );
}