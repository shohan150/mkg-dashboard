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
import Home from "./components/homePage/Home";
import EditInstituteInfo from "./components/instituteProfile/EditInstituteInfo";
import InstituteProfile from "./components/instituteProfile/InstituteProfile";
import AcademicSetup from "./components/settings/AcademicSetup";
import ChooseableSubject from "./components/settings/ChooseableSubject";
import SubjectAssign from "./components/settings/SubjectAssign";
import AddParents from "./components/STSP-info/parent-info/add-parents/AddParents";
import EditParent from "./components/STSP-info/parent-info/edit-parents/EditParent";
import ParentsList from "./components/STSP-info/parent-info/parents-list/ParentsList";
import AddStaff from "./components/STSP-info/staff-info/add-staff/AddStaff";
import EditStaff from "./components/STSP-info/staff-info/edit-staff/EditStaff";
import StaffList from "./components/STSP-info/staff-info/staff-list/StaffList";
import AddStudent from "./components/STSP-info/student-info/add-student/AddStudent";
import TestTable from "./components/STSP-info/student-info/student-list/TestTable";
import AddTeacher from "./components/STSP-info/teacher-info/add-teacher/AddTeacher";
import EditTeacher from "./components/STSP-info/teacher-info/edit-teacher/EditTeacher";
import TeacherList from "./components/STSP-info/teacher-info/teacher-list/TeacherList";
import Dummy from "./components/to-be-deleted (trash templates)/Dummy";
import { getParent, getStaff, getTeacher } from "./loaders";

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
              element: <Home />,
            },
            {
              path: "subject-assign",
              element: <SubjectAssign />,
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
              element: <TestTable />,
            },
            {
              path: "edit-student/:id",
              element: <Dummy />,
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
