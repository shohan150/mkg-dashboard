export default function Class({ style }) {
  return (
    <div className={`space-y-1 ${style}`}>
      <h5 className="font-bold ">Class</h5>
      <select
        id="class"
        name="class"
        defaultValue="default"
        className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
      >
        <option value="default" disabled>
          select class
        </option>
        <option value="Nursery">Nursery</option>
        <option value="Class-1">Class 1</option>
        <option value="Class-2">Class 2</option>
        <option value="Class-3">Class 3</option>
      </select>
    </div>
  );
}
