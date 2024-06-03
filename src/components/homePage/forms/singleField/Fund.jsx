export default function Fund({ style }) {
  return (
    <div className={`space-y-1 ${style}`}>
      <h5 className="font-bold ">Fund</h5>
      <select
        id="month"
        name="month"
        defaultValue="default"
        className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
      >
        <option value="default" disabled>
          select fund
        </option>
        <option value="">Administrative</option>
        <option value="">Maintenance</option>
        <option value="">Tour</option>
      </select>
    </div>
  );
}
