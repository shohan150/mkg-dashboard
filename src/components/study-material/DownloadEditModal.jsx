import Modal from "../common/Modal";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function DownloadEditModal({ editContent, setEditContent, isEdit, onClose }) {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">{t("study_material.title")}</h2> {/* Use translation key */}
      <div className="my-8 space-y-2">
        <div className="space-y-2">
          <label>{t("study_material.title_label")}</label> {/* Use translation key */}
          <input
            type="text"
            placeholder={t("study_material.title_label")} // Use translation key for placeholder if needed
            value={editContent.name}
            onChange={(e) => setEditContent({ ...editContent, name: e.target.value })}
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label>{t("study_material.class_label")}</label> {/* Use translation key */}
          <input
            type="text"
            placeholder={t("study_material.class_label")} // Use translation key for placeholder if needed
            value={editContent.class}
            onChange={(e) => setEditContent({ ...editContent, class: e.target.value })}
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label>{t("study_material.document_type_label")}</label> {/* Use translation key */}
          <input
            type="text"
            placeholder={t("study_material.document_type_label")} // Use translation key for placeholder if needed
            value={editContent.type}
            onChange={(e) => setEditContent({ ...editContent, type: e.target.value })}
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label>{t("study_material.upload_file_label")}</label> {/* Use translation key */}
          <input
            type="file"
            onChange={(e) => setEditContent({ ...editContent, file: e.target.files[0] })}
            className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none"
          />
        </div>
      </div>
    </Modal>
  );
}
