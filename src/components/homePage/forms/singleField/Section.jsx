export default function Section({ style }) {
  return (
    <div className={`space-y-1 ${style}`}>
      <h5 className="font-bold ">Section</h5>
      <select
        id="class"
        name="class"
        defaultValue="default"
        className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
      >
        <option value="default" disabled>
          select section
        </option>
        <option value="Nursery">A</option>
        <option value="Class-1">B</option>
        <option value="Class-2">C</option>
        <option value="Class-3">D</option>
      </select>
    </div>
  );
}
