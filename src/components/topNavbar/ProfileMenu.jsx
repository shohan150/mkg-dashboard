import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ProfileMenu() {

  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const {i18n} = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("school-dashboard-language", lang);
    }
  }, [i18n, lang]);


  const linkedMenu = [
    {
      name: "Profile",
      link: "#"
    },
    {
      name: "Settings",
      link: "#"
    },
    {
      name: "Logout",
      link: "#"
    }
  ]
  return (
   <div className="absolute z-50 bg-white shadow rounded top-9 md:top-10 right-0 w-32 md:w-40 py-1 text-primary font-medium text-end tracking-wide cursor-pointer">
    {
      linkedMenu.map((item, index) => (
        <Link key={index} to={item.link}>
          <p className={`px-3 md:px-4 py-[6px] hover:bg-bgGray ${index !=0 && "border-t-2"}`}>{item.name}</p>
        </Link>
      ))
    }

    <p className="px-3 md:px-4 py-[6px] hover:bg-bgGray border-t-2" onClick={() => setIsOpen(!isOpen)}>Language</p>
    {
      isOpen && (
        <form className="pr-3 md:pr-4 pb-1">
          <label className="block">
            <input 
              type="radio" 
              name="language" 
              value="Bangla" 
              className="mr-[11px]" 
              checked={lang === "bn"} 
              onChange={() => setLang("bn")}
            />
            Bangla
          </label>
          <label className="block">
            <input 
              type="radio" 
              name="language" 
              value="English" 
              className="mr-2" 
              checked={lang === "en"} 
              onChange={() => setLang("en")}
            />
            English
          </label>
        </form>
      )
    }

   </div>
  )
}
