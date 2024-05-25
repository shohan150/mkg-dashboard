import mainMenu from "../../data/mainMenu";

export default function SidebarMenu() {
  console.log(mainMenu);
  return (
    <div className="text-white">
      {mainMenu.map((lvl1, index) => (
        <h3 key={index}>{lvl1.sectionTitle}</h3>
      ))}
    </div>
  );
}
