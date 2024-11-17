import { useState } from "react";
import { useTranslation } from "react-i18next";
import mainMenu from "../../data/mainMenu";
import SidebarSearchMenuItem from "./SidebarSearchMenuItem";

export default function SidebarSearchMenu({ searchTerm }) {
  const [itemId, setItemId] = useState([]);

  const { t } = useTranslation();

  return (
    <ul className="text-white py-6">
      {/* if item has no icon then it a header item. directly print list element for the header. for actual menu items, pass the component. */}
      {mainMenu.map((item) => (
        <>
          {item.icon && (
            <SidebarSearchMenuItem
              key={item.id}
              item={item}
              itemId={itemId}
              setItemId={setItemId}
              searchTerm={searchTerm}
            />
          )}
        </>
      ))}
    </ul>
  );
}
