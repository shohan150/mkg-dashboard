import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/homePage/Home";
import AcademicSetup from "./components/settings/AcademicSetup";
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
          path: "settings",
          children: [
            {
              path: "academic_setup",
              element: <AcademicSetup />,
            },
            {
              path: "class_config",
              element: <Home />,
            },
            {
              path: "subject_assign",
              element: <SubjectAssign />,
            },
            {
              path: "chooseable_subject",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default Root;
