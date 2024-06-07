export default function SectionHeader({ title, headerStyle, children }) {
  return (
    <div className="bg-white col-span-1 order-3 sm:order-2 lg:order-3 rounded-md relative">
      {/* component heading */}
      <h3
        className={`bg-primary text-white text-xl p-4 leading-[33px] rounded-t-md shadow-md ${headerStyle}`}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
