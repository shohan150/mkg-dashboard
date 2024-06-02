export default function SearchPayslip() {
  return (
    <table className="bg-bgBlue w-full font-medium">
      <tbody>
        <tr className="border-b border-white">
          <td className="w-1/3 p-1 text-primary">Student Name</td>
          <td className="w-2/3 text-textGray border-l border-white pl-2">
            Al Amin Sawon
          </td>
        </tr>
        <tr className="border border-white">
          <td className="w-1/3 p-1 text-primary">Student ID</td>
          <td className="w-2/3 text-textGray border-l border-white pl-2">
            123456789
          </td>
        </tr>
        <tr className="border border-white">
          <td className="w-1/3 p-1 text-primary">Student Class</td>
          <td className="w-2/3 text-textGray border-l border-white pl-2">
            Class One
          </td>
        </tr>
        <tr className="border border-white">
          <td className="w-1/3 p-1 text-primary">Phone No</td>
          <td className="w-2/3 text-textGray border-l border-white pl-2">
            01234567890
          </td>
        </tr>
        <tr className="border border-white">
          <td className="w-1/3 p-1 text-primary">Due Month</td>
          <td className="w-2/3 text-textGray border-l border-white pl-2">
            April 2024
          </td>
        </tr>
        <tr className="border border-white">
          <td className="w-1/3 p-1 text-primary">Due Date</td>
          <td className="w-2/3 text-textGray border-l border-white pl-2">
            12 May 2024
          </td>
        </tr>
        <tr className="border border-white">
          <td className="w-1/3 p-1 text-primary">Fine Start Date</td>
          <td className="w-2/3 text-textGray border-l border-white pl-2">
            13 May 2024
          </td>
        </tr>
        <tr className="border border-white">
          <td className="w-1/3 p-1 text-primary">Total Due Amount</td>
          <td className="w-2/3 text-textGray border-l border-white pl-2">
            4557
          </td>
        </tr>
        <tr className="border border-white">
          <td className="w-1/3 p-1 text-primary">Fine Amount</td>
          <td className="w-2/3 text-textGray border-l border-white pl-2">0</td>
        </tr>
        <tr id="total-payable">
          <td className="w-1/3 p-1 text-primary">Total Payable</td>
          <td className="w-2/3 text-textGray border-l border-white pl-2">
            4557
          </td>
        </tr>
      </tbody>
    </table>
  );
}
