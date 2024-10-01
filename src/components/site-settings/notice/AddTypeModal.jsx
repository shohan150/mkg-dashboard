import Modal from "../../common/Modal";

export default function AddTypeModal({ isAdd, onClose }) {
    return (
    <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Add Notice</h2>
      <div className="mt-2 mb-4 space-y-2">
        <div className="space-y-1">
          <label className="text-textGray">Date</label>
          <input
          type="date"
          placeholder="Enter Date"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Notice Title</label>
          <input
          type="text"
          placeholder="Enter Notice Title"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Notice Details</label>
          <textarea
          placeholder="Enter Notice Details"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Expire Date</label>
          <input
          type="date"
          placeholder="Enter Expire Date"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">File Attached</label>
          <input
          type="file"
          placeholder="Enter File Attached"
          className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none"
          />
        </div>
      </div>
   </Modal>
    );
}