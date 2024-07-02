import Modal from "../../common/Modal";

export default function AddHolidayModal({isAdd, onClose}) {
    return (
   <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Add Holiday</h2>
      <div className="my-8 space-y-3">
         <div className="space-y-2">
            <label className="">Holiday Name</label>
            <input
               type="text"
               placeholder="Holiday Name"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>


         <div className="space-y-2">
            <label className="">Date</label>
            <input
               type="date"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Session Year</label>
            <input
               type="text"
               placeholder="Session Year"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
      </div>
   </Modal>
    );
}