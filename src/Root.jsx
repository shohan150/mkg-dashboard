import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/homePage/Home";
import EditInstituteInfo from "./components/instituteProfile/EditInstituteInfo";
import InstituteProfile from "./components/instituteProfile/InstituteProfile";
import AcademicSetup from "./components/settings/AcademicSetup";
import ChooseableSubject from "./components/settings/ChooseableSubject";
import SubjectAssign from "./components/settings/SubjectAssign";

function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
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
              element: <AcademicSetup />,
            },
            {
              path: "notification-sms",
              element: <Home />,
            },
            {
              path: "sms-template",
              element: <SubjectAssign />,
            },
            {
              path: "add-sms-template",
              element: <ChooseableSubject />,
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
