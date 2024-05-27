const mainMenu = [
  {
    id: "01",
    title: "Profiles",
    icon: false,
  },
  {
    id: "02",
    title: "DashBoards",
    icon: "RiDashboardHorizontalFill",
    link: "./",
  },
  {
    id: "03",
    title: "Institute Profile",
    icon: "HiOutlineBuildingStorefront",
    link: "./",
  },
  {
    id: "04",
    title: "Apps & Pages",
    icon: false,
  },
  {
    id: "05",
    title: "Academic Events",
    icon: "MdOutlineEventAvailable",
    children: [
      {
        id: "05/01",
        title: "Events",
        link: "./",
      },
      {
        id: "05/02",
        title: "Event List",
        link: "./",
      },
    ],
  },
  {
    id: "06",
    title: "Communication",
    icon: "CgCommunity",
    children: [
      {
        id: "06/01",
        title: "SMS",
        children: [
          {
            id: "06/01/01",
            title: "Parents",
            link: "./",
          },
          {
            id: "06/01/02",
            title: "Payment",
            link: "./",
          },
          {
            id: "06/01/03",
            title: "Notification",
            link: "./",
          },
        ],
      },
      {
        id: "06/02",
        title: "Call",
        children: [
          {
            id: "06/02/01",
            title: "Parents",
            link: "./",
          },
          {
            id: "06/02/02",
            title: "Events",
            link: "./",
          },
          {
            id: "06/02/03",
            title: "Exams",
            link: "./",
          },
          {
            id: "06/02/04",
            title: "Result",
            link: "./",
          },
        ],
      },
    ],
  },
];

export default mainMenu;
