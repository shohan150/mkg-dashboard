import { classConfig } from "../components/settings/class-config/ClassConfigTable.jsx";

export default async function getSection({params}) {
   
const section = classConfig.find(item => item.id === params.id);

   return section;
 }