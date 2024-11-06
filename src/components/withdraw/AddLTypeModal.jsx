import { useTranslation } from "react-i18next";
import Modal from "../common/Modal";

export default function AddLTypeModal({ isAdd, onClose }) {
    const { t } = useTranslation();

    return (
        <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
            {/* modal content */}
            <h2 className="text-2xl">{t("module.income.addWithdrawEntry")}</h2>
            <div className="my-8 space-y-2">
                <div className="space-y-2">
                    <h5 className="">{t("module.income.withdrawnAmount")} :</h5>
                    <input
                        type="number"
                        placeholder={t("module.income.pleaseTypeAmount")}
                        className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <h5 className="">{t("module.income.receivedBy")} :</h5>
                    <input
                        type="text"
                        placeholder={t("module.income.pleaseTypeName")}
                        className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <h5 className="">{t("module.income.note")} :</h5>
                    <input
                        type="text"
                        placeholder={t("module.income.writeDescription")}
                        className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
                    />
                </div>
            </div>  
        </Modal>
    );
}
