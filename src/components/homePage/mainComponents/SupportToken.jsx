import SectionHeader from "../common/SectionHeader";
import SupportForm from "../forms/SupportForm";


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
        <img src="/images/ad1.jpg" alt="" className="w-full" />
        <img src="/images/ad2.jpg" alt="" className="w-full" />
      </div>
    </div>
  );
}
