import SingleNotice from "../cards/SingleNotice";
import SectionHeader from "../common/SectionHeader";

export default function Events() {
  const notices = [
    {
      id: "01",
      date: "16 June, 2024",
      type: "info",
      content: "Lorem ipsum dolor sit amet consect, adipisicing elit.",
    },
    {
      id: "02",
      date: "16 June, 2024",
      type: "warning",
      content: "Lorem ipsum dolor sit amet consect, adipisicing elit.",
    },
    {
      id: "03",
      date: "16 June, 2024",
      type: "vacation",
      content: "Lorem ipsum dolor sit amet consect, adipisicing elit.",
    },
    {
      id: "04",
      date: "16 June, 2024",
      type: "warning",
      content: "Lorem ipsum dolor sit amet consect, adipisicing elit.",
    },
  ];
  return (
    <div className="rounded-md text-sm bg-white relative">
      <SectionHeader title="Events" />

      {/* notices */}
      <div className="divide-y-2 p-2">
        {notices.map((notice) => (
          <SingleNotice key={notice.id} notice={notice} />
        ))}
      </div>

      {/* view more botton */}
      <div className="flex justify-end p-2 mt-4">
        <button className="bg-tertiary text-white text-sm font-medium shadow py-1 px-4 rounded absolute bottom-4 right-4">
          View All
        </button>
      </div>
    </div>
  );
}