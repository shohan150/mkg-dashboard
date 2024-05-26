import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function DropDown({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen((state) => !state);
  }
  return (
    <li
      className="text-[#bdafd1] pl-12 group/dd  hover:bg-[#00000010] hover:text-white deuration-200 relative"
      onClick={handleMenuClick}
    >
      <div className="flex items-center gap-2 pr-6">
        <span className="w-[5px] h-[5px] rounded-full group-hover/dd:w-[7px] group-hover/dd:h-[7px] duration-100 bg-[#876fab] absolute top-4 left-7"></span>
        <h5 className="flex-1">{data.title} </h5>
        {data?.children && (
          <FaAngleDown
            className={`font-thin text-sm duration-200 ${
              isOpen && "rotate-180"
            }`}
          />
        )}
      </div>
    </li>
  );
}
