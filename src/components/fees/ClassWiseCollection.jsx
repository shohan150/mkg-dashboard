import { useTranslation } from "react-i18next";
import FeesAllocationForm from "./fees-allocation/FeesAllocationForm";

const ClassWiseCollection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-md p-4 md:p-6  my-4">
      <h3 className="text-2xl font-medium">{t("module.fees.create_fee")}</h3>
      <FeesAllocationForm />
    </div>
  );
};

export default ClassWiseCollection;
