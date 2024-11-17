import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function DropDownSearch({ data, searchTerm }) {
  const [isOpen, setIsOpen] = useState(true);

  const {t} = useTranslation();


  function handleMenuClick() {
    setIsOpen((state) => !state);
  }

  const currentPath = useLocation();

  //here starts the searching code
  let show = data;
  //if in title, show the item fully.
  const existInTitle = t(data.title).toLowerCase().includes(searchTerm.toLowerCase());

  // if not in title, check children/
  if(!existInTitle) {

    //Case 1: if item has no children, check on it directly.
    if (!data.children) return null;

    //Case 2 : if item has children (1st level), show as opened
    if (data.children) {
      const existing = data.children.filter((child) => {
        const doesExist = t(data.title).toLowerCase().includes(searchTerm.toLowerCase());
        if (doesExist) return child;
        return null;
      });

      if (existing.length > 0) {
        show.children = existing;
      } else { return null; }
    }
  }


  return (
    <li
      className={`text-[#ffffffab] group/dd  deuration-200 relative ${
        isOpen && data?.children && "bg-[#00000010]"
      }`}
    >
      <Link to={data?.link ? data.link : currentPath}>
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
            {t(data.title)}
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
              <Link to={innerDD.link} key={innerDD.id}>
                <li className="hover:bg-[#00000010] hover:text-white duration-200 pl-12 pr-6">
                  {t(innerDD.title)}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </Link>
    </li>
  );
}
