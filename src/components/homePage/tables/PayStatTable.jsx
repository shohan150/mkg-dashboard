export default function PayStatTable() {
  const payInfo = [
    {
      name: "Nursery",
      section: "A",
      totalStudents: 45,
      paid: 32,
      unpaid: 13,
    },
    {
      name: "Nursery",
      section: "B",
      totalStudents: 48,
      paid: 38,
      unpaid: 13,
    },
    {
      name: "Nursery",
      section: "A",
      totalStudents: 45,
      paid: 32,
      unpaid: 13,
    },
    {
      name: "Nursery",
      section: "B",
      totalStudents: 48,
      paid: 38,
      unpaid: 13,
    },
    {
      name: "Nursery",
      section: "A",
      totalStudents: 45,
      paid: 32,
      unpaid: 13,
    },
    {
      name: "Nursery",
      section: "B",
      totalStudents: 48,
      paid: 38,
      unpaid: 13,
    },
  ];
  return (
    <div className="mt-4">
      <table className="w-full text-center">
        <thead>
          <tr className="bg-blue text-white font-medium">
            <td className="w-[20%] py-2">Class</td>
            <td className="w-[20%] py-2">Section</td>
            <td className="w-[20%] py-2">T.Student</td>
            <td className="w-[20%] py-2">Paid</td>
            <td className="w-[20%] py-2">Unpaid</td>
          </tr>
        </thead>
      </table>
      <div className="h-40 overflow-y-auto bg-bgBlue">
        <table className="w-full text-center text-textGray divide-y">
          {payInfo.map((singleClass, index) => (
            <tr key={index}>
              <td className="w-[20%] py-1">{singleClass.name}</td>
              <td className="w-[20%] py-1">{singleClass.section}</td>
              <td className="w-[20%] py-1">{singleClass.totalStudents}</td>
              <td className="w-[20%] py-1 text-green">{singleClass.paid}</td>
              <td className="w-[20%] py-1 text-red">{singleClass.unpaid}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
