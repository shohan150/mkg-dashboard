import Modal from "../common/Modal";

export default function DownloadAddModal({ isAdd, onClose }) {
    return (
      <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Add Downloadable Document</h2>
      <div className="my-8 space-y-3">
         <div className="space-y-2">
            <label className="">Title</label>
            <input
               type="text"
               placeholder="Title"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
         
         <div className="space-y-2">
            <label className="">Class</label>
            <input
               type="text"
               placeholder="Class"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Document Type</label>
            <input
               type="text"
               placeholder="Document Type"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="" htmlFor="">Upload File</label>
            <input className="block w-full cursor-pointer rounded bg-gray-100 text-textGray border-transparent focus:border-primary focus:outline-none" aria-describedby="" id="" type="file" />
         </div>
      </div>

   </Modal>
    );
}