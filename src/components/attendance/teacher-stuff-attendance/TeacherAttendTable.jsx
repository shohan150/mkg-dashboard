import PrevAttendHistory from "../PrevAttendHistory";
import RadioAttendance from "../RadioAttendance";

export default function TeacherAttendTable() {
   const students = [
      {
         id:'0001',
         image: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
         name: 'Shahinur Alom',
         prevDays:[true, true, false, true, false, true]
      },
      {
         id:'0002',
         image: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
         name: 'Shahinur Alom',
         prevDays:[true, true, false, true, false, true]
      },
      {
         id:'0003',
         image: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
         name: 'Shahinur Alom',
         prevDays:[true, true, false, true, false, true]
      },
      {
         id:'0004',
         image: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
         name: 'Shahinur Alom',
         prevDays:[true, true, false, true, false, true]
      },
   ]
    return (
      <div className="border my-6 rounded shadow-md">
      <table className="w-full text-textGray text-sm leading-8 ">
      <thead className="border-b-2 bg-bgBlue">
        <tr>
          <th className="w-1/12">ID</th>
          <th className="w-1/12">IMAGE</th>
          <th className="w-4/12">NAME</th>
          <th className="w-2/12">STATUS</th>
          <th className="w-4/12">PREVIOUS 7 DAYS STATUS</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 font-medium">
        {students.map((row) => (
          <tr key={row.id} className="text-center">
            <td className="w-1/12">{row.id}</td>
            <td className="w-1/12"><img src={row.image} className="w-7 h-7 rounded-full m-auto" /></td>
            <td className="w-4/12">{row.name}</td>
            <td className="w-2/12"><RadioAttendance /></td>
            <td className="w-4/12"><PrevAttendHistory history={row.prevDays} /></td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    );
}