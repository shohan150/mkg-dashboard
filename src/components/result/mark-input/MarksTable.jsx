import SingleMark from "./SingleMark";

export default function MarksTable() {
   const studentMarks = [
      {
         id:'1',
         name: "shamim anwar",
         roll:'01',
      },
      {
         id:'2',
         name: "shamim anwar",
         roll:'02',
      },
      {
         id:'3',
         name: "shamim anwar",
         roll:'03',
      },
      {
         id:'4',
         name: "shamim anwar",
         roll:'04',
      },
      {
         id:'5',
         name: "shamim anwar",
         roll:'05',
      },
   ]
    return (
      <table className="w-full text-textGray text-lg leading-10 mt-4 mb-2">
      <thead className="border-b-2 bg-bgGreen">
        <tr>
          <th className="w-2/12">ID</th>
          <th className="w-3/12">Name</th>
          <th className="w-1/12">Roll</th>
          <th className="w-2/12">Written</th>
          <th className="w-2/12">MCQ</th>
          <th className="w-2/12">Total</th>
        </tr>
      </thead>
      <tbody className="divide-y-2">
        {studentMarks.map(row => <SingleMark key={row.id} data={row} /> )}
      </tbody>
    </table>
    );
}