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
            title: "parents",
            link: "./",
          },
          {
            id: "06/01/02",
            title: "payment",
            link: "./",
          },
          {
            id: "06/01/03",
            title: "notification",
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
            title: "parents",
            link: "./",
          },
          {
            id: "06/02/02",
            title: "events",
            link: "./",
          },
          {
            id: "06/02/03",
            title: "exams",
            link: "./",
          },
          {
            id: "06/02/04",
            title: "result",
            link: "./",
          },
        ],
      },
    ],
  },
];

export default mainMenu;
