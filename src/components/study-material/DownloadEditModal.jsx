import Modal from "../common/Modal";

export default function DownloadEditModal({ editContent, setEditContent, isEdit, onClose }) {

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
            <label className="">Class</label>
            <input
               type="text"
               placeholder="Class"
               value={editContent.class}
               onChange={(e)=> setEditContent({...editContent, class:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Document Type</label>
            <input
               type="text"
               placeholder="Document Type"
               value={editContent.type}
               onChange={(e)=> setEditContent({...editContent, type:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="" htmlFor="">Upload File</label>
            <input 
               type="file"
               value={editContent.file}
               onChange={(e)=> setEditContent({...editContent, file:e.target.value}) }
               className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" />
         </div>
      </div>
   </Modal>
    );
}