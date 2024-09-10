import { Link } from "react-router-dom";

export const classConfig = [
  {
     id: '1',
     class: "One",
     shift: "Morning",
     section: [{id:"01", name:"jaba", group:"science"}, {id:"02", name:"kobori", group:"general"}, {id:"03",name:"golap", group:"arts"}],
  },
  {
    id: '2',
     class: "One",
     shift: "Day",
     section: [{id:"02", name:"kobori", group:"general"}, {id:"01", name:"golap", group:"arts"}],
  },
  {
    id: '3',
     class: "Two",
     shift: "Morning",
     section: [{id:"03", name:"jaba", group:"science"}, {id:"02", name:"kobori", group:"general"}, {id:"03",name:"golap", group:"arts"}],
  },
  {
    id: '4',
     class: "Two",
     shift: "Morning",
     section: [{id:"04", name:"jaba", group:"science"}, {id:"02", name:"kobori", group:"general"}, {id:"03",name:"golap", group:"arts"}],
  },
]

export default function ClassConfigTable() {
    return (
      <div className="overflow-x-scroll">
      <table className="w-full text-textGray leading-10 mb-4">
      <thead className="bg-bgBlue">
        <tr>
          <th className="w-1/12">Serial</th>
          <th className="w-2/12">Class</th>
          <th className="w-2/12">Shift</th>
          <th className="w-4/12">section</th>
          <th className="w-3/12">Action</th>
        </tr>
      </thead>
      <tbody>
        {classConfig.map(row => (
          <tr key={row.id} className="text-center border-b-2 even:bg-slate-200">
            <td className="w-1/12">{row.id}</td>
            <td className="w-2/12">{row.class}</td>
            <td className="w-2/12">{row.shift}</td>
            <td className="w-4/12 px-2">{row.section.map((item, index) => <p key={index} className="inline bg-red text-white px-2 py-1 rounded m-[2px]">{item.name}</p> )}</td>
            <td className="w-3/12 min-w-40">
              <Link to={`../section-config/${row.id}`}>
              <button
                className="bg-primary px-3 py-2 rounded shadow text-white hover:-translate-y-[2px] duration-200 text-sm my-[6px]"
              >
                Add Class Section
              </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
  </table>
      </div>
    );
}

