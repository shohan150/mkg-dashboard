import Modal from "../../common/Modal";

export default function LTypeModal({ editContent, isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit Leave Type</h2>
      <div className="my-8 space-y-2">
        <h5 className="text-center text-lg">Leave Name</h5>
        <input
          type="text"
          defaultValue={editContent}
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
        />
      </div>
   </Modal>
    );
}