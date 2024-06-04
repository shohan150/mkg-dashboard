import { FaDownload } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";
import SearchPayslipTable from "../tables/SearchPayslip";

export default function SearchPayslip() {
  return (
    <div className="rounded-md text-sm bg-white">
      <SectionHeader title="Search Online Payslip" />
      <div className="p-2 sm:p-4 space-y-4">
        <h5 className="text-primary font-medium tracking-wide text-lg leading-3 pt-2">
          Student ID
        </h5>
        <div className="flex items-center gap-4">
          <input
            type="text"
            name="ID"
            id=""
            placeholder="Type Student ID"
            className="w-9/12 bg-bgGray rounded p-2 text-textBlack font-medium outline-none  border-2 border-transparent focus:border-secondary"
          />
          <button className="w-3/12 bg-red text-white p-2 tracking-wide rounded">
            Search
          </button>
        </div>

        {/* payslip table */}
        <div className="rounded">
          <h5 className="text-primary font-bold bg-bgGreen p-2">
            Payslip ID: 1234567
          </h5>
          <SearchPayslipTable />
        </div>

        {/* action buttons */}
        <div className="flex items-center justify-end gap-4">
          <FaDownload className="bg-green text-white rounded w-10 h-10 p-2" />
          <button className="rounded leading-10 px-6 bg-blue text-white font-medium tracking-wider">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
