import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import DropDown from "./DropDown";
import Icons from "./Icons";

export default function SidebarMenuItem({ item, itemId, setItemId }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen((state) => !state);
  }

  return (
    <li
      className={`leading-10 group/main text-[#876fab] hover:text-[#b4a0d2] hover:bg-[#00000010] duration-200 relative ${
        isOpen && "bg-[#00000010] text-[#b4a0d2]"
      }`}
    >
      <div className="flex gap-2 items-center px-6" onClick={handleMenuClick}>
        <Icons name={item.icon} />
        <h4
          className={`text-[#bdafd1] group-hover/main:text-white duration-200 flex-1 ${
            isOpen && "text-purple-100"
          }`}
        >
          {item.title}
        </h4>
        {item?.children && (
          <FaAngleDown
            className={`font-thin text-sm duration-200 ${
              isOpen && "rotate-180"
            }`}
          />
        )}
      </div>
      {isOpen && item?.children && (
        <ul className="py-2 before:content-[''] before:block before:absolute before:z-1 before:left-[30px] before:top-10 before:bottom-0 before:border-l before:border-solid before:border-[#614b82]">
          {item.children.map((dropdown) => (
            <DropDown key={dropdown.id} data={dropdown} />
          ))}
        </ul>
      )}
    </li>
  );
}
