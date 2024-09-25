import Modal from "../../../common/Modal";

export default function AddPackageModal({isAdd, onClose}) {
    return (
   <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">New Package</h2>
      <div className="my-8 space-y-3">
         <div className="space-y-2">
            <label className="">Package Name</label>
            <input
               type="text"
               placeholder="Package Name"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Package Amount</label>
            <input
               type="number"
               placeholder="Package Amount"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
      </div>
   </Modal>
    );
}