import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/topNavbar/Footer";
import TopNavbar from "../components/topNavbar/TopNavbar";
import Home from "./Home";

export default function Root() {
  const [showSidebar, setShowSidebar] = useState(false);
  console.log(showSidebar);

  return (
    // sidebar and topNavbar common in all pages
    <div className="font-roboto text-base font-normal text-gray-600 dark:text-gray-400 dark:bg-gray-800">
      <div className="wrapper bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="bg-secondary text-textBlack flex flex-col min-h-screen transition-all duration-500 ease-in-out p-3 ml-0 xl:ml-72">
          <TopNavbar setShowSidebar={setShowSidebar} />
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}
