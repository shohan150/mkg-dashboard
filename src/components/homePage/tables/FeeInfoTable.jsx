export default function FeeInfoTable() {
  const feeInfo = [
    {
      name: "Shadman Shamim",
      class: "class 1",
      amount: "1,200",
      status: "paid",
    },
    {
      name: "Shadman Shamim",
      class: "class 1",
      amount: "1,200",
      status: "unpaid",
    },
    {
      name: "Shadman Shamim",
      class: "class 1",
      amount: "1,200",
      status: "paid",
    },
    {
      name: "Shadman Shamim",
      class: "class 2",
      amount: "1,200",
      status: "paid",
    },
    {
      name: "Shadman Shamim",
      class: "class 1",
      amount: "1,200",
      status: "paid",
    },
    {
      name: "Shadman Shamim",
      class: "class 1",
      amount: "2,000",
      status: "unpaid",
    },
    {
      name: "Shadman Shamim",
      class: "class 2",
      amount: "1,200",
      status: "paid",
    },
    {
      name: "Shadman Shamim",
      class: "class 1",
      amount: "1,200",
      status: "paid",
    },
    {
      name: "Shadman Shamim",
      class: "class 1",
      amount: "2,000",
      status: "unpaid",
    },
  ];

  return (
    <div className="mt-4">
      <h5 className="text-textGray text-end text-xs mb-2">
        Total Students Found: <span className="text-green">40</span>
      </h5>
      <table className="w-full text-center">
        <thead>
          <tr className="bg-bgGreen text-textGray font-bold ">
            <td className="w-[40%] py-2">Name</td>
            <td className="w-[20%]">class</td>
            <td className="w-[20%]">amount</td>
            <td className="w-[20%]">status</td>
          </tr>
        </thead>
      </table>
      <div className="h-40 overflow-y-auto bg-bgBlue">
        <table className="w-full text-center text-textGray divide-y">
          {feeInfo.map((student, index) => (
            <tr key={index}>
              <td className="w-[40%] py-1">{student.name}</td>
              <td className="w-[20%] py-1">{student.class}</td>
              <td className="w-[20%] py-1">{student.amount} Tk</td>
              <td className="w-[20%] py-1">
                <span
                  className={`text-white px-3 py-[2px] rounded-full text-xs ${
                    student.status === "paid" ? "bg-green" : "bg-red"
                  }`}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}