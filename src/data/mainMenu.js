const mainMenu = [
  {
    id: "01",
    title: "Profiles",
    icon: false,
  },
  {
    id: "02",
    title: "DashBoard",
    icon: "RiDashboardHorizontalFill",
    link: "/dashboard",
  },
  {
    id: "03",
    title: "Institute Profile",
    icon: "HiOutlineBuildingStorefront",
    link: "/institute-profile",
  },
  {
    id: "04",
    title: "Apps & Pages",
    icon: false,
  },
  {
    id: "05",
    title: "Settings",
    icon: "IoMdSettings",
    children: [
      {
        id: "05/01",
        title: "Academic Setup",
        link: "settings/academic-setup",
      },
      {
        id: "05/02",
        title: "Class Config",
        link: "settings/class-config",
      },
      {
        id: "05/03",
        title: "Class Subject Assign",
        link: "settings/class-subject-assign",
      },
      {
        id: "05/04",
        title: "Teacher Subject Assign",
        link: "settings/teacher-subject-assign",
      },
      {
        id: "05/05",
        title: "Mark Config",
        link: "settings/mark-config",
      },
      {
        id: "05/06",
        title: "Mark Divide",
        link: "settings/mark-divide",
      },
      {
        id: "05/07",
        title: "Chooseable Subject",
        link: "settings/chooseable-subject",
      },

    ],
  },
  {
    id: "06",
    title: "Communication",
    icon: "LiaSmsSolid",
    children: [
      {
        id: "06/01",
        title: "General SMS",
        link: "communication/general-sms",
      },
      {
        id: "06/02",
        title: "Notifications",
        link: "communication/notifications",
      },
      {
        id: "06/03",
        title: "SMS Template",
        link: "communication/sms-template",
      },
    ],
  },
  {
    id: "07",
    title: "Attendance",
    icon: "FaRegCheckSquare",
    children: [
      {
        id: "07/01",
        title: "Student Attendance",
        link: "attendance/student-attendance",
      },
      {
        id: "07/02",
        title: "Teacher Attendance",
        link: "attendance/teacher-attendance",
      },
      {
        id: "07/03",
        title: "Stuff Attendance",
        link: "attendance/stuff-attendance",
      },
      {
        id: "07/04",
        title: "Leave Type",
        link: "attendance/leave-type",
      },
      {
        id: "07/05",
        title: "Leave Request",
        link: "attendance/leave-request",
      },
      {
        id: "07/06",
        title: "Holiday",
        link: "attendance/holiday",
      },
    ],
  },
  {
    id: "08",
    title: "Student Info",
    icon: "PiStudentBold",
    children: [
      {
        id: "08/01",
        title: "Add Student",
        link: "student-info/add-student",
      },
      {
        id: "08/02",
        title: "Student List",
        link: "student-info/student-list",
      },
      {
        id: "08/03",
        title: "Student Testimonial",
        link: "student-info/student-testimonial",
      },
      {
        id: "08/04",
        title: "Student Waiver",
        link: "student-info/student-waiver",
      },
      {
        id: "08/05",
        title: "Student ID Card",
        link: "student-info/student-id-card",
      },
      {
        id: "08/06",
        title: "Student Migration",
        link: "student-info/student-migration",
      },
    ],
  },
  {
    id: "09",
    title: "Parent Info",
    icon: "RiParentFill",
    children: [
      {
        id: "09/01",
        title: "Add Parent",
        link: "parent-info/add-parent",
      },
      {
        id: "09/02",
        title: "Parent List",
        link: "parent-info/parent-list",
      },
    ],
  },
  {
    id: "10",
    title: "Teacher Info",
    icon: "PiChalkboardTeacherFill",
    children: [
      {
        id: "10/01",
        title: "Add Teacher",
        link: "teacher-info/add-teacher",
      },
      {
        id: "10/02",
        title: "Teacher List",
        link: "teacher-info/teacher-list",
      },
      {
        id: "10/03",
        title: "Teacher ID Card",
        link: "teacher-info/teacher-id-card",
      },
    ],
  },
  {
    id: "11",
    title: "Staff Info",
    icon: "FaPeopleGroup",
    children: [
      {
        id: "11/01",
        title: "Add Staff",
        link: "staff-info/add-staff",
      },
      {
        id: "11/02",
        title: "Staff List",
        link: "staff-info/staff-list",
      },
      {
        id: "11/03",
        title: "Staff ID Card",
        link: "staff-info/staff-id-card",
      },
    ],
  },
  {
    id: "12",
    title: "Exam",
    icon: "LuFileText",
    children: [
      {
        id: "12/01",
        title: "Exam Name",
        link: "exam/exam-name",
      },
      {
        id: "12/02",
        title: "Exam Syllabus",
        link: "exam/exam-syllabus",
      },
      {
        id: "12/03",
        title: "Exam Schedule",
        link: "exam/exam-schedule",
      },
      {
        id: "12/04",
        title: "Schedule Download",
        link: "exam/schedule-download",
      },
      {
        id: "12/05",
        title: "Admit Card",
        link: "exam/admit-card",
      },
      {
        id: "12/06",
        title: "Seat Plan",
        link: "exam/seat-plan",
      },
      {
        id: "12/07",
        title: "Grade Rule",
        link: "exam/grade-rule",
      },
      {
        id: "12/08",
        title: "Mark Blank Sheet",
        link: "exam/mark-blank-sheet",
      },
      {
        id: "12/09",
        title: "Exam Signature Sheet",
        link: "exam/exam-signature-sheet",
      },
      {
        id: "12/10",
        title: "Exam Fee Sheet",
        link: "exam/exam-fee-sheet",
      },
    ],
  },
  {
    id: "13",
    title: "Result",
    icon: "PiExamBold",
    children: [
      {
        id: "13/01",
        title: "Mark Input",
        link: "result/mark-input",
      },
      {
        id: "13/02",
        title: "Tabulation Sheet",
        link: "result/tabulation-sheet",
      },
      {
        id: "13/03",
        title: "Progress Report",
        link: "result/progress-report",
      },
      {
        id: "13/04",
        title: "Certificate",
        link: "result/certificate",
      },
    ],
  },
  {
    id: "14",
    title: "Routine",
    icon: "PiExamBold",
    children: [
      {
        id: "14/01",
        title: "Routines",
        link: "routine/routine-list",
      },
      {
        id: "14/02",
        title: "Class Routine",
        link: "routine/class-routine",
      },
      {
        id: "14/03",
        title: "Teacher Schedule",
        link: "routine/teacher-schedule",
      },
    ],
  },

  //nested menu item pattern
  // {
  //   id: "05",
  //   title: "Academic Events",
  //   icon: "MdOutlineEventAvailable",
  //   children: [
  //     {
  //       id: "05/01",
  //       title: "Events",
  //       link: "./",
  //     },
  //     {
  //       id: "05/02",
  //       title: "Event List",
  //       link: "./",
  //     },
  //   ],
  // },
  // {
  //   id: "06",
  //   title: "Communication",
  //   icon: "CgCommunity",
  //   children: [
  //     {
  //       id: "06/01",
  //       title: "SMS",
  //       children: [
  //         {
  //           id: "06/01/01",
  //           title: "Parents",
  //           link: "./",
  //         },
  //         {
  //           id: "06/01/02",
  //           title: "Payment",
  //           link: "./",
  //         },
  //         {
  //           id: "06/01/03",
  //           title: "Notification",
  //           link: "./",
  //         },
  //       ],
  //     },
  //     {
  //       id: "06/02",
  //       title: "Call",
  //       children: [
  //         {
  //           id: "06/02/01",
  //           title: "Parents",
  //           link: "./",
  //         },
  //         {
  //           id: "06/02/02",
  //           title: "Events",
  //           link: "./",
  //         },
  //         {
  //           id: "06/02/03",
  //           title: "Exams",
  //           link: "./",
  //         },
  //         {
  //           id: "06/02/04",
  //           title: "Result",
  //           link: "./",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default mainMenu;
