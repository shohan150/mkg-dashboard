import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function DropDown({ data, ddId, setDDId }) {
  const [isOpen, setIsOpen] = useState(false);

  isOpen && data.id !== ddId && setIsOpen(false);

  function handleMenuClick() {
    setIsOpen((state) => !state);
    setDDId(data.id);
  }

  return (
    <li
      className={`text-[#ffffffab] group/dd  deuration-200 relative ${
        isOpen && data?.children && "bg-[#00000010]"
      }`}
    >
      <div
        className="flex items-center gap-2 pl-12 pr-6 hover:bg-[#00000010] hover:text-white"
        onClick={handleMenuClick}
      >
        <span
          className={`w-[5px] h-[5px] rounded-full group-hover/dd:w-[7px] group-hover/dd:h-[7px] duration-100 bg-[#ffffff65] group-hover/dd:bg-[#ffffff90] absolute top-4 left-7 ${
            isOpen && data?.children && "w-[7px] h-[7px] bg-[#ffffff90]"
          }`}
        ></span>
        <h5 className={`flex-1 ${isOpen && data?.children && "text-white"}`}>
          {data.title}
        </h5>
        {data?.children && (
          <FaAngleDown
            className={`font-thin text-sm duration-200 ${
              isOpen && "rotate-180"
            }`}
          />
        )}
      </div>
      {isOpen && data?.children && (
        <ul className="py-2">
          {data.children.map((innerDD) => (
            <li
              key={innerDD.id}
              className="hover:bg-[#00000010] hover:text-white duration-200 pl-12 pr-6"
            >
              {innerDD.title}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
