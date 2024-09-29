import Modal from "../common/Modal";

export default function LTypeModal({ isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit Withdraw Entry</h2>
      <div className="my-8 space-y-2">
         <div className="space-y-2">
            <h5 className="">Withdrawn Amount :</h5>
            <input
               type="number"
               placeholder="Please type the amount"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
         <div className="space-y-2">
            <h5 className="">Received By :</h5>
            <input
               type="text"
               placeholder="Please type a name"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
         <div className="space-y-2">
            <h5 className="">Note :</h5>
            <input
               type="text"
               placeholder="Write Description"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
      </div>
   </Modal>
    );
}