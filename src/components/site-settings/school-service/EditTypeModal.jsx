import Modal from "../../common/Modal";

export default function EditTypeModal({ editContent, setEditContent, isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit School Service</h2>

      <div className="mt-2 mb-4 space-y-1">
        <div className="space-y-1">
          <label className="text-textGray">Service</label>
          <input
          type="text"
          placeholder="Enter Service"
          value={editContent?.service}
          onChange={(e)=> setEditContent({...editContent, service:e.target.value}) }
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Package</label>
          <input
          type="text"
          placeholder="Enter Package"
          value={editContent?.package}
          onChange={(e)=> setEditContent({...editContent, package:e.target.value}) }
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Price</label>
          <input
          type="number"
          placeholder="Enter Price"
          value={editContent?.price}
          onChange={(e)=> setEditContent({...editContent, price:e.target.value}) }
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Description</label>
          <textarea
          placeholder="Enter Description"
          value={editContent?.description}
          onChange={(e)=> setEditContent({...editContent, description:e.target.value}) }
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-textGray">Status</label>
          <select
          id=""
          name=""
          value={editContent?.status}
          onChange={(e)=> setEditContent({...editContent, status:e.target.value}) }
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