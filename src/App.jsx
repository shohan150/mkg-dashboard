import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/topNavbar/Footer";
import TopNavbar from "./components/topNavbar/TopNavbar";

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  //take at the top of the page whenever route is changed.
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // sidebar and topNavbar common in all pages
    <div className="font-roboto text-base font-normal text-gray-600 dark:text-gray-400 dark:bg-gray-800">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="bg-secondary text-textBlack flex flex-col justify-between min-h-screen transition-all duration-500 ease-in-out p-3 ml-0 xl:ml-72">
          <div>
            <TopNavbar setShowSidebar={setShowSidebar} />
            <Outlet />
          </div>
          <Footer />
        </div>
        {/* an empty div to contain modals and popups */}
        <div id="portal-root"></div>
    </div>
  );
}
