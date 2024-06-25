import { useEffect, useRef } from "react";
import { MdHighlightOff } from "react-icons/md";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar({ showSidebar, setShowSidebar }) {

  const sidebarRef = useRef(null);

  useEffect(() => {
    // check if clicked outside of sidebar area. if dom node exists, means sidebar is open, then sidebarRef.current has value. if so, then, check if it contains the clicked element on every mousedown event.
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };
    //function assigned to eventListener.
    document.addEventListener('mousedown', handleClickOutside);

    //callback to remove the eventLitener.
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowSidebar]);

  return (
      <nav
      ref={sidebarRef}
        id="sidebar-menu"
        className={`fixed transition-all duration-500 ease-in-out h-screen bg-primary bg-[linear-gradient(270deg,rgba(51,148,225,0.18),transparent)] shadow-sm w-0 xl:w-72 scrollbar ${
          showSidebar && "w-72"
        } z-20`}
      >
        <div className="h-full overflow-y-auto relative scrollbar-webkit">
          <SidebarHeader />
          <SidebarMenu />
          <MdHighlightOff
            className="text-white w-6 h-6 absolute top-[18px] right-3 xl:hidden"
            onClick={() => setShowSidebar(false)}
          />
        </div>
      </nav>
  );
}
