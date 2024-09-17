import Modal from "../../common/Modal";

export default function EventAddModal({ isAdd, onClose }) {
    return (
      <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Add Event</h2>
      <div className="my-8 space-y-3">
         <div className="space-y-2">
            <label className="">Title</label>
            <input
               type="text"
               placeholder="Title"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
         
         <div className="space-y-2">
            <label className="">Start</label>
            <input
               type="text"
               placeholder="Start"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">End</label>
            <input
               type="text"
               placeholder="End"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
      </div>

   </Modal>
    );
}