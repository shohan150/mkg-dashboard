import "react-datepicker/dist/react-datepicker.css";
import AssignFeeByMonth from "./AssignFeeByMonth";
import AssignedFees from "./AssignedFees";
const FeesMasterForm = () => {
  return (
    <div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2 flex flex-col">
          <label className="">Fee Type</label>
          <div className="relative">
            <select
              className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
              defaultValue="0"
              name="fee_type"
              id="fee_type"
            >
              <option value="0">Select One</option>

              <option value="1">Coaching Fee</option>

              <option value="2">Transport Fee</option>

              <option value="3">Hostel Fee</option>

              <option value="4">Monthly Fee</option>

              <option value="5">Test Exam</option>

              <option value="6">Semister Exam</option>

              <option value="7">Admintion Fee</option>

              <option value="8">Stationary Fee</option>
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
          <label className="">Select Class</label>
          <div className="relative">
            <select
              className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
              defaultValue="0"
              name="fee_type"
              id="fee_type"
            >
              <option value="0">Select One</option>
              <option value="1">One</option>

              <option value="2">Two</option>

              <option value="3">Three</option>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-5">
        <AssignFeeByMonth />
        <AssignedFees />
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

export default FeesMasterForm;
