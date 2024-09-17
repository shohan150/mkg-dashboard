import Modal from "../../common/Modal";

export default function EventEditModal({ editContent, setEditContent, isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit Document Data</h2>
      <div className="my-8 space-y-2">
         <div className="space-y-2">
            <label className="">Title</label>
            <input
               type="text"
               placeholder="Title"
               value={editContent.name}
               onChange={(e)=> setEditContent({...editContent, name:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Start</label>
            <input
               type="text"
               placeholder="Start"
               value={editContent.start}
               onChange={(e)=> setEditContent({...editContent, start:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
         <div className="space-y-2">
            <label className="">End</label>
            <input
               type="text"
               placeholder="End"
               value={editContent.end}
               onChange={(e)=> setEditContent({...editContent, end:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

      </div>
   </Modal>
    );
}