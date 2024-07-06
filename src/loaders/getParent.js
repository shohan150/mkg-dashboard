import { parents } from "../components/STSP-info/parent-info/parents-list/PListTable";

export async function getParent({params}) {
   
const parent = parents.find(p => p.id === params.id);

   return parent;
 }