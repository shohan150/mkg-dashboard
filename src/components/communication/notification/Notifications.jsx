export default function Notifications() {
    return (
      <div className="bg-white rounded-md p-4 md:px-6 md:py-8 my-4 space-y-4">
        <div className="space-y-2">
          <label className="w-28 md:max-lg:w-32">Select Notification </label>
          <select
            id=""
            name=""
            defaultValue="Select Notification"
            className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
          >
            <option value="Select Notification" disabled>Select Notification</option>
            <option value="Exam Result">Exam Result</option>
            <option value="PaySlip Info">PaySlip Info</option>
            <option value="Due Info">Due Info</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="w-28 md:max-lg:w-32">Select Class/Section </label>
          <select
            id=""
            name=""
            defaultValue="Select Class/Section"
            className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
          >
            <option value="Select Class/Section" disabled>Select Class/Section</option>
            <option value="Class">Class</option>
            <option value="Section">Section</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>
    );
}