import { useState } from "react";
import AdditionalField from "./AdditionalField";
import SelectClassSection from "./SelectClassSection";
import SelectNotification from "./SelectNotification";

export default function Notifications() {
  const [notificationType, setNotificationType] = useState("Pay Slip Info");

    return (
      <div className="bg-white rounded-md p-4 md:px-6 md:py-8 my-4 space-y-4">
        <SelectNotification notificationType={notificationType} setNotificationType={setNotificationType} />

        <SelectClassSection />

        <AdditionalField notificationType={notificationType} />

        {/* submit button */}
        <button
            type="submit"
            className="rounded w-36 p-2 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200"
          >
            Submit
        </button>
      </div>
    );
}