import { useTranslation } from "react-i18next";
import academicSetupList from "../../../data/academicSetupList";

export default function TeacherSubjectAssign() {
  const { t } = useTranslation();

  return (
    <div className="bg-white px-4 py-6 rounded mt-4">
      {/* select a particular class */}
      <div className="flex items-center">
        <label className="w-24 sm:w-28 md:w-32">{t("module.settings.teacher_name")}: </label>
        <select
          id=""
          name=""
          defaultValue="select"
          className="bg-bgGray flex-1 rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
        >
          <option value="select" disabled="true">
            {t("module.settings.select_teacher")}
          </option>
          {academicSetupList[7].content.map((singleClass, index) => (
            <option value="" key={index}>
              {singleClass.info}
            </option>
          ))}
        </select>
      </div>

      <h3 className="text-primary text-lg font-semibold mt-6 mb-2">{t("module.settings.select_class")}</h3>
      {/* show all subjects */}
      <div className="grid grid-cols-3 sm:grid-cols-5">
        {academicSetupList[0].content.map((singleSubject, index) => (
          <div key={index} className="space-x-2 border-b-2 py-3">
            <input
              type="checkbox"
              id=""
              name=""
              value="hi"
              className="text-primary"
            ></input>
            <label htmlFor="vehicle1">{singleSubject.info}</label>
          </div>
        ))}
      </div>

      <h3 className="text-primary text-lg font-semibold mt-6 mb-2">{t("module.settings.select_subject")}</h3>
      {/* show all subjects */}
      <div className="grid grid-cols-3 sm:grid-cols-5 mb-6">
        {academicSetupList[2].content.map((singleSubject, index) => (
          <div key={index} className="space-x-2 border-b-2 py-3">
            <input
              type="checkbox"
              id=""
              name=""
              value="hi"
              className="text-primary"
            ></input>
            <label htmlFor="vehicle1">{singleSubject.info}</label>
          </div>
        ))}
      </div>

      {/* save button */}
      <button className="bg-primary hover:bg-buttonHover px-6 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
        {t("module.settings.save")}
      </button>
    </div>
  );
}
