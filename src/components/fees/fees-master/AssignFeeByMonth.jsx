import Select from "react-select";
import { months } from "../../../data/months";

const AssignFeeByMonth = () => {
  const monthOptions = months.map((month) => {
    return { value: month, label: month };
  });
  return (
    <div className="bg-white shadow rounded-md">
      {/* component title */}
      <h3 className="bg-primary text-white text-lg text-center p-4 leading-[20px] rounded-t-md shadow-md">
        Select Fee
      </h3>

      <div className="p-4 space-y-2">
        <div className="space-y-2">
          <label htmlFor="">Select Month</label>
          <Select closeMenuOnSelect={false} isMulti options={monthOptions} />
        </div>

        <div className="space-y-2">
          <label htmlFor="">Fee Collection Start Date</label>
          <div className="relative">
            <select
              className="border-gray-300 appearance-none w-full rounded p-2 border focus:border-primary focus:outline-none"
              defaultValue="0"
              name="fee_type"
              id="fee_type"
            >
              {[...Array(30).keys()].map((i) => (
                <>
                  <option value={i + 1}>{i + 1}</option>
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
        <div className="space-y-2">
          <label htmlFor="">Fee Collection End Date</label>
          <div className="relative">
            <select
              className="border-gray-300 appearance-none w-full rounded p-2 border focus:border-primary focus:outline-none"
              defaultValue="0"
              name="fee_type"
              id="fee_type"
            >
              {[...Array(30).keys()].map((i) => (
                <>
                  <option value={i + 1}>{i + 1}</option>
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
      </div>
    </div>
  );
};

export default AssignFeeByMonth;
