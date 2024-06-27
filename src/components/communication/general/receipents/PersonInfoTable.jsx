export default function PersonInfoTable({persons, checkedState, handleCheckboxChange}) {
    return (
      <table className="w-full text-textGray text-sm leading-8">
      <thead className="border-b-2 bg-bgBlue">
        <tr>
          <th className="w-2/12">
          </th>
          <th className="w-3/12">ID No</th>
          <th className="w-7/12">NAME</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium">
        {persons.map((row) => (
          <tr key={row.id} className="text-center">
            <td className="w-2/12">
            {/* if this id does not exist in the checkedState object then give a value of false.*/}
              <input
                type="checkbox"
                checked={checkedState[row.id] || false}
                onChange={() => handleCheckboxChange(row.id)}
              />
            </td>
            <td className="w-3/12">{row.id}</td>
            <td className="w-7/12">{row.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
}