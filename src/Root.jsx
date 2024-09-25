import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Holiday from "./components/attendance/holiday/Holiday";
import LeaveRequest from "./components/attendance/leave-request/LeaveRequest";
import LeaveType from "./components/attendance/leave-type/LeaveType";
import StudentAttendance from "./components/attendance/student-attendance/StudentAttendance";
import StuffAttendance from "./components/attendance/teacher-stuff-attendance/StuffAttendance";
import TeacherAttendance from "./components/attendance/teacher-stuff-attendance/TeacherAttendance";
import GeneralSMS from "./components/communication/general/GeneralSMS";
import Notifications from "./components/communication/notification/Notifications";
import NewSMSTemplate from "./components/communication/template/NewSMSTemplate";
import SMSTemplate from "./components/communication/template/SMSTemplate";
import EventList from "./components/events/event-list/EventList";
import {
  AdmitCard,
  ExamFeeSheet,
  ExamName,
  ExamSchedule,
  ExamSignSheet,
  ExamSyllabus,
  GradeRule,
  MarkBlankSheet,
  ScheduleDownload,
  SeatPlan,
} from "./components/exam/exam-index";
import AddExamRoutine from "./components/exam/exam-schedule/AddExamRoutine";
import DeleteFee from "./components/fees/DeleteFee";
import FeesAllocation from "./components/fees/FeesAllocation";
import FeesAmount from "./components/fees/FeesAmount";
import FeesMaster from "./components/fees/FeesMaster";
import FeesType from "./components/fees/FeesType";
import ReturnFee from "./components/fees/ReturnFee";
import Home from "./components/homePage/Home";
import EditInstituteInfo from "./components/instituteProfile/EditInstituteInfo";
import InstituteProfile from "./components/instituteProfile/InstituteProfile";
import Deduction from "./components/payroll/deduction/Deduction";
import { Addition, SalaryAssign } from "./components/payroll/payroll-index";
import {
  MarkInput,
  MeritList,
  ProgressReport,
  TabulationSheet,
} from "./components/result/result-index";
import {
  ClassRoutine,
  CreateRoutine,
  RoutineList,
  TeacherSchedule,
} from "./components/routine/routine-index";
import { CoachingAllocation, CoachingPackage, HostelAllocation, HostelPackage, TransportAllocation, TransportPackage } from "./components/services/services-index";
import AcademicSetup from "./components/settings/AcademicSetup";
import ChooseableSubject from "./components/settings/ChooseableSubject";
import SectionConfig from "./components/settings/class-config/SectionConfig";
import ClassConfig from "./components/settings/ClassConfig";
import ClassMarkConfig from "./components/settings/mark-config/ClassMarkConfig";
import SubjectMarkDivide from "./components/settings/mark-divide/SubjectMarkDivide";
import MarkConfig from "./components/settings/MarkConfig";
import MarkDivide from "./components/settings/MarkDivide";
import ClassSubjectAssign from "./components/settings/subject-assign/ClassSubjectAssign";
import TeacherSubjectAssign from "./components/settings/subject-assign/TeacherSubjectAssign";
import {
  AddParents,
  AddStaff,
  AddStudent,
  AddTeacher,
  EditParent,
  EditStaff,
  EditStudent,
  EditTeacher,
  ParentsList,
  RfidUpdate,
  StaffList,
  StMigration,
  StudentIdCard,
  StudentList,
  StWaiver,
  TeacherList,
  TesData,
  TesSettings,
  Testimonial
} from "./components/STSP-info/stsp-index";
import StudyMaterial from "./components/study-material/StudyMaterial";
import Dummy from "./components/to-be-deleted (trash templates)/Dummy";
import Test from "./components/to-be-deleted (trash templates)/Test";
import {
  getParent,
  getSection,
  getStaff,
  getStudent,
  getTeacher,
} from "./loaders";

