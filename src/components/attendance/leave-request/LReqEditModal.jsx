import Modal from "../../common/Modal";

export default function LReqEditModal({ editContent, setEditContent, isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit Leave Type</h2>
      <div className="my-8 space-y-2">
         <div className="space-y-2">
            <label className="">Employee Name</label>
            <input
               type="text"
               value={editContent.name}
               onChange={(e)=> setEditContent({...editContent, name:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Leave Type</label>
            <select
            id=""
            name=""
            value={editContent.type}
            onChange={(e)=> setEditContent({...editContent, type:e.target.value}) }
            className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
            >
               <option value="Sick Leave">Sick Leave</option>
               <option value="Special Leave">Special Leave</option>
               <option value="Paid Leave">Paid Leave</option>
               <option value="Alloted Leave">Alloted Leave</option>
            </select>
         </div>

         <div className="space-y-2">
            <label className="">Start Time</label>
            <input
               type="date"
               value={editContent.start}
               onChange={(e)=> setEditContent({...editContent, date:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">End Time</label>
            <input
               type="date"
               value={editContent.end}
               onChange={(e)=> setEditContent({...editContent, date:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
      </div>
   </Modal>
    );
}