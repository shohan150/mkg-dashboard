import { useState } from "react";
import academicSetupList from "../../data/academicSetupList";
import DeleteModal from "../common/DeleleModal";
import AcademicSetupForm from "./academic-setup/AcademicSetupForm";
import AcademicSetupTable from "./academic-setup/AcademicSetupTable";
import ClassList from "./academic-setup/ClassList";
import EditPopup from "./academic-setup/EditPopup";

export default function AcademicSetup() {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [toDelete, setToDelete] = useState("");
  const [editContent, setEditContent] = useState({ title:"", row:{id:"", info: ""} });

  function handleEdit(row, title) {
    setIsEdit(true);
    setEditContent({ title, row });
  }

  function handleDelete(section) {
    setIsDelete(true);
    setToDelete(section);
  }
  
  // console.log(isEdit, editContent);
  return (
    <div className="relative">
      <AcademicSetupForm />
      <div className="space-y-4">
        <ClassList />
        {academicSetupList.map((item, index) => (
          <AcademicSetupTable
            key={index}
            title={item.title}
            content={item.content}
            handleEdit={handleEdit}
            handleDelete = {handleDelete}
          />
        ))}
      </div>

      {/* show only when isEdit is true */}
      <EditPopup
        editContent={editContent}
        setEditContent={setEditContent}
        isEdit={isEdit} 
        onClose={()=>setIsEdit(false)}
      />

      {/* show only when isDelete is true */}
      <DeleteModal title={toDelete.toLowerCase()} isOpen={isDelete} onClose={()=>setIsDelete(false)} />

    </div>
  );
}
