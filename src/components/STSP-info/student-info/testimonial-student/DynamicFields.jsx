export default function DynamicFields() {
   const values = ["name", "father's_name", "mother's_name", "village", "post_office", "police_station_upzilla", "district", "exam_name", "exam_center", "exam_held_date", "board_name", "group_name", "roll", "registration_no", "session", "result", "date_of_birth"]
    return (
        <div className="pt-6">
         {
            values.map((item, i) => <span key={i} className="mr-2 border border-slate-400 rounded p-2 leading-10 dashed">{`{${item}}`}</span>)
         }
        </div>
    );
}