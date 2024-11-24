import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAddAcademicInfoMutation } from "../../../redux/api/settingsSlice";
import ErrorSmall from "../../common/ErrorSmall";
import ProcessingSmall from "../../common/ProcessingSmall";


export default function AcademicSetupForm() {
  const { t } = useTranslation();

  const [selectedType, setSelectedType] = useState("student-class");
  const [typeValue, setTypeValue] = useState("");
  const [editStudentClass, {isLoading, error}] = useAddAcademicInfoMutation();

  function handleSubmit(e) {
    e.preventDefault();
    setSelectedType("");
    setTypeValue("");
    editStudentClass({selectedType, typeValue});
  }

  return (
    <div className="bg-white rounded-md px-4 py-2 my-2 sm:my-4">
      <form className="md:flex gap-7 items-center justify-between" onSubmit={handleSubmit}>
        {/* select what type of data to entry */}
        {/* select field */}
        <div className="flex items-center gap-2 md:w-5/12 my-2">
          <label className="w-28 md:max-lg:w-32">{t('module.settings.select_type')}</label>
          <select
            id=""
            name=""
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
          >
            <option value="student-class">Class</option>
            <option value="subject">Subject</option>
            <option value="stu-group">Group</option>
            <option value="student-section">Section</option>
            <option value="student-shift">Shift</option>
            <option value="period">Period</option>
            <option value="admission-year">Session</option>
          </select>
        </div>

        <div className="flex items-center gap-2 md:w-5/12 my-2">
          <label className="w-28 md:max-lg:w-32">{t('module.settings.type_name')}</label>
          <input
            type="text"
            placeholder="Enter Item Name"
            value={typeValue}
            onChange={(e) => setTypeValue(e.target.value)}
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        {/* create button */}
        <div className="flex items-center gap-2 md:w-2/12 justify-end my-4">
          <button
            type="submit"
            className="rounded w-full p-3 bg-primary hover:bg-buttonHover text-white shadow-md hover:-translate-y-[2px] duration-200"
          >
            {t('module.settings.create')}
          </button>
        </div>
      </form>

      {isLoading && <ProcessingSmall />}
      {error && <ErrorSmall errorMessage={error.message} /> }
    </div>
  );
}
