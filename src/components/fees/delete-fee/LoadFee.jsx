import { useState } from "react";

export default function LoadFee() {
  const [activeSearch, setActiveSearch] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");

  return (
    <div className="flex justify-between items-center">
      {/* load fee by student */}
      <div className="search_student_fee flex items-center gap-4">
        <div className="inline-block relative w-64">
          <input
            onFocus={() => setActiveSearch(true)}
            onBlur={() => setTimeout(() => {setActiveSearch(false)}, 300)}
            placeholder="Search Here..."
            type="text"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div> */}
          {activeSearch && (
            <div className="search_results absolute shadow border w-full z-10 bg-white">
              <ul>
                <li
                  onClick={() => setSelectedStudent("Md. Nazmus Sakib")}
                  className="p-2 cursor-pointer hover:bg-slate-400"
                >
                  Md. Nazmus Sakib
                </li>
                <li
                  onClick={() => setSelectedStudent("Hosne Ara Khatun")}
                  className="p-2 cursor-pointer hover:bg-slate-400"
                >
                  Hosne Ara Khatun
                </li>
              </ul>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="rounded w-20 p-2 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200 flex items-center justify-center gap-2"
        >
          Load
        </button>
      </div>

      {/* selected student */}
      {selectedStudent && (
        <div className="selected_student_fee">
          <h4>
            <b>Name:</b> {selectedStudent}
          </h4>
        </div>
      )}
    </div>
  );
}
