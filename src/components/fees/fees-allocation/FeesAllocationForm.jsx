import { useState } from "react";
import { months } from "../../../data/months";

const FeesAllocationForm = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");
  

  return (
    <div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="space-y-2 flex flex-col">
          <label className="">Select Invoice</label>

          <div className="inline-block relative">
            <select
              className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
              defaultValue="0"
              name="fee_type"
              id="fee_type"
            >
              <option value="0">Select Invoice</option>
              <option value="12">Bulk</option>
              <option value="12">Indvidual</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="">Fee Month</label>

          <div className="inline-block relative">
            <select
              className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
              defaultValue="0"
              name="fee_type"
              id="fee_type"
            >
              <option value="0">Select Fee Month</option>
              {months?.map((month) => (
                <>
                  <option value={month}>{month}</option>
                </>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="">Select Student</label>

          <div className="inline-block relative">
            <input
              onFocus={() => setActiveSearch(true)}
              onBlur={() =>
                setTimeout(() => {
                  setActiveSearch(false);
                }, 300)
              }
              placeholder="Search Here..."
              type="text"
              onChange={(e) => setSelectedStudent(e.target.value)}
              value={selectedStudent}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
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
        </div>

        <div className="space-y-2">
          <label htmlFor="">Select Admission</label>
          <input
            type="number"
            defaultValue={new Date().getFullYear()}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="space-y-2 col-span-2">
          <label htmlFor="">Description</label>
          <input
            placeholder="Description"
            type="text"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <button
        type="submit"
        className="rounded mt-4 w-20 p-2 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200 flex items-center justify-center gap-2"
      >
        Submit
      </button>
    </div>
  );
};

export default FeesAllocationForm;
