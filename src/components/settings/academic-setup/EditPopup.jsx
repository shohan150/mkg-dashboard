import { useState } from "react";

export default function EditPopup({ editContent, isEdit, setIsEdit }) {
  const [info, setInfo] = useState(editContent.row.info);

  function handleClick() {
    setIsEdit(false);
  }

  return (
    <div
      className={`fixed top-32 right-1/2 translate-x-1/2 transition bg-white rounded-md shadow w-2/3 p-4 ${
        !isEdit && "hidden"
      }`}
      id="myPopup"
    >
      <h2 className="text-2xl">Edit {editContent.title}</h2>
      <div className="my-8 space-y-2">
        <h5 className="text-center text-lg">{editContent.title} Name</h5>
        <input
          type="text"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
        />
      </div>
      <div className="flex justify-end items-center space-x-2 xl:space-x-3">
        <button
          className="bg-blue px-4 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200"
          onClick={handleClick}
        >
          Save
        </button>
        <button
          className="bg-red px-4 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200"
          onClick={handleClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
