
import TeacherScheduleTable from "./TeacherScheduleTable";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function TeacherSchedule() {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <div className="bg-white rounded-md px-4 py-2 my-2 sm:my-4">
      <div className="flex items-center my-4 gap-2 md:gap-4">
        <label className="w-24">{t("module.routine.select_teacher")}</label>
        <select
          id=""
          name=""
          defaultValue="Select"
          className="bg-bgGray flex-1 rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
        >
          <option value="Select" disabled>{t("module.routine.select_option")}</option>
          <option value="Jalil Ahmed">{t("module.routine.jalil_ahmed")}</option>
          <option value="Kadir Khan">{t("module.routine.kadir_khan")}</option>
          <option value="Ahmed Hasan">{t("module.routine.ahmed_hasan")}</option>
        </select>

        <button className="bg-primary hover:bg-buttonHover w-20 sm:w-28 md:w-32 ml-1 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
          {t("module.routine.submit")}
        </button>
      </div>

      <TeacherScheduleTable />
    </div>
  );
}
