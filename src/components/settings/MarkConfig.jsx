import MarkConfTable from "./mark-config/MarkConfTable";

export default function MarkConfig() {
    return (
        <div className="bg-white rounded-md px-4 py-2 my-2 sm:my-4">
            <h3 className="text-2xl font-bold mt-4 mb-8">Mark Config</h3>

            <MarkConfTable />
        </div>
    );
}