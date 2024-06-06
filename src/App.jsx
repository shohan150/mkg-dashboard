import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AcademicSetup from "./routes/AcademicSetup";
import Home from "./routes/Home";
import Root from "./routes/Root";
import SubjectAssign from "./routes/SubjectAssign";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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

export default App;
