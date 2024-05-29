export default function SingleOverview({ data }) {
  return (
    <div className="bg-white p-4 rounded-md flex items-center">
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-${data.iconBg}`}
      >
        {/* <div
        className={`w-14 h-14 flex items-center justify-center rounded-full mr-3 bg-green`}
      > */}
        {data.icon}
      </div>
      <div className="border-l-2 border-red pl-3">
        <h4 className="text-textGray">{data.title}</h4>
        <h4 className="text-xl font-bold">{data.number}</h4>
      </div>
    </div>
  );
}
