// import ChooseSubTable from "./chooseable-subject/ChooseSubTable";
import SelectClass from "./chooseable-subject/SelectClass";
import SelectSubject from "./chooseable-subject/SelectSubject";

export default function ChooseableSubject() {
  return (
    <div className="bg-white px-4 py-6 rounded mt-4">
      {/* select a particular class */}
      <SelectClass />

      {/* show all students */}
      {/* <ChooseSubTable/> */}
      <div className="h-40">
      <table className="w-full text-textGray text-sm leading-8 my-6">
      <thead className="border-b-2">
        <tr>
          <th className="w-1/12">
            <input
              type="checkbox"
            />
          </th>
          <th className="w-2/12">STUDENT ID</th>
          <th className="w-3/12">NAME</th>
          <th className="w-2/12">ROLL</th>
          <th className="w-2/12">CLASS</th>
          <th className="w-2/12">SECTION</th>
        </tr>
      </thead>
      </table>
      </div>

      
      <SelectSubject />

      {/* save button */}
      {/* <button className="bg-primary px-6 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200">
        Save
      </button> */}
    </div>
  );
}
