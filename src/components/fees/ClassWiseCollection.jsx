import { useTranslation } from "react-i18next";
import ClsWiseColForm from "./class-wise-collection/ClsWiseColForm";
import StudentShowcase from "./class-wise-collection/StudentInfo";


const ClassWiseCollection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-md p-4 md:p-6  my-4">
      <h3 className="text-2xl font-medium">{t("module.fees.class_wise_collection")}</h3>
      <ClsWiseColForm />
      <StudentShowcase />
    </div>
  );
};

export default ClassWiseCollection;
