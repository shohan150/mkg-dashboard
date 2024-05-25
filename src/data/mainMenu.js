const mainMenu = [
  {
    sectionTitle: "Profiles",
    children: [
      {
        title: "DashBoards",
        icon: "Icon",
        link: "./",
      },
      {
        title: "Institute Profile",
        icon: "Icon",
        link: "./",
      },
    ],
  },
  {
    sectionTitle: "Apps & Pages",
    children: [
      {
        title: "Academic Events",
        icon: "Icon",
        children: [
          {
            title: "Events",
            link: "./",
          },
          {
            title: "Event List",
            link: "./",
          },
        ],
      },
      {
        title: "Communication",
        icon: "Icon",
        children: [
          {
            title: "SMS",
            children: [
              {
                title: "parents",
                link: "./",
              },
              {
                title: "payment",
                link: "./",
              },
              {
                title: "notification",
                link: "./",
              },
            ],
          },
          {
            title: "Call",
            children: [
              {
                title: "parents",
                link: "./",
              },
              {
                title: "events",
                link: "./",
              },
              {
                title: "exams",
                link: "./",
              },
              {
                title: "result",
                link: "./",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default mainMenu;
