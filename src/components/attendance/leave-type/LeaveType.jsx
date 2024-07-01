import { useState } from "react";
import DeleteModal from "../../common/DeleleModal";
import AddLeaveType from "./AddLeaveType";
import LTypeModal from "./LTypeModal";
import LTypeTable from "./LTypeTable";

export default function LeaveType() {
   const [isEdit, setIsEdit] = useState(false);
   const [isDelete, setIsDelete] = useState(false);
   const [toDelete, setToDelete] = useState("");
   const [editContent, setEditContent] = useState("");
 
   function handleEdit(item) {
     setIsEdit(true);
     setEditContent(item);
   }

   function handleDelete(title) {
     setIsDelete(true);
     setToDelete(title);
   }

    return (
      <div className="bg-white rounded-md p-4 md:p-6  my-4">
         <AddLeaveType />
         <LTypeTable handleEdit={handleEdit} handleDelete={handleDelete} />

         {/* show only when isEdit is true */}
         <LTypeModal
         editContent={editContent}
         isEdit={isEdit} 
         onClose={()=>setIsEdit(false)}
         />

         {/* show only when isDelete is true */}
         <DeleteModal title={toDelete.toLowerCase()} isOpen={isDelete} onClose={()=>setIsDelete(false)} />
      </div>
    );
}