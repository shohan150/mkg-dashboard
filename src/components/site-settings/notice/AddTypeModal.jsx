import { useTranslation } from "react-i18next";
import Modal from "../../common/Modal";

export default function AddTypeModal({ isAdd, onClose }) {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">{t("module.report.addNotice")}</h2>
      <div className="mt-2 mb-4 space-y-2">
        <div className="space-y-1">
          <label className="text-textGray">{t("module.report.date")}</label>
          <input
            type="date"
            placeholder={t("module.report.enterDate")}
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">{t("module.report.noticeTitle")}</label>
          <input
            type="text"
            placeholder={t("module.report.enterNoticeTitle")}
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">{t("module.report.noticeDetails")}</label>
          <textarea
            placeholder={t("module.report.enterNoticeDetails")}
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">{t("module.report.expireDate")}</label>
          <input
            type="date"
            placeholder={t("module.report.enterExpireDate")}
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">{t("module.report.fileAttached")}</label>
          <input
            type="file"
            className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none"
          />
        </div>
      </div>
    </Modal>
  );
}
