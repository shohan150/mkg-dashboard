import Modal from "../../common/Modal";

export default function EditTypeModal({ editContent, setEditContent, isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit Leave Type</h2>

      <div className="mt-2 mb-4 space-y-1">
        <div className="space-y-1">
          <label className="text-textGray">Banner Image</label>
          <input 
          value={editContent?.image}
          onChange={(e)=> setEditContent({...editContent, image:e.target.value}) }
          className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file" />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Sub-Heading</label>
          <input
          type="text"
          value={editContent?.subHeading}
          onChange={(e)=> setEditContent({...editContent, subHeading:e.target.value}) }
          placeholder="Enter Sub-Heading"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Main Heading</label>
          <input
          type="text"
          value={editContent?.mainHeading}
          onChange={(e)=> setEditContent({...editContent, mainHeading:e.target.value}) }
          placeholder="Enter Main Heading"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Banner Text</label>
          <input
          type="text"
          value={editContent?.bannerText}
          onChange={(e)=> setEditContent({...editContent, bannerText:e.target.value}) }
          placeholder="Enter Banner Text"
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-textGray">Read More Link</label>
          <input
          type="text"
          value={editContent?.readMoreLink}
          onChange={(e)=> setEditContent({...editContent, readMoreLink:e.target.value}) }
          placeholder="Enter Read More Link"
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