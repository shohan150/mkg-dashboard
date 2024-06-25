import { useEffect, useRef } from "react";

export default function EditModal({ children, isOpen, onClose }) {

   const modalRef = useRef(null);

   useEffect(() => {
     const handleClickOutside = (event) => {
       if (modalRef.current && !modalRef.current.contains(event.target)) {
         onClose();
       }
     };
 
     document.addEventListener('mousedown', handleClickOutside);
 
     return () => document.removeEventListener('mousedown', handleClickOutside);
   }, [isOpen, onClose]);


   if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-500/50 transition duration-300 ease-in-out">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
        {children}
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md px-4 py-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
    );
}