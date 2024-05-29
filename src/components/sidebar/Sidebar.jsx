import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <nav
      id="sidebar-menu"
      className="fixed transition-all duration-500 ease-in-out h-screen bg-primary bg-[linear-gradient(270deg,rgba(51,148,225,0.18),transparent)] shadow-sm w-0 lg:w-64 xl:w-72 scrollbar"
    >
      <div className="h-full overflow-y-auto">
        <SidebarHeader />
        <SidebarMenu />
      </div>
    </nav>
  );
}
