export default function SupportForm() {
  return (
    <div className="p-4 space-y-2">
      <h4 className="text-primary font-medium">Title</h4>
      <input
        type="text"
        placeholder="Type your suggested title"
        className="w-full bg-bgGray rounded p-2 outline-none"
      />
      <h4 className="text-primary font-medium">Description</h4>
      <textarea
        placeholder="Write the problem in detail"
        rows="5"
        className="w-full bg-bgGray rounded p-2 outline-none"
      />

      <div className="flex justify-between items-center">
        <div>{/* input type file will be placed here. */}</div>
        <button className="text-white font-medium bg-blue rounded px-6 leading-10">
          Submit Token
        </button>
      </div>
    </div>
  );
}
