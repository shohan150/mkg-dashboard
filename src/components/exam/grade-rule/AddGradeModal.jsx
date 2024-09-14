import Modal from "../../common/Modal";

export default function AddGradeModal({ isAdd, onClose }) {
    return (
      <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Add Grade</h2>
      <div className="my-8 space-y-3">
         <div className="space-y-2">
            <label className="">Grade Name</label>
            <input
               type="text"
               placeholder="Exam Name"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">GPA</label>
            <input
               type="text"
               placeholder="GPA"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Minimum Mark</label>
            <input
               type="number"
               placeholder="Minimum Mark"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Maximum Mark</label>
            <input
               type="number"
               placeholder="Maximum Mark"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

      </div>
   </Modal>
    );
}