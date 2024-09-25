import { LuPlusCircle } from "react-icons/lu";

export default function AddPackage({title,setIsAdd}) {
  return (
   <button
      type="submit"
      onClick={()=> setIsAdd(true)}
      className="rounded w-60 p-[10px] bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200 flex items-center justify-center gap-3 my-5"
   >
      <LuPlusCircle className="text-white w-5 h-5"/>
      Add {title} Package
   </button>
  )
}
