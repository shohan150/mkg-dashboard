import { useTranslation } from "react-i18next";

export default function ReturnFeeTable({ handleDelete }) {
    const { t } = useTranslation();

    const data = [
        {
            fee_name: "September Month Fee",
            amount: 500,
            discount: 100,
            status: "paid",
        },
        {
            fee_name: "September Month Fee",
            amount: 500,
            discount: 100,
            status: "paid",
        },
    ];

    return (
        <div className="border my-6 rounded shadow-md">
            <table className="w-full text-textGray text-sm leading-6 sm:leading-8">
                <thead className="border-b-2 bg-bgBlue">
                    <tr>
                        <th className="w-1/12">{t("feeModule.serial")}</th>
                        <th className="w-2/12">{t("feeModule.fee_name")}</th>
                        <th className="w-2/12">{t("feeModule.amount")}</th>
                        <th className="w-2/12">{t("feeModule.discount")}</th>
                        <th className="w-2/12">{t("feeModule.final_amount")}</th>
                        <th className="w-1/12">{t("feeModule.status")}</th>
                        <th className="w-2/12">{t("feeModule.action")}</th>
                    </tr>
                </thead>
                <tbody className="divide-y-2 font-medium">
                    {data.map((item, index) => (
                        <tr key={index} className="text-center">
                            <td className="w-1/12">{index + 1}</td>
                            <td className="w-2/12">{item.fee_name}</td>
                            <td className="w-2/12">{item.amount}</td>
                            <td className="w-2/12">{item.discount}</td>
                            <td className="w-2/12">{item.amount - item.discount}</td>
                            <td className="w-1/12">{item.status}</td>
                            <td className="w-2/12 pb-1">
                                <button
                                    className="bg-white border-red px-3 py-1 rounded shadow text-red border hover:-translate-y-[2px] duration-200 text-sm m-1"
                                    onClick={() => handleDelete(item.fee_name)}
                                >
                                    {t("feeModule.mark_as_unpaid")}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
