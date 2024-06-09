import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/topNavbar/Footer";
import TopNavbar from "./components/topNavbar/TopNavbar";

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    // sidebar and topNavbar common in all pages
    <div className="font-roboto text-base font-normal text-gray-600 dark:text-gray-400 dark:bg-gray-800">
      <div className="wrapper bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="bg-secondary text-textBlack flex flex-col justify-between min-h-screen transition-all duration-500 ease-in-out p-3 ml-0 xl:ml-72">
          <div>
            <TopNavbar setShowSidebar={setShowSidebar} />
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
