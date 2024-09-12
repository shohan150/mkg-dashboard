import Modal from "../../common/Modal";

export default function ExNmAddModal({ isAdd, onClose }) {
    return (
      <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Add Exam Name</h2>
      <div className="my-8 space-y-3">
         <div className="space-y-2">
            <label className="">Exam Name</label>
            <input
               type="text"
               placeholder="Employee Name"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">Start Date</label>
            <input
               type="date"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         <div className="space-y-2">
            <label className="">End Date</label>
            <input
               type="date"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
         
         <div className="space-y-2">
            <label className="">Admission Year</label>
            <select
            id=""
            name=""
            defaultValue="2024"
            className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
            >
               <option value="2024">2024</option>
               <option value="2023">2023</option>
               <option value="2022">2022</option>
            </select>
         </div>
      </div>
   </Modal>
    );
}