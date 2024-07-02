import { useEffect, useRef } from "react";

export default function DeleteModal({ title="this entry", isOpen, onClose, handleConfirmDlt}) {

   const modalRef = useRef(null);

   useEffect(() => {
     // check if clicked outside of modal area. 
     const handleClickOutside = (event) => {
       if (modalRef.current && !modalRef.current.contains(event.target)) {
         onClose();
       }
     };
     //function assigned to eventListener.
     document.addEventListener('mousedown', handleClickOutside);

     //callback to remove the eventLitener.
     return () => document.removeEventListener('mousedown', handleClickOutside);
   }, [isOpen, onClose]);

   // return modal jsx when isOpen is true.
   if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50 transition duration-300 ease-in-out">
          <div ref={modalRef} className={`bg-white rounded-lg shadow-lg p-4 w-2/3 sm:w-1/2 lg:w-1/3`}>

            {/* modal content */}
            <h5 className="text-lg leading-9 mb-6">Are you sure to delete {` ${title}`}?</h5>

            {/* action buttons */}
            <div className="flex justify-end items-center space-x-2 xl:space-x-3">
              <button
                className="bg-blue px-4 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200"
                onClick={handleConfirmDlt}
              >
                Confirm
              </button>
              <button
                className="bg-red px-4 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
    );
}