import InfoAction from "../../InfoAction";
import PListTable from "./PListTable";

export default function ParentsList() {
    return (
      <div className="my-4 bg-white rounded-md p-4 md:p-6">
        <InfoAction />

        <PListTable />
      </div>
    );
}