import Modal from "../../../common/Modal";

export default function PackageEditModal({ editContent, setEditContent, isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit Student Waiver</h2>
      <div className="my-8 space-y-2">
         <div className="space-y-2">
            <label className="">Student Name</label>
            <input
               type="text"
               placeholder="Student Name"
               value={editContent.name}
               onChange={(e)=> setEditContent({...editContent, name:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Package Amount</label>
            <input
               type="number"
               placeholder="Package Amount"
               value={editContent.amount}
               onChange={(e)=> setEditContent({...editContent, amount:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
      </div>
   </Modal>
    );
}