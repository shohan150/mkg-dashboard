import academicSetupList from "../data/academicSetupList";

export default function SubjectAssign() {
  return (
    <div className="bg-white p-4 rounded my-4">
      {/* select a particular class */}
      <div className="flex items-center">
        <label className="w-24 sm:w-28 md:w-32">Class Name: </label>
        <select
          id=""
          name=""
          className="bg-bgGray flex-1 rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
        >
          {academicSetupList[0].content.map((singleClass, index) => (
            <option value="" key={index}>
              {singleClass.info}
            </option>
          ))}
        </select>
      </div>

      {/* show all subjects */}
      <div className="grid grid-cols-3 sm:grid-cols-5 my-8 gap-2">
        {academicSetupList[2].content.map((singleSubject, index) => (
          <div key={index} className="space-x-2">
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
      <button className="bg-primary px-6 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
        Save
      </button>
    </div>
  );
}
