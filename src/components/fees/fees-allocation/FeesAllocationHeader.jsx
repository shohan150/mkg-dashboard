import { useTranslation } from "react-i18next";

const FeesAllocationHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center">
      <h3 className="text-2xl font-medium">{t("feeModule.create_fee")}</h3>
      <button
        type="submit"
        className="rounded w-20 p-2 bg-secondary hover:bg-buttonHover text-white shadow-md hover:-translate-y-[2px] duration-200 flex items-center justify-center gap-2"
      >
        {t("feeModule.list_fee")}
      </button>
    </div>
  );
};

export default FeesAllocationHeader;
