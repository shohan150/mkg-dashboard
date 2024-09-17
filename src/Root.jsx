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
import { AdmitCard, ExamFeeSheet, ExamName, ExamSchedule, ExamSignSheet, ExamSyllabus, GradeRule, MarkBlankSheet, ScheduleDownload, SeatPlan } from "./components/exam/exam-index";
import AddExamRoutine from "./components/exam/exam-schedule/AddExamRoutine";
import Home from "./components/homePage/Home";
import EditInstituteInfo from "./components/instituteProfile/EditInstituteInfo";
import InstituteProfile from "./components/instituteProfile/InstituteProfile";
import MarkInput from "./components/result/mark-input/MarkInput";
import { ClassRoutine, CreateRoutine, RoutineList, TeacherSchedule } from "./components/routine/routine-index";
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
import AddParents from "./components/STSP-info/parent-info/add-parents/AddParents";
import EditParent from "./components/STSP-info/parent-info/edit-parents/EditParent";
import ParentsList from "./components/STSP-info/parent-info/parents-list/ParentsList";
import AddStaff from "./components/STSP-info/staff-info/add-staff/AddStaff";
import EditStaff from "./components/STSP-info/staff-info/edit-staff/EditStaff";
import StaffList from "./components/STSP-info/staff-info/staff-list/StaffList";
import AddStudent from "./components/STSP-info/student-info/add-student/AddStudent";
import EditStudent from "./components/STSP-info/student-info/edit-student/EditStudent";
import StudentList from "./components/STSP-info/student-info/student-list/StudentList";
import AddTeacher from "./components/STSP-info/teacher-info/add-teacher/AddTeacher";
import EditTeacher from "./components/STSP-info/teacher-info/edit-teacher/EditTeacher";
import TeacherList from "./components/STSP-info/teacher-info/teacher-list/TeacherList";
import StudyMaterial from "./components/study-material/StudyMaterial";
import Dummy from "./components/to-be-deleted (trash templates)/Dummy";
import { getParent, getSection, getStaff, getStudent, getTeacher } from "./loaders";

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
              loader: getSection
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
              element: <GeneralSMS />
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
            }
          ],
        },
        {
          path: "attendance",
          children: [
            {
              path: "student-attendance",
              element: <StudentAttendance />
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
              element: <AddStudent />
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
              element: <Dummy />,
            },
            {
              path: "student-waiver",
              element: <Dummy />,
            },
            {
              path: "student-id-card",
              element: <Dummy />,
            },
            {
              path: "student-migration",
              element: <Dummy />,
            },
          ],
        },
        {
          path: "parent-info",
          children: [
            {
              path: "add-parent",
              element: <AddParents />
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
              element: <AddTeacher />
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
              element: <AddStaff />
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
              element: <RoutineList />
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
              element: <ExamName />
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
              element: <SeatPlan />
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
              element: <MarkInput />
            },
            {
              path: "tabulation-sheet",
              element: <Dummy />,
            },
            {
              path: "progress-report",
              element: <Dummy />,
            },
            {
              path: "certificate",
              element: <Dummy />,
            },
          ],
        },
        {
          path: "study-material",
          element: <StudyMaterial />
        },
        {
          path: "event",
          children: [
            {
              path: "event-list",
              element: <EventList />
            },
          ],
        },
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
