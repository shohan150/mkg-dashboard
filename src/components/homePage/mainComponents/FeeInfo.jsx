import SectionHeader from "../common/SectionHeader";
import FeeInfoForm from "../forms/FeeInfoForm";
import FeeInfoTable from "../tables/FeeInfoTable";

export default function FeeInfo() {
  return (
    <div className="rounded-md text-sm bg-white">
      <SectionHeader title="Fees Information" />
      <div className="p-2 sm:p-4 rounded-b-md">
        <FeeInfoForm />
        <FeeInfoTable />
      </div>
    </div>
  );
}
