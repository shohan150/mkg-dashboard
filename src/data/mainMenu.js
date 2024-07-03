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
    title: "Parent Info",
    icon: "RiParentFill",
    children: [
      {
        id: "08/01",
        title: "Add Parent",
        link: "parent-info/add-parent",
      },
      {
        id: "08/02",
        title: "Parents List",
        link: "parent-info/parents-list",
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
