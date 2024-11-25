import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDeleteAcademicInfoMutation, useUpdateAcademicInfoMutation } from "../../redux/api/settingsSlice";
import DeleteModal from "../common/DeleleModal";
import AcademicSetupForm from "./academic-setup/AcademicSetupForm";
import EditPopup from "./academic-setup/EditPopup";
import FieldList from "./academic-setup/FiledList";

export default function AcademicSetup() {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [toDelete, setToDelete] = useState("");
  const [deleteValues, setDeleteValues] = useState();
  const [editContent, setEditContent] = useState({});

  const [deleteAcademicInfo, {isLoading : dltLoading, error : dltError, isSuccess : dltSuccess}] = useDeleteAcademicInfoMutation();
  const [updateAcademicInfo, {isLoading: updateLoading, error : updateError, isSuccess : updateSuccess}] = useUpdateAcademicInfoMutation();

  const acSetupFields = [
    { path: 'student-class', title: 'Class' },
    { path: 'subject', title: 'Subject' },
    { path: 'stu-group', title: 'Group' },
    { path: 'student-section', title: 'Section' },
    { path: 'student-shift', title: 'Shift' },
    { path: 'period', title: 'Period' },
    { path: 'admission-year', title: 'Admission Year' }
  ];

  // handle edit.
  function handleEdit(item, field) {
    setIsEdit(true);
    setEditContent({ item, field });
  }

  function handleConfirmEdit(){
    updateAcademicInfo({selectedType: editContent?.field?.path, data: editContent?.item});
    closeEdit();
  }

  function closeEdit(){
    setIsEdit(false);
    setEditContent({});
  }
  
  useEffect(() => {
    if (updateSuccess) {
        toast.success('Updated Successfully!');
    }
    if (updateError) {
        toast.error('Failed to Update!');
    }
  }, [updateSuccess, updateError]);

  //handle delete
  function handleDelete(item, field) {
    setIsDelete(true);
    setToDelete(`${field.title} "${item.name}" `);
    setDeleteValues({selectedType: field.path, id:item.id});
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
    if (dltSuccess) {
        toast.warn(`Deleted Successfully!`);
    }
    if (dltError) {
        toast.error('Failed to Delete!');
    }
  }, [dltSuccess, dltError]);

  
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
        handleConfirmEdit={handleConfirmEdit}
        onClose={closeEdit}
      />

      {/* show only when isDelete is true */}
      <DeleteModal title={toDelete.toLowerCase()} isOpen={isDelete} onClose={closeDelete} handleConfirmDlt={handleConfirmDlt} />

    </div>
  );
}
