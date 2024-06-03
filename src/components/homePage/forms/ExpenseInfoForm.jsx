import Month from "./singleField/Month";
import Year from "./singleField/Year";

export default function ExpenseInfoForm() {
  return (
    <div className="my-2 text-primary flex items-center gap-4">
      <Year style="w-1/3" />
      <Month style="w-1/3" />
      <button className="w-1/3 bg-red text-white p-2 tracking-wide rounded mt-6">
        Search
      </button>
    </div>
  );
}
