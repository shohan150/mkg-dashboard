import Modal from "../../common/Modal";

export default function EditTypeModal({ editContent, setEditContent, isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit Gallery Image</h2>

      <div className="mt-2 mb-4 space-y-2">
        <div className="space-y-1">
          <label className="text-textGray">Gallery Image</label>
          <input 
          value={editContent?.image}
          onChange={(e)=> setEditContent({...editContent, image:e.target.value}) }
          className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file" />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Image Title</label>
          <input
          type="text"
          placeholder="Enter Image Title"
          value={editContent?.title}
          onChange={(e)=> setEditContent({...editContent, title:e.target.value}) }
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