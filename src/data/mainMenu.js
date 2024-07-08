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
        title: "Subject Assign",
        link: "settings/subject-assign",
      },
      {
        id: "05/04",
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
