import Modal from "../../common/Modal";

export default function FeeAmountEditModal({ editContent, setEditContent, isEdit, onClose }) {

    return (
   <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit Fee Amount</h2>
      <div className="my-8 space-y-3">
      <div className="space-y-2">
          <label className="">Class</label>
          <select
          onChange={(e)=> setEditContent({...editContent, class:e.target.value}) }
            className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            defaultValue="1"
            name="status"
            id="status"
          >
            <option value="1">One</option>
            <option value="0">Two</option>
          </select>
        </div>
         <div className="space-y-2">
            <label className="">Fee Type</label>
            <select 
               onChange={(e)=> setEditContent({...editContent, type_name:e.target.value}) } className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none" defaultValue="0" name="fee_type" id="fee_type">
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
            <label className="">Amount</label>
            <input
            
            onChange={(e)=> setEditContent({...editContent, late_fee:e.target.value}) }
               type="number"
               placeholder="Amount"
               className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
            />
         </div>

         
         <div className="space-y-2">
            <label className="">Admission Year</label>
            <select 
               onChange={(e)=> setEditContent({...editContent, admission_year:e.target.value}) } className="bg-bgGray appearance-none w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none" defaultValue="2024" name="admission_year" id="admission_year">
                <option value="2024">2024</option>
                <option value="2023">2023</option>
            </select>
         </div>
      </div>
   </Modal>
    );
}