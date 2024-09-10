import { Link } from "react-router-dom";

export default function CMCHeader() {
    return (
      <div className="flex gap-4 items-center justify-between bg-bgGreen px-2 py-3 my-2 rounded">
         <div className="text-primary font-bold">
            <h3 className="">Class : One</h3>
         </div>
         <div className="flex items-center gap-2 justify-end">
            <Link to="../mark-config">
               <button
                  type="submit"
                  className="rounded w-full px-4 py-2 bg-yellow text-white shadow-md  hover:-translate-y-[2px] duration-200"
               >
                  List Class Config
               </button>
            </Link>
         </div>
      </div>
    );
}