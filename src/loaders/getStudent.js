import { students } from "../components/STSP-info/student-info/student-list/SListTable.jsx";

export default async function getStudent({params}) {
   
const student = students.find(p => p.id === params.id);

   return student;
 }