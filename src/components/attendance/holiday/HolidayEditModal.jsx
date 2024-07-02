import Modal from "../../common/Modal";

export default function HolidayEditModal({ editContent, setEditContent, isEdit, onClose }) {
    return (
      <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
         <h2 className="text-2xl">Edit Holiday</h2>
         <div className="my-8 space-y-3">
         <div className="space-y-2">
            <label className="">Holiday Name</label>
            <input
               type="text"
               value={editContent.name}
               onChange={(e)=> setEditContent({...editContent, name:e.target.value})}
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>


         <div className="space-y-2">
            <label className="">Date</label>
            <input
               type="date"
               value={editContent.date}
               onChange={(e)=> setEditContent({...editContent, date:e.target.value})}
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Session Year</label>
            <input
               type="text"
               value={editContent.session}
               onChange={(e)=> setEditContent({...editContent, session:e.target.value})}
               placeholder="Session Year"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
      </div>
      </Modal>
    );
}