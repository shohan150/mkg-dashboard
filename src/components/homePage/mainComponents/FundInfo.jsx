import SectionHeader from "../common/SectionHeader";
import FundInfoForm from "../forms/FundInfoForm";
import FundInfoTable from "../tables/FundInfoTable";

export default function FundInfo() {
  return (
    <div className="rounded-md text-sm bg-white">
      <SectionHeader title="Fund Information" />
      <div className="p-4 rounded-b-md">
        <FundInfoForm />
        <FundInfoTable />
      </div>
    </div>
  );
}
