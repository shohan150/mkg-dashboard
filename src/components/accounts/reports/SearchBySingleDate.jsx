import { useTranslation } from "react-i18next";

export default function SearchBySingleDate() {
   const { t } = useTranslation();

   return (
      <form className="md:flex gap-7 items-center mb-2">
         {/* select Date */}
         <div className="flex items-center gap-2 md:w-5/12 my-2">
            <label className="pr-2 whitespace-nowrap">{t("module.accounts.select_date")}</label>
            <input
               type="date"
               className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         {/* Submit Button */}
         <div className="flex items-center gap-2 md:w-2/12 justify-end my-4">
            <button
               type="submit"
               className="rounded w-full p-3 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200"
            >
               {t("module.accounts.search")}
            </button>
         </div>
      </form>
   );
}
