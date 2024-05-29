import Overview from "../components/homePage/mainComponents/Overview";

export default function Home() {
  return (
    <div className="space-y-5 mt-4">
      <Overview />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "></div>
    </div>
  );
}
