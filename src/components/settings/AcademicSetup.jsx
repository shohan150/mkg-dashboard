import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDeleteAcademicInfoMutation } from "../../redux/api/settingsSlice";
import DeleteModal from "../common/DeleleModal";
import AcademicSetupForm from "./academic-setup/AcademicSetupForm";
import EditPopup from "./academic-setup/EditPopup";
import FieldList from "./academic-setup/FiledList";

export default function AcademicSetup() {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [toDelete, setToDelete] = useState("");
  const [deleteValues, setDeleteValues] = useState();
  const [editContent, setEditContent] = useState({ title:"", row:{id:"", info: ""} });

  const [deleteAcademicInfo, {isLoading, error, isSuccess}] = useDeleteAcademicInfoMutation();

  const acSetupFields = [
    { path: 'student-class', title: 'Class' },
    { path: 'subject', title: 'Subject' },
    { path: 'stu-group', title: 'Group' },
    { path: 'student-section', title: 'Section' },
    { path: 'student-shift', title: 'Shift' },
    { path: 'period', title: 'Period' },
    { path: 'admission-year', title: 'Admission Year' }
  ];

  function handleEdit(row, title) {
    setIsEdit(true);
    setEditContent({ title, row });
  }

  function handleDelete(id, title, type) {
    setIsDelete(true);
    setToDelete(`${type.title} "${title}" `);
    setDeleteValues({selectedType: type.path, id});
  }

  function handleConfirmDlt(){
    deleteAcademicInfo(deleteValues);
    closeDelete();
  }

  function closeDelete(){
    setDeleteValues();
    setIsDelete(false);
    setToDelete("");
  }

  useEffect(() => {
    if (isSuccess) {
        toast.warn(`Deleted Successfully!`);
    }
    if (error) {
        toast.error('Failed to Delete!');
    }
  }, [isSuccess, error])
  
  return (
    <div className="relative">
      {/* the field entry form */}
      <AcademicSetupForm acSetupFields={acSetupFields} />

      {/* show the fields */}
      <div className="space-y-4">
        {
          acSetupFields.map((field, i) =><FieldList key={i} field={field} handleEdit={handleEdit} handleDelete={handleDelete} />)
        }

      </div>

      {/* show only when isEdit is true */}
      <EditPopup
        editContent={editContent}
        setEditContent={setEditContent}
        isEdit={isEdit} 
        onClose={()=>setIsEdit(false)}
      />

      {/* show only when isDelete is true */}
      <DeleteModal title={toDelete.toLowerCase()} isOpen={isDelete} onClose={closeDelete} handleConfirmDlt={handleConfirmDlt} />

    </div>
  );
}
