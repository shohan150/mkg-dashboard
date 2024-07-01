import Modal from "../../common/Modal";

export default function AddLTypeModal({ isAdd, onClose }) {
    return (
      <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Add Leave Type</h2>
      <div className="my-8 space-y-2">
        <h5 className="text-center text-lg">New Leave Name</h5>
        <input
          type="text"
          placeholder="Please type a name"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
        />
      </div>
   </Modal>
    );
}