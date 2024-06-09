import academicSetupList from "../../data/academicSetupList";
import SelectClass from "./chooseable-subject/SelectClass";
import SelectSubject from "./chooseable-subject/SelectSubject";

export default function ChooseableSubject() {
  return (
    <div className="bg-white px-4 py-6 rounded mt-4">
      {/* select a particular class */}
      <SelectClass />

      {/* show all subjects */}
      <div className="grid grid-cols-3 sm:grid-cols-5 my-6">
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

      <SelectSubject />

      {/* save button */}
      {/* <button className="bg-primary px-6 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
        Save
      </button> */}
    </div>
  );
}
