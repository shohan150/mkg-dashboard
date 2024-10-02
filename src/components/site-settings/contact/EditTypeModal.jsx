import Modal from "../../common/Modal";

export default function EditTypeModal({ editContent, setEditContent, isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit Leave Type</h2>

      <div className="mt-2 mb-4 space-y-1">
        <div className="space-y-1">
          <label className="text-textGray">Text</label>
          <input
          type="text"
          placeholder="Enter Text"
          value={editContent?.text}
          onChange={(e)=> setEditContent({...editContent, text:e.target.value}) }
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Office Address</label>
          <input
          type="text"
          placeholder="Enter Office Address"
          value={editContent?.officeAddress}
          onChange={(e)=> setEditContent({...editContent, officeAddress:e.target.value}) }
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Mobile</label>
          <input
          type="text"
          placeholder="Enter Mobile"
          value={editContent?.mobile}
          onChange={(e)=> setEditContent({...editContent, mobile:e.target.value}) }
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Email</label>
          <input
          type="email"
          placeholder="Enter Email"
          value={editContent?.email}
          onChange={(e)=> setEditContent({...editContent, email:e.target.value}) }
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-textGray">Google Map Link</label>
          <input
          type="text"
          placeholder="Enter Google Map Link"
          value={editContent?.map}
          onChange={(e)=> setEditContent({...editContent, map:e.target.value}) }
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