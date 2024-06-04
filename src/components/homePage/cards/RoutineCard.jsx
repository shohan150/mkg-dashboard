import books from "/icons/books.png";
export default function RoutineCard({ routine }) {
  const { name, time } = routine;
  return (
    <div className="sm:flex items-center justify-between bg-bgGray p-2 rounded space-y-3">
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full items-center justify-center flex">
          <img src={books} alt="" className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-primary font-medium text-lg">{name}</h4>
          <h4 className="text-textGray font-medium">{time}</h4>
        </div>
      </div>

      <div className="flex justify-center ">
        <h3 className="text-tertiary font-medium pr-2">Room: 301</h3>
        <div>
          <h4 className="text-textGray font-medium border-l-2 border-[#00000045] pl-2">
            Period: 1st period
          </h4>
          <h4 className="text-red font-medium pl-2">Teacher: AKM</h4>
        </div>
      </div>
    </div>
  );
}
