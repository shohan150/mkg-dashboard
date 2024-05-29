import Sidebar from "../components/sidebar/Sidebar";
import TopNavbar from "../components/topNavbar/TopNavbar";
import Home from "./Home";

export default function Root() {
  return (
    // sidebar and topNavbar common in all pages
    <div className="font-roboto text-base font-normal text-gray-600 dark:text-gray-400 dark:bg-gray-800">
      <div className="wrapper bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
        <Sidebar />
        <div className="bg-secondary text-textBlack flex flex-col min-h-screen transition-all duration-500 ease-in-out p-3 ml-0 lg:ml-64 xl:ml-72">
          <TopNavbar />
          <Home />
        </div>
      </div>
    </div>
  );
}
