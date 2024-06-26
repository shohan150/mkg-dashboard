import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
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
