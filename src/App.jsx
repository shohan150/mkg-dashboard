import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumb from "./components/common/Breadcrumb";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/topNavbar/Footer";
import TopNavbar from "./components/topNavbar/TopNavbar";

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  //take at the top of the page whenever route is changed.
  const { pathname } = useLocation();
  const moduleName = pathname.split('/')[1].replace(/-/g, " ");
  const routeName = pathname.split('/')[2].replace(/-/g, " ");

  
  useEffect(() => {
      window.scrollTo(0, 0);
      //also close sidebar on mobile on route change.
      setShowSidebar(false);
  }, [pathname]);

  return (
    // sidebar and topNavbar common in all pages
    <div className="font-roboto text-base font-normal text-gray-600 dark:text-gray-400 dark:bg-gray-800 relative">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className={`bg-secondary text-textBlack flex flex-col justify-between min-h-screen transition-all duration-500 ease-in-out p-3 ml-0 xl:ml-72 ${showSidebar && "max-xl:opacity-65"}`}>
        <div>
          <TopNavbar setShowSidebar={setShowSidebar} />
          <Breadcrumb module={moduleName} route={routeName} />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
