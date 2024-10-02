import { IoPrintOutline } from "react-icons/io5";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { useReactToPrint } from "react-to-print";

export default function StudentIdHeader({idCardsRef}) {
    const handlePrint = useReactToPrint({
        content: () => idCardsRef.current,
      });

  return (
    <div className="flex justify-end items-center">
      <div className="btns flex gap-2">
          <button className="rounded p-2 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200">
            View Id Card
          </button>
          <button className="rounded p-2 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200">
            <MdOutlineQrCodeScanner size={22} />
          </button>
          <button onClick={handlePrint} className="rounded p-2 bg-primary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200">
            <IoPrintOutline size={22} />
          </button>
        </div>
    </div>
  );
}
