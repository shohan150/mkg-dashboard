const AssignedFees = () => {
  const data = [
    {
      fee_title: "January - Coaching Fee",
      class: "Six",
      start_date: "2024-09-19",
      end_date: "2024-09-19",
    },
    {
      fee_title: "January - Coaching Fee",
      class: "Six",
      start_date: "2024-09-19",
      end_date: "2024-09-19",
    },
  ];
  return (
    <div className="bg-white shadow rounded-md">
      {/* component title */}
      <h3 className="bg-primary text-white text-lg text-center p-4 leading-[20px] rounded-t-md shadow-md">
        Already Assigned Fees
      </h3>

      <div className="p-5">
        <div className="border rounded shadow-md overflow-auto">
          <table className="w-full text-textGray text-sm leading-6 sm:leading-8">
            <thead className="border-b-2 bg-bgBlue">
              <tr>
                <th className="w-4/12 whitespace-nowrap px-2">Fees Title</th>
                <th className="w-2/12 whitespace-nowrap px-2">Class</th>
                <th className="w-3/12 whitespace-nowrap px-2">Start Date</th>
                <th className="w-3/12 whitespace-nowrap px-2">End Date</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 font-medium">
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="w-3/12 whitespace-nowrap px-2">{item.fee_title}</td>
                  <td className="w-2/12 whitespace-nowrap px-2">{item.class}</td>
                  <td className="w-3/12 whitespace-nowrap px-2">{item.start_date}</td>
                  <td className="w-3/12 whitespace-nowrap px-2">{item.end_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignedFees;