import Modal from "../../common/Modal";

export default function EditGradeModal({ editContent, setEditContent, isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit Grade</h2>
      <div className="my-8 space-y-2">
         <div className="space-y-2">
            <label className="">Grade Name</label>
            <input
               type="text"
               value={editContent.name}
               onChange={(e)=> setEditContent({...editContent, name:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">GPA</label>
            <input
               type="text"
               value={editContent.gpa}
               onChange={(e)=> setEditContent({...editContent, gpa:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Minimum Mark</label>
            <input
               type="number"
               value={editContent.min}
               onChange={(e)=> setEditContent({...editContent, min:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Maximum Mark</label>
            <input
               type="number"
               value={editContent.max}
               onChange={(e)=> setEditContent({...editContent, max:e.target.value}) }
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

      </div>
   </Modal>
    );
}