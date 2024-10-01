import Modal from "../../common/Modal";

export default function AddTypeModal({ isAdd, onClose }) {
    return (
    <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Add Page Content</h2>
      <div className="mt-2 mb-4 space-y-1">
        <div className="space-y-1">
          <label className="text-textGray">Page Name</label>
          <input
          type="text"
          placeholder="Enter Page Name"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Heading</label>
          <input
          type="text"
          placeholder="Enter Heading"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Sub-Heading</label>
          <input
          type="text"
          placeholder="Enter Sub-Heading"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Image</label>
          <input className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file" />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Content</label>
          <textarea name="" id="" rows="3" className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"></textarea>
        </div>
        
        <div className="space-y-1">
          <label className="text-textGray">Status</label>
          <select
          id=""
          name=""
          className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
   </Modal>
    );
}