import SectionHeader from "../common/SectionHeader";
import SupportForm from "../forms/SupportForm";
import ad1 from "/images/ad1.jpg";
import ad2 from "/images/ad2.jpg";

export default function SupportToken() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {/* support token */}
      <div className="rounded-md text-sm bg-white">
        <SectionHeader title="Support Token" />
        <SupportForm />
      </div>

      {/* ads */}
      <div>
        <img src={ad1} alt="" className="w-full" />
        <img src={ad2} alt="" className="w-full" />
      </div>
    </div>
  );
}
