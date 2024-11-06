import { useTranslation } from "react-i18next";
import Modal from "../../common/Modal";

export default function FeeAmountAddModal({ isAdd, onClose }) {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">{t("feeModule.add_fee_amount")}</h2>
      <div className="my-8 space-y-3">
        <div className="space-y-2">
          <label>{t("feeModule.class")}</label>
          <select
            className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            defaultValue="1"
            name="status"
            id="status"
          >
            <option value="1">{t("feeModule.one")}</option>
            <option value="0">{t("feeModule.two")}</option>
          </select>
        </div>
        <div className="space-y-2">
          <label>{t("feeModule.fee_type")}</label>
          <select
            className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            defaultValue="0"
            name="fee_type"
            id="fee_type"
          >
            <option value="0">{t("feeModule.select_fee_type")}</option>
            <option value="12">{t("feeModule.annually")}</option>
            <option value="6">{t("feeModule.bi_annually")}</option>
            <option value="4">{t("feeModule.tri_annually")}</option>
            <option value="3">{t("feeModule.quarterly")}</option>
            <option value="2">{t("feeModule.two_monthly")}</option>
            <option value="1">{t("feeModule.monthly")}</option>
          </select>
        </div>

        <div className="space-y-2">
          <label>{t("feeModule.amount")}</label>
          <input
            type="number"
            placeholder={t("feeModule.amount")}
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label>{t("feeModule.admission_year")}</label>
          <select
            className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            defaultValue="2024"
            name="admission_year"
            id="admission_year"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    </Modal>
  );
}
