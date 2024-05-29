import Mail from "./Mail";
import Notifications from "./Notifications";
import Profile from "./Profile";
import SchoolName from "./SchoolName";

export default function TopNavbar() {
  return (
    <div className="flex items-center justify-between bg-primary rounded-md p-4">
      {/* school name */}
      <SchoolName />
      {/* actions */}
      <div className="flex items-center">
        <Mail />
        <Notifications />
        <Profile />
      </div>
    </div>
  );
}
