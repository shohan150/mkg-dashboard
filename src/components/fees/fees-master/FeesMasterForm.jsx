import AssignFeeByMonth from "./AssignFeeByMonth";
import AssignedFees from "./AssignedFees";
import { useTranslation } from "react-i18next";

const FeesMasterForm = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2 flex flex-col">
          <label className="">{t("feeModule.fee_type")}</label>
          <div className="relative">
            <select
              className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
              defaultValue="0"
              name="fee_type"
              id="fee_type"
            >
              <option value="0">{t("feeModule.select_one")}</option>
              <option value="1">{t("feeModule.coaching_fee")}</option>
              <option value="2">{t("feeModule.transport_fee")}</option>
              <option value="3">{t("feeModule.hostel_fee")}</option>
              <option value="4">{t("feeModule.monthly_fee")}</option>
              <option value="5">{t("feeModule.test_exam")}</option>
              <option value="6">{t("feeModule.semester_exam")}</option>
              <option value="7">{t("feeModule.admission_fee")}</option>
              <option value="8">{t("feeModule.stationary_fee")}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="">{t("feeModule.select_class")}</label>
          <div className="relative">
            <select
              className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
              defaultValue="0"
              name="class"
              id="class"
            >
              <option value="0">{t("feeModule.select_one")}</option>
              <option value="1">{t("feeModule.one")}</option>
              <option value="2">{t("feeModule.two")}</option>
              <option value="3">{t("feeModule.three")}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-5">
        <AssignFeeByMonth />
        <AssignedFees />
      </div>
      <button
        type="submit"
        className="rounded mt-4 w-20 p-2 bg-primary hover:bg-buttonHover text-white shadow-md hover:-translate-y-[2px] duration-200 flex items-center justify-center gap-2"
      >
        {t("feeModule.submit")}
      </button>
    </div>
  );
};

export default FeesMasterForm;
