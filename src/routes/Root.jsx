import Sidebar from "../components/sidebar/Sidebar";
import Home from "./Home";

export default function Root() {
  return (
    <div className="font-sans text-base font-normal text-gray-600 dark:text-gray-400 dark:bg-gray-800">
      <div className="wrapper overflow-x-hidden bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}
