import Modal from "../../common/Modal";

export default function AddDeductionModal({ isAdd, onClose }) {
    return (
      <Modal isOpen={isAdd} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Add Deduction</h2>
      <div className="my-8 space-y-3">
      <div className="space-y-2">
            <label className="">Name</label>
            <input
               type="text"
               placeholder="Name"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>
         {/* <div className="space-y-2">
            <label className="">Fee Type</label>
            <select className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none appearance-none" defaultValue="0" name="fee_type" id="fee_type">
                <option value="0">Select Fee Type</option>
                <option value="12">Annually</option>
                <option value="6">Bi-Annually</option>
                <option value="4">Tri-Annually</option>
                <option value="3">Quarterly</option>
                <option value="2">Two-Monthly</option>
                <option value="1">Monthly</option>
            </select>
         </div>
         
         

         <div className="space-y-2">
            <label className="">Status</label>
            <select className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none appearance-none" defaultValue="1" name="status" id="status">
                <option value="1">Active</option>
                <option value="0">InActive</option>
            </select>
         </div>
         <div className="space-y-2">
            <label className="">Admission Year</label>
            <select className="bg-bgGray w-full appearance-none rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none" defaultValue="2024" name="admission_year" id="admission_year">
                <option value="2024">2024</option>
                <option value="2023">2023</option>
            </select>
         </div> */}
      </div>

   </Modal>
    );
}