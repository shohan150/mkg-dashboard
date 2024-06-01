import SectionHeader from "../common/SectionHeader";
import FeeInfoForm from "../forms/FeeInfoForm";
import PaymentStatGraph from "../graphs/PaymentStat";
import PayStatTable from "../tables/PayStatTable";

export default function PaymentStat() {
  return (
    <div className="rounded-md text-sm bg-white">
      <SectionHeader title="Payment Statistics" />
      <div className="p-4 rounded-b-md">
        <FeeInfoForm />

        <h5 className="text-textGray text-end text-xs mt-4 mb-2">
          Total Row Found: <span className="text-green">40</span>
        </h5>

        {/* table starts from here */}
        <div className="rounded-md border border-bgGreen text-textGray">
          {/* table heading */}
          <h4 className="bg-bgGreen font-bold p-2 text-center rounded-t-md">
            Payment Due Summary
          </h4>

          <div className="flex items-center gap-2 pr-2 pb-2">
            {/* chart */}
            <div className="w-1/3">
              <PaymentStatGraph />
              <h3 className="text-center text-lg text-textBlack font-medium">
                Total Students
              </h3>
            </div>

            {/* main table */}
            <div className="w-2/3">
              <PayStatTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
