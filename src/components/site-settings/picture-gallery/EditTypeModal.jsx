import { useTranslation } from "react-i18next";
import Modal from "../../common/Modal";

export default function EditTypeModal({ editContent, setEditContent, isEdit, onClose }) {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      <h2 className="text-2xl">{t("module.report.editGalleryImage")}</h2>

      <div className="mt-2 mb-4 space-y-2">
        <div className="space-y-1">
          <label className="text-textGray">{t("module.report.galleryImage")}</label>
          <input
            type="file"
            value={editContent?.image}
            onChange={(e) => setEditContent({ ...editContent, image: e.target.value })}
            className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">{t("module.report.imageTitle")}</label>
          <input
            type="text"
            placeholder={t("module.report.imageTitle")}
            value={editContent?.title}
            onChange={(e) => setEditContent({ ...editContent, title: e.target.value })}
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">{t("module.report.status")}</label>
          <select
            value={editContent?.status}
            onChange={(e) => setEditContent({ ...editContent, status: e.target.value })}
            className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
          >
            <option value="Active">{t("module.report.active")}</option>
            <option value="Inactive">{t("module.report.inactive")}</option>
          </select>
        </div>
      </div>
    </Modal>
  );
}
