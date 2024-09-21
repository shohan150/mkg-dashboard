export default function ObtainedMarks() {
   const marks = [
      {
         subject: "Bangla",
         full: "100",
         written: "54",
         mcq: "36",
         total: '90',
         grade: "5.00",
         letter: "A+"
      },
      {
         subject: "English",
         full: "100",
         written: "50",
         mcq: "28",
         total: '82',
         grade: "5.00",
         letter: "A+"
      },
      {
         subject: "Math",
         full: "100",
         written: "40",
         mcq: "25",
         total: '72',
         grade: "4.00",
         letter: "A"
      },
   ]
    return (
      <table className="border border-black w-full my-3">
         <thead>
            <tr className="divide-x divide-black">
               <th>Subject</th>
               <th>Full Marks</th>
               <th>Obtained Marks</th>
               <th>Total</th>
               <th>Grade</th>
               <th>Letter</th>
            </tr>
         </thead>
         <tbody>
            {/* {
               grades.map((grade, i) => (
                  <tr key={i}  className="divide-x divide-black border-t border-black text-center">
                     <td>{grade.range}</td>
                     <td>{grade.grade}</td>
                     <td>{grade.gpa}</td>
                  </tr>
               ))
            } */}
         </tbody>
      </table>
    );
}