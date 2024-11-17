import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import Icons from "./Icons";

export default function SidebarSearchMenuItem({ item, searchTerm }) {
  const [isOpen, setIsOpen] = useState(true);
  const [ddId, setDDId] = useState(null);

  const {t} = useTranslation();

  function handleMenuClick() {
    setIsOpen((state) => !state);
  }

  // if the item has a DropDown, means no link attached than keep the current link
  const currentPath = useLocation();

  //here starts the searching code
  let show = item;
  //if in title, show the item fully.
  const existInTitle = t(item.title).toLowerCase().includes(searchTerm.toLowerCase());

  // if not in title, check children/
  if(!existInTitle) {

    //Case 1: if item has no children, check on it directly.
    if (!item.children) return null;

    //Case 2 : if item has children (1st level), show as opened
    if (item.children) {
      const existing = item.children.filter((child, i) => {
        const doesExist = t(child.title).toLowerCase().includes(searchTerm.toLowerCase());
        if (doesExist) return child;
        
        // Case 3: if item has children (2nd level), search on that
        if(child.children) {
          const existing2 = child.children?.filter((childL2) => {
            const doesExist2 = t(childL2.title).toLowerCase().includes(searchTerm.toLowerCase());
            console.log(t(childL2.title));

            if (doesExist2) return childL2;
          })

          if (existing2.length > 0) { 
            show.children[i] = existing2;
            
          } else { return null; }
        }
        return null;
      });

      if (existing.length > 0) {
        show.children = existing;
      } else { return null; }
    }
  }
  
  
  return (
    <li
      className={`leading-10 group/main text-[#ffffff85] hover:text-[#ffffffab] hover:bg-[#00000010] duration-200 relative ${
        isOpen && "bg-[#00000010] text-[#b4a0d2]"
      }`}
    >
      <Link to={show?.link ? show.link : currentPath}>
        <div className="flex gap-2 items-center px-6" onClick={handleMenuClick}>
          <Icons name={show.icon} />
          <h4
            className={`text-[#ffffffab] group-hover/main:text-white duration-200 flex-1 ${
              isOpen && "text-[#fff]"
            }`}
          >
            {t(show.title)}
          </h4>
          {show?.children && (
            <FaAngleDown
              className={`font-thin text-sm duration-200 ${
                isOpen && "rotate-180"
              }`}
            />
          )}
        </div>
        {isOpen && show?.children && (
          <ul className="py-2 before:content-[''] before:block before:absolute before:z-1 before:left-[30px] before:top-10 before:bottom-0 before:border-l before:border-solid before:border-[#ffffff35]">
            {item.children.map((dropdown) => (
              <DropDown
                key={dropdown.id}
                data={dropdown}
                ddId={ddId}
                setDDId={setDDId}
                searchTerm={searchTerm}
              />
            ))}
          </ul>
        )}
      </Link>
    </li>
  );
}
