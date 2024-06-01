import SectionHeader from "../common/SectionHeader";
import FeeInfoForm from "../forms/FeeInfoForm";
import PaymentStatGraph from "../graphs/PaymentStat";

export default function PaymentStat() {
  return (
    <div className="rounded-md text-sm bg-white">
      <SectionHeader title="Payment Statistics" />
      <div className="p-4 rounded-b-md">
        <FeeInfoForm />

        {/* table starts from here */}
        <div className="rounded-md border border-bgGreen text-textGray">
          {/* table heading */}
          <h4 className="bg-bgGreen font-bold p-2 text-center rounded-t-md">
            Payment Due Summary
          </h4>

          <div className="flex items-center gap-2">
            {/* chart */}
            <div className="w-1/3">
              <PaymentStatGraph />
              <h3 className="text-center text-lg text-primary font-medium">
                Total Students
              </h3>
            </div>

            {/* main table */}
            <div className="w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