function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Dummy />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "dashboard",
          element: <Home />,
        },
        {
          path: "institute-profile",
          element: <InstituteProfile />,
        },
        {
          path: "institute-profile/edit-info",
          element: <EditInstituteInfo />,
        },
        {
          path: "settings",
          children: [
            {
              path: "academic-setup",
              element: <AcademicSetup />,
            },
            {
              path: "class-config",
              element: <ClassConfig />,
            },
            {
              path: "section-config/:id",
              element: <SectionConfig />,
              loader: getSection,
            },
            {
              path: "class-subject-assign",
              element: <ClassSubjectAssign />,
            },
            {
              path: "mark-config",
              element: <MarkConfig />,
            },
            {
              path: "class-mark-config/:id",
              element: <ClassMarkConfig />,
            },
            {
              path: "mark-divide",
              element: <MarkDivide />,
            },
            {
              path: "subject-mark-divide/:id",
              element: <SubjectMarkDivide />,
            },
            {
              path: "teacher-subject-assign",
              element: <TeacherSubjectAssign />,
            },
            {
              path: "chooseable-subject",
              element: <ChooseableSubject />,
            },
          ],
        },
        {
          path: "communication",
          children: [
            {
              path: "general-sms",
              element: <GeneralSMS />,
            },
            {
              path: "notifications",
              element: <Notifications />,
            },
            {
              path: "sms-template",
              element: <SMSTemplate />,
            },
            {
              path: "add-sms-template",
              element: <NewSMSTemplate />,
            },
          ],
        },
        {
          path: "attendance",
          children: [
            {
              path: "student-attendance",
              element: <StudentAttendance />,
            },
            {
              path: "teacher-attendance",
              element: <TeacherAttendance />,
            },
            {
              path: "stuff-attendance",
              element: <StuffAttendance />,
            },
            {
              path: "leave-type",
              element: <LeaveType />,
            },
            {
              path: "leave-request",
              element: <LeaveRequest />,
            },
            {
              path: "holiday",
              element: <Holiday />,
            },
          ],
        },
        {
          path: "student-info",
          children: [
            {
              path: "add-student",
              element: <AddStudent />,
            },
            {
              path: "student-list",
              element: <StudentList />,
            },
            {
              path: "edit-student/:id",
              element: <EditStudent />,
              loader: getStudent,
            },
            {
              path: "student-testimonial",
              element: <Testimonial />,
            },
            {
              path: "testimonial-settings",
              element: <TesSettings />,
            },
            {
              path: "testimonial-data/:id",
              element: <TesData />,
              loader: getStudent,
            },
            {
              path: "student-waiver",
              element: <StWaiver />,
            },
            {
              path: "student-id-card",
              element: <StudentIdCard />,
            },
            {
              path: "student-migration",
              element: <StMigration />,
            },
            {
              path: "rfid-update",
              element: <RfidUpdate />,
            },
          ],
        },
        {
          path: "parent-info",
          children: [
            {
              path: "add-parent",
              element: <AddParents />,
            },
            {
              path: "parent-list",
              element: <ParentsList />,
            },
            {
              path: "edit-parent/:id",
              element: <EditParent />,
              loader: getParent,
            },
          ],
        },
        {
          path: "teacher-info",
          children: [
            {
              path: "add-teacher",
              element: <AddTeacher />,
            },
            {
              path: "teacher-list",
              element: <TeacherList />,
            },
            {
              path: "teacher-id-card",
              element: <Dummy />,
            },
            {
              path: "edit-teacher/:id",
              element: <EditTeacher />,
              loader: getTeacher,
            },
          ],
        },
        {
          path: "staff-info",
          children: [
            {
              path: "add-staff",
              element: <AddStaff />,
            },
            {
              path: "staff-list",
              element: <StaffList />,
            },
            {
              path: "staff-id-card",
              element: <Dummy />,
            },
            {
              path: "edit-staff/:id",
              element: <EditStaff />,
              loader: getStaff,
            },
          ],
        },
        {
          path: "routine",
          children: [
            {
              path: "routine-list",
              element: <RoutineList />,
            },
            {
              path: "create-routine",
              element: <CreateRoutine />,
            },
            {
              path: "class-routine",
              element: <ClassRoutine />,
            },
            {
              path: "teacher-schedule",
              element: <TeacherSchedule />,
            },
          ],
        },
        {
          path: "exam",
          children: [
            {
              path: "exam-name",
              element: <ExamName />,
            },
            {
              path: "exam-syllabus",
              element: <ExamSyllabus />,
            },
            {
              path: "exam-schedule",
              element: <ExamSchedule />,
            },
            {
              path: "add-exam-routine/:id",
              element: <AddExamRoutine />,
            },
            {
              path: "schedule-download",
              element: <ScheduleDownload />,
            },
            {
              path: "admit-card",
              element: <AdmitCard />,
            },
            {
              path: "seat-plan",
              element: <SeatPlan />,
            },
            {
              path: "grade-rule",
              element: <GradeRule />,
            },
            {
              path: "mark-blank-sheet",
              element: <MarkBlankSheet />,
            },
            {
              path: "exam-signature-sheet",
              element: <ExamSignSheet />,
            },
            {
              path: "exam-fee-sheet",
              element: <ExamFeeSheet />,
            },
          ],
        },
        {
          path: "result",
          children: [
            {
              path: "mark-input",
              element: <MarkInput />,
            },
            {
              path: "tabulation-sheet",
              element: <TabulationSheet />,
            },
            {
              path: "progress-report",
              element: <ProgressReport />,
            },
            {
              path: "merit-list",
              element: <MeritList />,
            },
          ],
        },
        {
          path: "study-material",
          element: <StudyMaterial />,
        },
        {
          path: "event",
          children: [
            {
              path: "event-list",
              element: <EventList />,
            },
          ],
        },
        {
          path: "fees",
          children: [
            {
              path: "fees-type",
              element: <FeesType />,
            },
            {
              path: "fees-amount",
              element: <FeesAmount />,
            },
            {
              path: "fees-master",
              element: <FeesMaster />,
            },
            {
              path: "fees-allocation",
              element: <FeesAllocation />,
            },
            {
              path: "delete-fee",
              element: <DeleteFee />,
            },
            {
              path: "return-fee",
              element: <ReturnFee />,
            },
          ],
        },
        {
          path: "payroll",
          children: [
            {
              path: "addition",
              element: <Addition />,
            },
            {
              path: "deduction",
              element: <Deduction />,
            },
            {
              path: "salary-assign",
              element: <SalaryAssign />,
            },
          ],
        },
        {
          path: "services",
          children: [
            {
              path: "hostel-package",
              element: <HostelPackage />,
            },
            {
              path: "hostel-allocation",
              element: <HostelAllocation />,
            },
            {
              path: "coaching-package",
              element: <CoachingPackage />,
            },
            {
              path: "coaching-allocation",
              element: <CoachingAllocation />,
            },
            {
              path: "transport-package",
              element: <TransportPackage />,
            },
            {
              path: "transport-allocation",
              element: <TransportAllocation />,
            },
          ],
        },

        {
          path: "test",
          element: <Test />
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Root;
