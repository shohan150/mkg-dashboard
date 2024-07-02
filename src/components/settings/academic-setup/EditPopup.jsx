import Modal from "../../common/Modal";

export default function EditPopup({ editContent, setEditContent, isEdit, onClose }) {

  return (
    <Modal isOpen={isEdit} onClose={onClose} width="w-2/3 md:w-1/2">
      {/* modal content */}
      <h2 className="text-2xl">Edit {editContent.title}</h2>
      <div className="my-8 space-y-2">
        <h5 className="text-center text-lg">{editContent.title} Name</h5>
        <input
          type="text"
          value={editContent.row.info}
          onChange={(e) => setEditContent({...editContent, row:{...editContent.row, info:e.target.value}})}
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
        />
      </div>
    </Modal>
  );
}
