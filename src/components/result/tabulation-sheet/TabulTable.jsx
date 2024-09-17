import { studentsData } from "../../../data/studentList";
import SubjectName from "./SubjectName";
import SubjectNumber from "./SubjectNumber";

export default function TabulTable() {
   const subjects = ["Bangla", "English", "Mathematics", "History", "Art"];

   const numbers = [
      {
         written: "55",
         MCQ: "32"
      },
      {
         written: "45",
         MCQ: "38"
      },
      {
         written: "51",
         MCQ: "34"
      },
      {
         written: "28",
         MCQ: "26"
      },
      {
         written: "45",
         MCQ: "34"
      },
   ]
    return (
      <div className="overflow-x-scroll overflow-y-clip border border-primary rounded-md">
         <table className="w-full text-textGray leading-10">
            <thead className="border-b-2 bg-bgGreen text-lg">
            <tr className="divide-x-2 divide-bgGray">
               <th className="min-w-12">Roll</th>
               <th className="min-w-40">Name</th>
               {
                  subjects.map((item, index) => <SubjectName key={index} data={item} />)
               }
               <th className="min-w-12">Total</th>
               <th className="min-w-12">GPA</th>
               <th className="min-w-12">Grade</th>
            </tr>
            </thead>
            <tbody className="divide-y-2">
               {studentsData.map((row, index)=>(
                  <tr key={index} className="text-center leading-6 divide-x-2 divide-bgGray">
                     <td className="min-w-12">{row.id}</td>
                     <td className="min-w-40">{row.name}</td>
                     {
                        numbers.map((item, index) => <SubjectNumber key={index} data={item} />)
                     }
                     <td className="min-w-12">100</td>
                     <td className="min-w-12">5.00</td>
                     <td className="min-w-12">A+</td>
                  </tr>))}
            </tbody>
         </table>
      </div>
    );
}