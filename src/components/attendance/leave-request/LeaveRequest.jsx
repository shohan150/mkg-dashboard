import { useState } from "react";
import AddLeaveType from "../leave-type/AddLeaveType";
import AddLRequestModal from "./AddLRequestModal";

export default function LeaveRequest() {
   const [isAdd, setIsAdd] = useState(false);
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
         <AddLeaveType setIsAdd={setIsAdd} />

         {/* The 3 modals: Add, Edit, Delete */}
         {/* show only when isAdd is true */}
         <AddLRequestModal isAdd={isAdd} onClose={()=>setIsAdd(false)} />

      </div>
    );
}