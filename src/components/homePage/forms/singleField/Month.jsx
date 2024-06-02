export default function Month({ style }) {
  return (
    <div className={`space-y-1 ${style}`}>
      <h5 className="font-bold ">Month</h5>
      <select
        id="month"
        name="month"
        defaultValue="default"
        className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
      >
        <option value="default" disabled>
          select month
        </option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </div>
  );
}
