import TableDataFeatures from "../../common/TableDataFeatures";

export default function TabHeading() {
    return (
   <div className="flex items-center justify-between mt-4 mb-6">
      <h3 className="text-2xl font-medium">Tabulation Sheet</h3>

      <TableDataFeatures />

   </div>
    );
}