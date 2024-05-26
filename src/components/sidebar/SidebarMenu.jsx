import { useState } from "react";
import mainMenu from "../../data/mainMenu";
import SidebarMenuItem from "./SidebarMenuItem";

export default function SidebarMenu() {
  //make sure only one dropdown is open at a time
  const [itemId, setItemId] = useState(null);

  return (
    <ul className="text-white py-6">
      {mainMenu.map((item) => (
        <>
          {item.icon ? (
            <SidebarMenuItem
              key={item.id}
              item={item}
              itemId={itemId}
              setItemId={setItemId}
            />
          ) : (
            <li
              key={item.id}
              className="text-[#8268a8] uppercase font-bold text-sm leading-10 pt-5 px-6"
            >
              {item.title}
            </li>
          )}
        </>
      ))}
    </ul>
  );
}
