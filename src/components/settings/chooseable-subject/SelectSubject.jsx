import academicSetupList from "../../../data/academicSetupList";

export default function SelectSubject() {
  return (
    <div className="flex items-center gap-2">
      <label className="w-28 md:w-32">Select Subject: </label>
      <select
        id=""
        name=""
        className="bg-bgGray flex-1 rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
      >
        {academicSetupList[2].content.map((subject, index) => (
          <option value="" key={index}>
            {subject.info}
          </option>
        ))}
      </select>
      <button className="bg-primary px-6 md:px-8 lg:px-12 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200 ml-0 sm:ml-2 lg:ml-4">
        Submit
      </button>
    </div>
  );
}
