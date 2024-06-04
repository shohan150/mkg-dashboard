import SectionHeader from "../common/SectionHeader";
import ExpenseInfoForm from "../forms/ExpenseInfoForm";
import ExpenseInfoTable from "../tables/ExpenseInfoTable";

export default function ExpenseInfo() {
  return (
    <div className="rounded-md text-sm bg-white">
      <SectionHeader title="Expense Information" />
      <div className="p-2 sm:p-4 rounded-b-md">
        <ExpenseInfoForm />
        <ExpenseInfoTable />
      </div>
    </div>
  );
}
