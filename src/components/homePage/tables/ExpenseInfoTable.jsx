export default function ExpenseInfoTable() {
  const expenses = [
    {
      type: "Salary",
      amount: 12340,
      description: "Monthly salary paid to Haidar.",
    },
    {
      type: "Utility",
      amount: 12340,
      description: "Electrcity bill paid.",
    },
    {
      type: "Salary",
      amount: 12340,
      description: "Monthly salary paid to Haidar.",
    },
    {
      type: "Salary",
      amount: 12340,
      description: "Monthly salary paid to Haidar.",
    },
    {
      type: "Salary",
      amount: 12340,
      description: "Monthly salary paid to Haidar.",
    },
    {
      type: "Salary",
      amount: 12340,
      description: "Monthly salary paid to Haidar.",
    },
    {
      type: "Salary",
      amount: 12340,
      description: "Monthly salary paid to Haidar.",
    },
    {
      type: "Salary",
      amount: 12340,
      description: "Monthly salary paid to Haidar.",
    },
  ];
  return (
    <div className="mt-4">
      <h5 className="text-textGray text-end text-xs mb-2">
        Total Expense: <span className="text-red">2,50,000</span>
      </h5>
      <table className="w-full text-center">
        <thead>
          <tr className="bg-bgGreen text-textGray font-bold ">
            <td className="w-[25%] py-2">Type</td>
            <td className="w-[25%] py-2">Amount</td>
            <td className="w-[50%] py-2">description</td>
          </tr>
        </thead>
      </table>
      <div className="h-52 overflow-y-auto bg-bgBlue">
        <table className="w-full text-center text-textGray divide-y">
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="border-b border-white">
                <td className="w-[25%] py-1">{expense.type}</td>
                <td className="w-[25%] py-1">{expense.amount}</td>
                <td className="w-[50%] py-1">{expense.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
