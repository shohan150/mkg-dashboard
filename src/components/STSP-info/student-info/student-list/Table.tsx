import {
  DataSource,
  InfiniteTable,
  InfiniteTablePropColumns,
} from "@infinite-table/infinite-react";

type Person = {
  Id: number;
  FirstName: string;
  Age: number;
};

const columns: InfiniteTablePropColumns<Person> = {
  id: {
    // specifies which field from the data source
    // should be rendered in this column
    field: "Id",
    type: "number",
    defaultWidth: 80,
  },

  firstName: {
    field: "FirstName",
    header: "First Name",
  },
  age: { field: "Age", type: "number" },
};

const data: Person[] = [
  {
    Id: 1,
    FirstName: "Bob",
    Age: 3,
  },
  {
    Id: 2,
    FirstName: "Alice",
    Age: 50,
  },
  {
    Id: 3,
    FirstName: "Bill",
    Age: 5,
  },
];

export default function App() {
  return (
    <div className="text-red-600 bg-yellow relative">
      <DataSource<Person> data={data} primaryKey="Id">
        <InfiniteTable<Person> columns={columns} />
      </DataSource>
    </div>
  );
}
