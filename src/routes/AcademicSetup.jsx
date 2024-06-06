import { useState } from "react";
import AcademicSetupForm from "../components/settings/academic-setup/AcademicSetupForm";
import AcademicSetupTable from "../components/settings/academic-setup/AcademicSetupTable";
import EditPopup from "../components/settings/academic-setup/EditPopup";
import academicSetupList from "../data/academicSetupList";

export default function AcademicSetup() {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(null);

  function handleEdit(row, title) {
    setIsEdit(true);
    setEditContent({ title, row });
  }

  console.log(isEdit, editContent);
  return (
    <div className="relative">
      <AcademicSetupForm />
      <div className="space-y-4">
        {academicSetupList.map((item, index) => (
          <AcademicSetupTable
            key={index}
            title={item.title}
            content={item.content}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      {isEdit && (
        <EditPopup
          editContent={editContent}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}
    </div>
  );
}
